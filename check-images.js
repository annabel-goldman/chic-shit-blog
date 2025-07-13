#!/usr/bin/env node

/**
 * Image Analysis Script for Chic Shit Blog
 * Checks current image count and sizes to determine deployment strategy
 */

const fs = require('fs');
const path = require('path');

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function analyzeImages() {
    const articlesDir = './articles';
    
    if (!fs.existsSync(articlesDir)) {
        console.error('❌ Articles directory not found!');
        return;
    }
    
    console.log('📊 Analyzing your image collection...\n');
    
    let totalImages = 0;
    let totalSize = 0;
    let largeFiles = [];
    let folderStats = [];
    
    const folders = fs.readdirSync(articlesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    
    folders.forEach(folder => {
        const folderPath = path.join(articlesDir, folder);
        const files = fs.readdirSync(folderPath).filter(f => 
            f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.webp')
        );
        
        let folderSize = 0;
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            const stats = fs.statSync(filePath);
            folderSize += stats.size;
            totalSize += stats.size;
            
            // Check for files over 50MB (potential GitHub issues)
            if (stats.size > 50 * 1024 * 1024) {
                largeFiles.push({
                    file: path.join(folder, file),
                    size: stats.size
                });
            }
        });
        
        folderStats.push({
            folder,
            imageCount: files.length,
            size: folderSize
        });
        
        totalImages += files.length;
    });
    
    // Display results
    console.log('📈 Current Image Statistics:');
    console.log('═'.repeat(50));
    console.log(`📁 Total folders: ${folders.length}`);
    console.log(`🖼️  Total images: ${totalImages}`);
    console.log(`💾 Total size: ${formatBytes(totalSize)}`);
    console.log(`📊 Average per folder: ${Math.round(totalImages / folders.length)} images`);
    
    // After optimization estimates
    const estimatedPostOptimization = totalImages * 5; // 5 versions per image
    const estimatedSize = totalSize * 3; // Conservative estimate (WebP saves space, but more files)
    
    console.log('\n⚡ After Optimization Estimates:');
    console.log('═'.repeat(50));
    console.log(`📁 Total files: ${estimatedPostOptimization}`);
    console.log(`💾 Estimated size: ${formatBytes(estimatedSize)}`);
    
    // Show large files
    if (largeFiles.length > 0) {
        console.log('\n⚠️  Large Files (>50MB):');
        console.log('═'.repeat(50));
        largeFiles.forEach(file => {
            console.log(`   ${file.file}: ${formatBytes(file.size)}`);
        });
    }
    
    // Recommendations
    console.log('\n💡 Deployment Recommendations:');
    console.log('═'.repeat(50));
    
    if (totalImages > 100 || totalSize > 500 * 1024 * 1024) {
        console.log('🚨 RECOMMENDED: Use Git LFS (Large File Storage)');
        console.log('   Your collection is too large for standard GitHub');
        console.log('   Run these commands:');
        console.log('   git lfs install');
        console.log('   git lfs track "*.png"');
        console.log('   git lfs track "*.webp"');
        console.log('   git lfs track "*.jpg"');
        console.log('   git lfs track "*.jpeg"');
        console.log('   git add .gitattributes');
        console.log('   git commit -m "Add Git LFS tracking"');
    } else if (totalImages > 50) {
        console.log('⚠️  CONSIDER: Git LFS or external hosting');
        console.log('   Your collection is getting large');
        console.log('   Git LFS would provide better performance');
    } else {
        console.log('✅ GOOD TO GO: Standard GitHub deployment');
        console.log('   Your collection size is manageable');
    }
    
    console.log('\n🌐 Alternative Options:');
    console.log('═'.repeat(50));
    console.log('1. External Image Hosting:');
    console.log('   • Cloudinary (free: 25GB storage)');
    console.log('   • ImageKit (free: 20GB storage)');
    console.log('   • AWS S3 (pay-as-you-go, very cheap)');
    console.log('');
    console.log('2. Image Optimization Services:');
    console.log('   • Netlify (automatic optimization)');
    console.log('   • Vercel (automatic optimization)');
    console.log('   • Cloudflare Polish (automatic WebP)');
    
    // Show top 5 largest folders
    console.log('\n📁 Largest Folders:');
    console.log('═'.repeat(50));
    folderStats
        .sort((a, b) => b.size - a.size)
        .slice(0, 5)
        .forEach((folder, index) => {
            console.log(`${index + 1}. ${folder.folder}`);
            console.log(`   ${folder.imageCount} images, ${formatBytes(folder.size)}`);
        });
    
    console.log('\n🚀 Next Steps:');
    console.log('═'.repeat(50));
    console.log('1. Choose your deployment strategy based on the recommendations above');
    console.log('2. If using Git LFS, set it up before running npm run optimize-images');
    console.log('3. If using external hosting, we can modify the code to use external URLs');
    console.log('4. Run npm run optimize-images to create optimized versions');
    console.log('5. Deploy using npm run deploy');
    
    console.log('\n📖 See DEPLOYMENT_GUIDE.md for detailed instructions!');
}

// Run the analysis
analyzeImages(); 