#!/usr/bin/env node

/**
 * Fix GitHub Pages Path Issues
 * This script will help identify and fix path issues for GitHub Pages deployment
 */

const fs = require('fs');
const path = require('path');

function fixGitHubPaths() {
    console.log('🔧 Fixing GitHub Pages path issues...\n');
    
    // Read the current script.js file
    const scriptPath = './script.js';
    let scriptContent = fs.readFileSync(scriptPath, 'utf8');
    
    console.log('📝 Issues found:');
    console.log('═'.repeat(50));
    
    // Count issues
    let issuesFound = 0;
    
    // Check for spaces in paths (will need URL encoding)
    const spaceMatches = scriptContent.match(/articles\/[^"]*\s[^"]*/g);
    if (spaceMatches) {
        console.log(`🚨 Found ${spaceMatches.length} paths with spaces that need URL encoding`);
        console.log('   Examples:');
        spaceMatches.slice(0, 3).forEach(match => {
            console.log(`   - "${match}"`);
        });
        issuesFound += spaceMatches.length;
    }
    
    // Check for old image paths (not using optimized versions)
    const oldImageMatches = scriptContent.match(/<img\s+src="[^"]*\.png"/g);
    if (oldImageMatches) {
        console.log(`⚠️  Found ${oldImageMatches.length} old image paths (not optimized)`);
        issuesFound += oldImageMatches.length;
    }
    
    console.log(`\n📊 Total issues found: ${issuesFound}`);
    
    if (issuesFound > 0) {
        console.log('\n💡 Recommended fixes:');
        console.log('═'.repeat(50));
        console.log('1. URL encode spaces in folder names');
        console.log('2. Ensure all images use the optimized lazy loading format');
        console.log('3. Add base path for GitHub Pages if needed');
        
        console.log('\n🔧 Quick fixes:');
        console.log('═'.repeat(50));
        
        // Show URL encoding examples
        console.log('URL encoding examples:');
        const exampleFolders = [
            '10-11-2024 My Favorite Details',
            '9-23-2024 Chic Cinema TV Shows to Watch This Fall',
            '9-10-2024 Fashion Quiz My Favorites Edition'
        ];
        
        exampleFolders.forEach(folder => {
            const encoded = encodeURIComponent(folder);
            console.log(`   "${folder}" → "${encoded}"`);
        });
    }
    
    console.log('\n🌐 Testing your GitHub Pages site:');
    console.log('═'.repeat(50));
    console.log('1. Visit: https://annabel-goldman.github.io/chic-shit-blog/');
    console.log('2. Open browser dev tools (F12)');
    console.log('3. Check the Console tab for 404 errors');
    console.log('4. Check the Network tab to see which images are failing');
    
    console.log('\n📋 Manual test steps:');
    console.log('═'.repeat(50));
    console.log('1. Try accessing an image directly:');
    console.log('   https://annabel-goldman.github.io/chic-shit-blog/articles/10-11-2024%20My%20Favorite%20Details/1.png');
    console.log('2. If that works, the issue is in the JavaScript path construction');
    console.log('3. If that fails, the issue is with GitHub Pages serving the files');
    
    console.log('\n🚀 Next steps:');
    console.log('═'.repeat(50));
    console.log('1. Test the manual image URL above');
    console.log('2. If it works, we need to fix the JavaScript paths');
    console.log('3. If it fails, we need to check GitHub Pages configuration');
    console.log('4. Consider using a simpler folder structure without spaces');
}

// Run the fix
fixGitHubPaths(); 