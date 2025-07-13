const fs = require('fs');

function fixDoubleMedium() {
    const scriptPath = './script.js';
    let content = fs.readFileSync(scriptPath, 'utf8');
    
    console.log('🔧 Fixing double -medium references in script.js...\n');
    
    // Replace all instances of -medium-medium with just -medium
    const beforeCount = (content.match(/-medium-medium/g) || []).length;
    content = content.replace(/-medium-medium/g, '-medium');
    const afterCount = (content.match(/-medium-medium/g) || []).length;
    
    console.log(`✅ Fixed ${beforeCount} double -medium references`);
    console.log(`📊 Remaining double references: ${afterCount}`);
    
    // Write the corrected content back
    fs.writeFileSync(scriptPath, content);
    
    // Also add URL encoding for the folder paths
    const encodedPaths = [
        { from: 'articles/10-11-2024 My Favorite Details/', to: 'articles/10-11-2024%20My%20Favorite%20Details/' },
        { from: 'articles/10-14-2024 Autumn The Mood Board/', to: 'articles/10-14-2024%20Autumn%20The%20Mood%20Board/' },
        { from: 'articles/7-23-2024 My Fave Makeup/', to: 'articles/7-23-2024%20My%20Fave%20Makeup/' },
        { from: 'articles/7-27-2024 SexyThings Pt.2/', to: 'articles/7-27-2024%20SexyThings%20Pt.2/' },
        { from: 'articles/7-29-2024 HairCare/', to: 'articles/7-29-2024%20HairCare/' },
        { from: 'articles/8-14-2024 SexyThings Pt.3/', to: 'articles/8-14-2024%20SexyThings%20Pt.3/' },
        { from: 'articles/8-16-2024 What To Do When Bored Outside /', to: 'articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/' },
        { from: 'articles/8-18-2024 Cancer  Rising The Mood Board/', to: 'articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/' },
        { from: 'articles/8-21-2024 Capricorn Rising The Mood Board/', to: 'articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/' },
        { from: 'articles/8-25-2024 Pisces Sun The Mood Board/', to: 'articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/' },
        { from: 'articles/8-3-2024 MyFavoritePatterns/', to: 'articles/8-3-2024%20MyFavoritePatterns/' },
        { from: 'articles/8-5-2024 Feeling Sexy Single A Guide/', to: 'articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/' },
        { from: 'articles/8-7-2024 MyFavoriteFloralScents/', to: 'articles/8-7-2024%20MyFavoriteFloralScents/' },
        { from: 'articles/8-8-2024 Leo Sun The Mood Board/', to: 'articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/' },
        { from: 'articles/9-10-2024 Fashion Quiz My Favorites Edition/', to: 'articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/' },
        { from: 'articles/9-11-2024 SexyThings Pt.4/', to: 'articles/9-11-2024%20SexyThings%20Pt.4/' },
        { from: 'articles/9-13-2024 Chic Cinema Fall Movie Recs/', to: 'articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/' },
        { from: 'articles/9-13-2024 My Favorite Bag Shapes/', to: 'articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/' },
        { from: 'articles/9-2-2024 MyFavoriteSymbols/', to: 'articles/9-2-2024%20MyFavoriteSymbols/' },
        { from: 'articles/9-21-2024 Halloween Costumes/', to: 'articles/9-21-2024%20Halloween%20Costumes/' },
        { from: 'articles/9-23-2024 Chic Cinema TV Shows to Watch This Fall/', to: 'articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/' },
        { from: 'articles/9-25-2024 My Favorite Runways/', to: 'articles/9-25-2024%20My%20Favorite%20Runways/' },
        { from: 'articles/9-26-2024 My Fall 2024 Trend Predictions/', to: 'articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/' },
        { from: 'articles/9-3-2024 For Love and Lemons Halloween Costumes/', to: 'articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/' },
        { from: 'articles/9-5-2024 Fashion Quiz/', to: 'articles/9-5-2024%20Fashion%20Quiz/' },
        { from: 'articles/9-8-2024 My Favorite Fabrics/', to: 'articles/9-8-2024%20My%20Favorite%20Fabrics/' },
        { from: 'articles/Gemini Moon The Mood Board/', to: 'articles/Gemini%20Moon%20The%20Mood%20Board/' },
        { from: 'articles/Libra Rising The Mood Board/', to: 'articles/Libra%20Rising%20The%20Mood%20Board/' }
    ];
    
    let encodingChanges = 0;
    encodedPaths.forEach(path => {
        const regex = new RegExp(path.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const beforeMatches = (content.match(regex) || []).length;
        content = content.replace(regex, path.to);
        if (beforeMatches > 0) {
            console.log(`✅ URL encoded ${beforeMatches} paths: ${path.from} → ${path.to}`);
            encodingChanges += beforeMatches;
        }
    });
    
    // Write the final corrected content back
    fs.writeFileSync(scriptPath, content);
    
    console.log(`\n📊 Total URL encoding changes: ${encodingChanges}`);
    console.log('✅ All image paths are now correctly formatted for GitHub Pages');
}

// Run the fix
fixDoubleMedium();
console.log('\n🎉 Double -medium references and URL encoding fixed!'); 