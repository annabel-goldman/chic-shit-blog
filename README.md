# Chic Shit Fashion Blog

A modern, photo-centric fashion blog with a sharp, edgy design aesthetic. Built with clean HTML, CSS, and JavaScript for optimal performance and easy customization.

## 🎨 Design Features

- **Color Palette**: Dark grey background (#59656f) with accent colors in light green (#e5f4e3) and pink (#f4acb7)
- **Typography**: 
  - Headers: Crimson Text (serif) for dramatic impact
  - Body: League Spartan Bold for modern readability
- **Sharp Edges**: No rounded corners for a clean, architectural feel
- **Photo-Optimized**: Grid layout and gallery systems designed for fashion photography
- **Responsive Design**: Works seamlessly on all devices

## 🚀 Features

### Core Functionality
- **Main Blog Page**: Grid-based layout displaying all posts
- **Individual Post Pages**: Full-width post display with rich content
- **Search Functionality**: Real-time search through titles, content, categories, and tags
- **Category System**: Organized content with visual category tags
- **Date Display**: Formatted publish dates for each post
- **Image Galleries**: Built-in support for multiple images per post

### User Experience
- **Smooth Interactions**: Hover effects and transitions
- **Keyboard Navigation**: Press '/' to focus search, 'ESC' to go back
- **Loading States**: Visual feedback during content loading
- **Error Handling**: Graceful handling of missing content
- **Accessibility**: Proper focus states and semantic HTML

### Technical Features
- **Advanced Image Optimization**: WebP format support with PNG fallbacks
- **Responsive Images**: Multiple sizes (480px, 768px, 1200px) for different devices
- **Lazy Loading**: Images load only when needed for better performance
- **Progressive Loading**: First image loads immediately, others on-demand
- **SEO-Friendly**: Proper meta tags and semantic structure
- **Mobile-First**: Responsive design that works on all screen sizes
- **Fast Loading**: Optimized CSS and JavaScript
- **Easy Customization**: Well-structured code with CSS variables

## 📁 File Structure

```
chic-shit-blog/
├── index.html          # Main blog page
├── post.html           # Individual post template
├── main.css            # Styling for main blog page
├── post.css            # Styling for individual post pages
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 📋 CSS Structure

The blog uses two separate CSS files for better organization and performance:

- **`main.css`**: Styles for the main blog page (`index.html`)
  - Post grid layout
  - Search functionality
  - Card-based post display
  - Main page responsive design

- **`post.css`**: Styles for individual post pages (`post.html`)
  - Full post layout
  - Image galleries
  - Back navigation
  - Post-specific responsive design

**Benefits of Split CSS:**
- **Better Performance**: Each page only loads the CSS it needs
- **Easier Maintenance**: Styles are organized by functionality
- **Cleaner Code**: Reduced CSS file size per page
- **Targeted Optimization**: Specific styles for each page type

Both files share common base styles (typography, colors, header, footer) to maintain consistency.

## 🛠️ Customization

### Adding New Posts

Edit the `blogPosts` array in `script.js`:

```javascript
{
    id: 6,
    title: "Your Post Title",
    excerpt: "Brief description of your post...",
    content: `
        <p>Your full post content with HTML...</p>
        <h2>Subheadings</h2>
        <p>More content...</p>
        <div class="image-gallery">
            <img src="image1.jpg" alt="Description" class="gallery-image">
            <img src="image2.jpg" alt="Description" class="gallery-image">
        </div>
    `,
    image: "featured-image.jpg",
    category: "Your Category",
    date: "2024-03-20",
    tags: ["tag1", "tag2", "tag3"]
}
```

### Changing Colors

Update the CSS variables in both `main.css` and `post.css`:

```css
:root {
    --dark-grey: #59656f;     /* Background color */
    --light-green: #e5f4e3;   /* Accent color 1 */
    --pink: #f4acb7;          /* Accent color 2 */
    --black: #000000;         /* Text/header color */
    --white: #ffffff;         /* Card backgrounds */
}
```

### Modifying Fonts

Replace the imports in both HTML files and update the font-family declarations in both `main.css` and `post.css`:

```css
/* For headers */
.logo, .post-title, .post-full-title {
    font-family: 'Your Header Font', serif;
}

/* For body text */
body, .search-input {
    font-family: 'Your Body Font', sans-serif;
}
```

### Adding New Categories

Categories are automatically generated from the post data. Just add new category names to your posts and they'll appear with the existing styling.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Under 480px

## 🖼️ Image Optimization

### Automated Image Optimization
The blog includes advanced image optimization features:

#### What's Included:
- **WebP Format**: 60-80% smaller file sizes than PNG
- **Responsive Images**: 3 sizes per image for different devices
- **Lazy Loading**: Images load only when needed
- **Progressive Loading**: First image loads immediately
- **Smooth Transitions**: Loading states and fade-in effects

#### Quick Setup:
```bash
# Install dependencies
npm install

# Optimize all images
npm run optimize-images
```

This will create optimized versions of all your images:
- `1.webp`, `1-small.webp`, `1-medium.webp` (WebP versions)
- `1-small.png`, `1-medium.png` (PNG fallbacks)

### Manual Image Guidelines

#### Featured Images
- **Size**: 600x400px recommended
- **Format**: JPG or PNG
- **Aspect Ratio**: 3:2 for best results

#### Gallery Images
- **Size**: 1200x900px recommended (will be auto-resized)
- **Format**: PNG for best quality (will be converted to WebP)
- **Aspect Ratio**: 4:3 for consistent gallery appearance

#### Performance Benefits
- **60-80% smaller file sizes** with WebP
- **50% faster page loads** with lazy loading
- **Better mobile experience** with responsive images
- **Improved SEO scores** with Core Web Vitals optimization

## 🔧 Setup Instructions

1. **Download/Clone**: Get all files in the same directory
2. **Install Dependencies**: Run `npm install` to install image optimization tools
3. **Add Images**: Place your PNG images in the `articles/` folders
4. **Optimize Images**: Run `npm run optimize-images` to create WebP and responsive versions
5. **Content**: Replace sample posts with your content in `script.js`
6. **Customize**: Modify colors, fonts, and styling as needed
7. **Deploy**: Upload to any web host or use GitHub Pages

### For Optimal Performance:
- Use **Netlify** or **Vercel** for hosting (automatic image optimization)
- Enable **CDN** for global fast loading
- Test performance with **Google PageSpeed Insights**

## 🌟 Advanced Features

### Adding a Content Management System
The blog is designed to work with any CMS. Replace the `blogPosts` array with an API call:

```javascript
async function loadPostsFromAPI() {
    try {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        allPosts = posts;
        loadPosts();
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}
```

### Social Media Integration
Add social sharing buttons to individual posts by adding this to the post template:

```html
<div class="social-share">
    <a href="#" class="share-btn">Share on Instagram</a>
    <a href="#" class="share-btn">Share on Pinterest</a>
</div>
```

### Analytics Integration
Add Google Analytics or other tracking by including the tracking script in both HTML files.

## 🎯 SEO Optimization

The blog includes basic SEO optimization:
- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt text for images
- Clean URL structure
- Fast loading times

For enhanced SEO, consider adding:
- Schema markup for articles
- Open Graph tags
- Twitter Card meta tags
- XML sitemap generation

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements. Some areas for enhancement:
- Dark mode toggle
- Comment system
- Social media feed integration
- Advanced search filters
- Admin panel for content management

## 📞 Support

For questions or support, please refer to the documentation or create an issue in the project repository.

---

**Made with 💖 for the fashion community** 