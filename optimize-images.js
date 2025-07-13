#!/usr/bin/env node

/**
 * Image Optimization Script for Chic Shit Blog
 * 
 * This script converts all PNG images in the articles directory to:
 * - WebP format (smaller file sizes)
 * - Multiple responsive sizes (480px, 768px, original)
 * 
 * Usage:
 * 1. npm install sharp
 * 2. node optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const SIZES = {
    small: 480,
    medium: 768,
    large: 1200
};

const QUALITY = {
    png: 80,
    webp: 80
};

async function optimizeImages() {
    const articlesDir = './articles';
    
    if (!fs.existsSync(articlesDir)) {
        console.error('❌ Articles directory not found!');
        return;
    }
    
    const folders = fs.readdirSync(articlesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    
    console.log(`🚀 Starting image optimization for ${folders.length} article folders...`);
    
    let totalProcessed = 0;
    
    for (const folder of folders) {
        const folderPath = path.join(articlesDir, folder);
        const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.png'));
        
        if (files.length === 0) {
            console.log(`⚠️  No PNG files found in: ${folder}`);
            continue;
        }
        
        console.log(`\n📁 Processing folder: ${folder} (${files.length} images)`);
        
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const baseName = path.basename(file, '.png');
            
            try {
                // Get original image info
                const metadata = await sharp(filePath).metadata();
                console.log(`   📸 Processing: ${file} (${metadata.width}x${metadata.height})`);
                
                // Create responsive PNG versions
                await sharp(filePath)
                    .resize(SIZES.small, SIZES.small, { 
                        fit: 'inside',
                        withoutEnlargement: true 
                    })
                    .png({ quality: QUALITY.png })
                    .toFile(path.join(folderPath, `${baseName}-small.png`));
                
                await sharp(filePath)
                    .resize(SIZES.medium, SIZES.medium, { 
                        fit: 'inside',
                        withoutEnlargement: true 
                    })
                    .png({ quality: QUALITY.png })
                    .toFile(path.join(folderPath, `${baseName}-medium.png`));
                
                // Create WebP versions
                await sharp(filePath)
                    .webp({ quality: QUALITY.webp })
                    .toFile(path.join(folderPath, `${baseName}.webp`));
                
                await sharp(filePath)
                    .resize(SIZES.small, SIZES.small, { 
                        fit: 'inside',
                        withoutEnlargement: true 
                    })
                    .webp({ quality: QUALITY.webp })
                    .toFile(path.join(folderPath, `${baseName}-small.webp`));
                
                await sharp(filePath)
                    .resize(SIZES.medium, SIZES.medium, { 
                        fit: 'inside',
                        withoutEnlargement: true 
                    })
                    .webp({ quality: QUALITY.webp })
                    .toFile(path.join(folderPath, `${baseName}-medium.webp`));
                
                totalProcessed++;
                console.log(`   ✅ Optimized: ${file}`);
                
            } catch (error) {
                console.error(`   ❌ Error processing ${file}:`, error.message);
            }
        }
    }
    
    console.log(`\n🎉 Image optimization complete!`);
    console.log(`📊 Total images processed: ${totalProcessed}`);
    console.log(`📁 Total files created: ${totalProcessed * 5} (original + 4 optimized versions per image)`);
    console.log(`\n📋 Next steps:`);
    console.log(`1. Test your site to ensure images load correctly`);
    console.log(`2. Deploy to your hosting provider`);
    console.log(`3. Use Google PageSpeed Insights to measure performance`);
}

// Check if sharp is installed
try {
    require('sharp');
} catch (error) {
    console.error('❌ Sharp not found! Please install it first:');
    console.error('npm install sharp');
    process.exit(1);
}

// Run the optimization
optimizeImages().catch(console.error); 