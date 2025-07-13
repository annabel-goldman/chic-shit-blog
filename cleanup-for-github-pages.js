const fs = require('fs');
const path = require('path');

// Function to clean up image files - keep only medium size
function cleanupImages() {
    const articlesDir = './articles';
    const folders = fs.readdirSync(articlesDir);
    
    let deletedCount = 0;
    let keptCount = 0;
    
    console.log('🧹 Cleaning up images - keeping only medium size...\n');
    
    folders.forEach(folder => {
        const folderPath = path.join(articlesDir, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath);
            
            files.forEach(file => {
                const filePath = path.join(folderPath, file);
                
                // Delete small and large versions, keep only medium
                if (file.includes('-small.') || (!file.includes('-medium.') && !file.includes('-small.') && (file.endsWith('.png') || file.endsWith('.webp')))) {
                    fs.unlinkSync(filePath);
                    deletedCount++;
                    console.log(`❌ Deleted: ${folder}/${file}`);
                } else if (file.includes('-medium.')) {
                    keptCount++;
                    console.log(`✅ Kept: ${folder}/${file}`);
                }
            });
        }
    });
    
    console.log(`\n📊 Cleanup complete: Kept ${keptCount} images, deleted ${deletedCount} images`);
    return { keptCount, deletedCount };
}

// Function to update script.js to use only medium images
function updateScriptForMediumOnly() {
    const scriptPath = './script.js';
    let content = fs.readFileSync(scriptPath, 'utf8');
    
    // Replace the responsive image code with medium-only code
    const oldPictureCode = `                if (index === 0) {
                    // First image loads immediately with WebP support and responsive sizes
                    return \`<picture>
                        <source 
                            srcset="\${webpSrc.replace('.webp', '-small.webp')} 480w,
                                    \${webpSrc.replace('.webp', '-medium.webp')} 768w,
                                    \${webpSrc} 1200w"
                            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            type="image/webp">
                        <img 
                            src="\${originalSrc}" 
                            srcset="\${originalSrc.replace('.png', '-small.png')} 480w,
                                    \${originalSrc.replace('.png', '-medium.png')} 768w,
                                    \${originalSrc} 1200w"
                            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            alt="\${alt}" 
                            class="\${className}">
                    </picture>\`;
                } else {
                    // Other images use lazy loading with WebP support and responsive sizes
                    return \`<picture>
                        <source 
                            data-srcset="\${webpSrc.replace('.webp', '-small.webp')} 480w,
                                        \${webpSrc.replace('.webp', '-medium.webp')} 768w,
                                        \${webpSrc} 1200w"
                            data-sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            type="image/webp">
                        <img 
                            data-src="\${originalSrc}" 
                            data-srcset="\${originalSrc.replace('.png', '-small.png')} 480w,
                                        \${originalSrc.replace('.png', '-medium.png')} 768w,
                                        \${originalSrc} 1200w"
                            data-sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            alt="\${alt}" 
                            class="\${className} lazy">`;
    
    const newPictureCode = `                if (index === 0) {
                    // First image loads immediately with WebP support - medium size only
                    return \`<picture>
                        <source 
                            srcset="\${webpSrc.replace('.webp', '-medium.webp')}"
                            type="image/webp">
                        <img 
                            src="\${originalSrc.replace('.png', '-medium.png')}" 
                            alt="\${alt}" 
                            class="\${className}">
                    </picture>\`;
                } else {
                    // Other images use lazy loading with WebP support - medium size only
                    return \`<picture>
                        <source 
                            data-srcset="\${webpSrc.replace('.webp', '-medium.webp')}"
                            type="image/webp">
                        <img 
                            data-src="\${originalSrc.replace('.png', '-medium.png')}" 
                            alt="\${alt}" 
                            class="\${className} lazy">`;
    
    content = content.replace(oldPictureCode, newPictureCode);
    
    fs.writeFileSync(scriptPath, content);
    console.log('✅ Updated script.js to use only medium images');
}

// Function to update CSS for responsive medium images
function updateCSSForResponsive() {
    const cssPath = './post.css';
    let content = fs.readFileSync(cssPath, 'utf8');
    
    // Add responsive CSS for medium images
    const responsiveCSS = `
/* Responsive images - scale medium images based on screen size */
.post-image {
    width: 100%;
    height: auto;
    max-width: 600px; /* Medium image size */
    object-fit: cover;
}

/* Scale down on smaller screens */
@media (max-width: 480px) {
    .post-image {
        max-width: 100%;
        width: 100%;
    }
}

/* Scale up slightly on larger screens */
@media (min-width: 1200px) {
    .post-image {
        max-width: 800px; /* Slightly larger than medium */
    }
}
`;
    
    // Add the responsive CSS if it doesn't exist
    if (!content.includes('/* Responsive images - scale medium images')) {
        content += responsiveCSS;
        fs.writeFileSync(cssPath, content);
        console.log('✅ Added responsive CSS for medium images');
    } else {
        console.log('ℹ️ Responsive CSS already exists');
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting GitHub Pages optimization...\n');
    
    // Step 1: Clean up images
    const { keptCount, deletedCount } = cleanupImages();
    
    // Step 2: Update script.js
    updateScriptForMediumOnly();
    
    // Step 3: Update CSS for responsive scaling
    updateCSSForResponsive();
    
    console.log('\n🎉 GitHub Pages optimization complete!');
    console.log(`📊 Summary: Kept ${keptCount} images, deleted ${deletedCount} images`);
    console.log('🔧 Updated script.js and post.css for medium-only images');
    console.log('\nNext steps:');
    console.log('1. Remove Git LFS: git lfs uninstall');
    console.log('2. Remove LFS tracking: rm .gitattributes');
    console.log('3. Add and commit: git add . && git commit -m "Remove LFS, use medium images only"');
    console.log('4. Push to GitHub: git push origin main');
}

main().catch(console.error); 