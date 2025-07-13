#!/usr/bin/env node

/**
 * Careful GitHub Pages Fix
 * Only fixes spaces in folder names without breaking path structure
 */

const fs = require('fs');

function fixGitHubPagesPaths() {
    console.log('🔧 Applying careful GitHub Pages path fix...\n');
    
    const scriptPath = './script.js';
    let scriptContent = fs.readFileSync(scriptPath, 'utf8');
    
    console.log('📝 Fixing spaces in article folder paths...');
    
    // Only fix spaces in folder names, not the entire path
    // Pattern: articles/[folder with spaces]/[filename]
    scriptContent = scriptContent.replace(
        /articles\/([^/\s]+\s[^/]*)\//g,
        (match, folderName) => {
            const encodedFolder = encodeURIComponent(folderName);
            return `articles/${encodedFolder}/`;
        }
    );
    
    // Also fix the main image references
    scriptContent = scriptContent.replace(
        /image: "articles\/([^/\s]+\s[^/]*)\//g,
        (match, folderName) => {
            const encodedFolder = encodeURIComponent(folderName);
            return `image: "articles/${encodedFolder}/`;
        }
    );
    
    fs.writeFileSync(scriptPath, scriptContent);
    
    console.log('✅ Fixed folder name encoding for GitHub Pages');
    console.log('🔍 Changes:');
    console.log('   "My Favorite Details" → "My%20Favorite%20Details"');
    console.log('   "Autumn The Mood Board" → "Autumn%20The%20Mood%20Board"');
    console.log('   etc.');
    
    console.log('\n🚀 Now refresh your local test and the posts should appear!');
    console.log('📱 Local test: http://localhost:8000');
}

// Run the fix
fixGitHubPagesPaths(); 