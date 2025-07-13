const fs = require('fs');

function fixScriptImages() {
    const scriptPath = './script.js';
    let content = fs.readFileSync(scriptPath, 'utf8');
    
    console.log('🔧 Fixing image references in script.js...\n');
    
    // Step 1: Update all image references in the blogPosts array to use medium versions
    // Replace references like "articles/folder/1.png" with "articles/folder/1-medium.png"
    content = content.replace(
        /("articles\/[^"]*?)\.png"/g,
        '$1-medium.png"'
    );
    
    // Step 2: Update the convertToLazyLoading function to work with medium images
    // Replace the old convertToLazyLoading function
    const oldConvertFunction = /function convertToLazyLoading\(content\) \{[\s\S]*?\n\}/;
    
    const newConvertFunction = `function convertToLazyLoading(content) {
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
                // Convert medium.png to medium.webp for WebP source
                const webpSrc = originalSrc.replace(/-medium\\.png$/, '-medium.webp');
                const alt = altMatch ? altMatch[1] : '';
                const className = classMatch ? classMatch[1] : 'gallery-image';
                
                if (index === 0) {
                    // First image loads immediately with WebP support
                    return \`<picture>
                        <source 
                            srcset="\${webpSrc}"
                            type="image/webp">
                        <img 
                            src="\${originalSrc}" 
                            alt="\${alt}" 
                            class="\${className}">
                    </picture>\`;
                } else {
                    // Other images use lazy loading with WebP support
                    return \`<picture>
                        <source 
                            data-srcset="\${webpSrc}"
                            type="image/webp">
                        <img 
                            data-src="\${originalSrc}" 
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
    
    content = content.replace(oldConvertFunction, newConvertFunction);
    
    // Step 3: Update the HTML content in blog posts to use medium images
    content = content.replace(
        /<img src="articles\/([^"]*?)\.png"/g,
        '<img src="articles/$1-medium.png"'
    );
    
    content = content.replace(
        /<img data-src="articles\/([^"]*?)\.png"/g,
        '<img data-src="articles/$1-medium.png"'
    );
    
    // Write the updated content back to script.js
    fs.writeFileSync(scriptPath, content);
    
    console.log('✅ Updated all image references to use medium versions');
    console.log('✅ Fixed convertToLazyLoading function');
    console.log('✅ Updated HTML content in blog posts');
    
    // Count how many replacements were made
    const mediumCount = (content.match(/-medium\.png/g) || []).length;
    console.log(`📊 Found ${mediumCount} medium image references`);
}

// Run the fix
fixScriptImages();
console.log('\n🎉 Script.js image references have been fixed!'); 