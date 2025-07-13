const fs = require('fs');

function fixScriptEncoding() {
    const scriptPath = './script.js';
    let content = fs.readFileSync(scriptPath, 'utf8');
    
    console.log('🔧 Fixing URL encoding in script.js for GitHub Pages...\n');
    
    // Apply URL encoding to folder names with spaces
    const folderMappings = [
        { from: '10-11-2024 My Favorite Details', to: '10-11-2024%20My%20Favorite%20Details' },
        { from: '10-14-2024 Autumn The Mood Board', to: '10-14-2024%20Autumn%20The%20Mood%20Board' },
        { from: '7-20-2024 POV I\'m Your Mother', to: '7-20-2024%20POV%20I\'m%20Your%20Mother' },
        { from: '7-23-2024 My Fave Makeup', to: '7-23-2024%20My%20Fave%20Makeup' },
        { from: '7-27-2024 SexyThings Pt.2', to: '7-27-2024%20SexyThings%20Pt.2' },
        { from: '7-29-2024 HairCare', to: '7-29-2024%20HairCare' },
        { from: '8-14-2024 SexyThings Pt.3', to: '8-14-2024%20SexyThings%20Pt.3' },
        { from: '8-16-2024 What To Do When Bored Outside ', to: '8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20' },
        { from: '8-18-2024 Cancer  Rising The Mood Board', to: '8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board' },
        { from: '8-21-2024 Capricorn Rising The Mood Board', to: '8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board' },
        { from: '8-25-2024 Pisces Sun The Mood Board', to: '8-25-2024%20Pisces%20Sun%20The%20Mood%20Board' },
        { from: '8-3-2024 MyFavoritePatterns', to: '8-3-2024%20MyFavoritePatterns' },
        { from: '8-5-2024 Feeling Sexy Single A Guide', to: '8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide' },
        { from: '8-7-2024 MyFavoriteFloralScents', to: '8-7-2024%20MyFavoriteFloralScents' },
        { from: '8-8-2024 Leo Sun The Mood Board', to: '8-8-2024%20Leo%20Sun%20The%20Mood%20Board' },
        { from: '9-10-2024 Fashion Quiz My Favorites Edition', to: '9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition' },
        { from: '9-11-2024 SexyThings Pt.4', to: '9-11-2024%20SexyThings%20Pt.4' },
        { from: '9-13-2024 Chic Cinema Fall Movie Recs', to: '9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs' },
        { from: '9-13-2024 My Favorite Bag Shapes', to: '9-13-2024%20My%20Favorite%20Bag%20Shapes' },
        { from: '9-2-2024 MyFavoriteSymbols', to: '9-2-2024%20MyFavoriteSymbols' },
        { from: '9-21-2024 Halloween Costumes', to: '9-21-2024%20Halloween%20Costumes' },
        { from: '9-23-2024 Chic Cinema TV Shows to Watch This Fall', to: '9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall' },
        { from: '9-25-2024 My Favorite Runways', to: '9-25-2024%20My%20Favorite%20Runways' },
        { from: '9-26-2024 My Fall 2024 Trend Predictions', to: '9-26-2024%20My%20Fall%202024%20Trend%20Predictions' },
        { from: '9-3-2024 For Love and Lemons Halloween Costumes', to: '9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes' },
        { from: '9-5-2024 Fashion Quiz', to: '9-5-2024%20Fashion%20Quiz' },
        { from: '9-8-2024 My Favorite Fabrics', to: '9-8-2024%20My%20Favorite%20Fabrics' },
        { from: 'Gemini Moon The Mood Board', to: 'Gemini%20Moon%20The%20Mood%20Board' },
        { from: 'Libra Rising The Mood Board', to: 'Libra%20Rising%20The%20Mood%20Board' }
    ];
    
    let changedCount = 0;
    
    // Apply each folder mapping
    folderMappings.forEach(mapping => {
        const fromPattern = new RegExp(`articles/${mapping.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/`, 'g');
        const toReplacement = `articles/${mapping.to}/`;
        
        const beforeCount = (content.match(fromPattern) || []).length;
        content = content.replace(fromPattern, toReplacement);
        const afterCount = (content.match(new RegExp(toReplacement.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        
        if (beforeCount > 0) {
            console.log(`✅ Updated ${beforeCount} references: ${mapping.from} → ${mapping.to}`);
            changedCount += beforeCount;
        }
    });
    
    // Write the updated content back
    fs.writeFileSync(scriptPath, content);
    
    console.log(`\n📊 Total changes made: ${changedCount}`);
    console.log('✅ All image paths are now properly URL encoded for GitHub Pages');
}

// Run the fix
fixScriptEncoding();
console.log('\n🎉 Script.js URL encoding has been fixed!'); 