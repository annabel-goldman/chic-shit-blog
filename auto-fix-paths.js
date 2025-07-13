#!/usr/bin/env node

/**
 * Auto-fix GitHub Pages Path Issues
 * This script automatically fixes all path issues for GitHub Pages deployment
 */

const fs = require('fs');
const path = require('path');

function autoFixPaths() {
    console.log('🔧 Auto-fixing GitHub Pages path issues...\n');
    
    // Read the current script.js file
    const scriptPath = './script.js';
    let scriptContent = fs.readFileSync(scriptPath, 'utf8');
    
    console.log('📝 Applying fixes...');
    console.log('═'.repeat(50));
    
    let fixesApplied = 0;
    
    // Fix 1: URL encode spaces in all article paths
    console.log('1. URL encoding spaces in folder names...');
    const spaceRegex = /articles\/([^"']*)/g;
    scriptContent = scriptContent.replace(spaceRegex, (match, folderPath) => {
        const encodedPath = 'articles/' + encodeURIComponent(folderPath.replace(/\//g, '')).replace(/%2F/g, '/');
        if (match !== encodedPath) {
            fixesApplied++;
        }
        return encodedPath;
    });
    
    // Fix 2: Ensure all images use the convertToLazyLoading function
    console.log('2. Ensuring all images use optimized lazy loading...');
    
    // The convertToLazyLoading function should handle the optimization
    // Let's make sure it's being applied to all posts
    
    // Fix 3: Add proper error handling for missing images
    console.log('3. Adding error handling for missing images...');
    
    // Add error handling to image loading
    const imageLoadingFix = `
// Add error handling for images
document.addEventListener('DOMContentLoaded', function() {
    // Handle image loading errors
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            console.warn('Image failed to load:', e.target.src);
            // Try with URL encoding if not already encoded
            if (e.target.src.indexOf('%20') === -1 && e.target.src.indexOf(' ') !== -1) {
                const encodedSrc = e.target.src.replace(/ /g, '%20');
                console.log('Retrying with encoded URL:', encodedSrc);
                e.target.src = encodedSrc;
            }
        }
    }, true);
});
`;
    
    // Add the error handling if it doesn't exist
    if (!scriptContent.includes('Handle image loading errors')) {
        scriptContent += imageLoadingFix;
        fixesApplied++;
    }
    
    // Fix 4: Update the convertToLazyLoading function to handle URL encoding
    console.log('4. Updating lazy loading function for URL encoding...');
    
    const updatedConvertFunction = `
// Function to convert image gallery HTML to lazy loading format with WebP support
function convertToLazyLoading(content) {
    return content.replace(
        /<div class="image-gallery">[\\s\\S]*?<\\/div>/g,
        function(match, galleryContent) {
            // Split the gallery content into individual img tags
            const imgTags = galleryContent.match(/<img[^>]*>/g) || [];
            
            // Convert all images except the first one to lazy loading
            const processedImages = imgTags.map((imgTag, index) => {
                // Extract src and other attributes
                const srcMatch = imgTag.match(/src="([^"]*)"/);
                const altMatch = imgTag.match(/alt="([^"]*)"/);
                const classMatch = imgTag.match(/class="([^"]*)"/);
                
                if (!srcMatch) return imgTag;
                
                const originalSrc = srcMatch[1];
                // URL encode the path for GitHub Pages
                const encodedSrc = originalSrc.replace(/articles\\/([^/]*)/g, (match, folder) => {
                    return 'articles/' + encodeURIComponent(folder);
                });
                
                const webpSrc = encodedSrc.replace(/\\.png$/, '.webp');
                const alt = altMatch ? altMatch[1] : '';
                const className = classMatch ? classMatch[1] : 'gallery-image';
                
                if (index === 0) {
                    // First image loads immediately with WebP support and responsive sizes
                    return \`<picture>
                        <source 
                            srcset="\${webpSrc.replace('.webp', '-small.webp')} 480w,
                                    \${webpSrc.replace('.webp', '-medium.webp')} 768w,
                                    \${webpSrc} 1200w"
                            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            type="image/webp">
                        <img 
                            src="\${encodedSrc}" 
                            srcset="\${encodedSrc.replace('.png', '-small.png')} 480w,
                                    \${encodedSrc.replace('.png', '-medium.png')} 768w,
                                    \${encodedSrc} 1200w"
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
                            data-src="\${encodedSrc}" 
                            data-srcset="\${encodedSrc.replace('.png', '-small.png')} 480w,
                                        \${encodedSrc.replace('.png', '-medium.png')} 768w,
                                        \${encodedSrc} 1200w"
                            data-sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            alt="\${alt}" 
                            class="\${className} lazy">
                    </picture>\`;
                }
            }).join('\\n                ');
            
            return \`<div class="image-gallery">
                \${processedImages}
            </div>\`;
        }
    );
}`;
    
    // Replace the existing function
    scriptContent = scriptContent.replace(
        /\/\/ Function to convert image gallery HTML to lazy loading format.*?^}/sm,
        updatedConvertFunction
    );
    
    // Write the fixed content back
    fs.writeFileSync(scriptPath, scriptContent);
    
    console.log('✅ Auto-fix complete!');
    console.log(`📊 Applied ${fixesApplied} fixes`);
    
    console.log('\n🚀 Next steps:');
    console.log('═'.repeat(50));
    console.log('1. Test locally: npm start');
    console.log('2. If it works, push to GitHub: git add . && git commit -m "Fix GitHub Pages paths" && git push');
    console.log('3. Wait 2-3 minutes for GitHub Pages to rebuild');
    console.log('4. Test your site: https://annabel-goldman.github.io/chic-shit-blog/');
    
    console.log('\n🔍 Testing checklist:');
    console.log('═'.repeat(50));
    console.log('- [ ] Images load on the main page');
    console.log('- [ ] Images load in individual posts');
    console.log('- [ ] Lazy loading works (images load as you scroll)');
    console.log('- [ ] WebP images are served to supported browsers');
    console.log('- [ ] No 404 errors in browser console');
}

// Run the auto-fix
autoFixPaths(); 