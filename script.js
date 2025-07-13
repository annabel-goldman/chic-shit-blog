// Actual blog posts data from your articles
const blogPosts = [
    {
        id: 1,
        title: "Autumn The Mood Board",
        excerpt: "Capturing the essence of fall through carefully curated visuals and aesthetic inspiration that define the season's mood.",
        content: `
            <p>Fall is more than just a season - it's a feeling, a mood, a complete aesthetic transformation. This mood board captures the essence of autumn through carefully selected visuals that embody the warmth, richness, and sophistication of the season.</p>
            
            <h2>The Autumn Aesthetic</h2>
            <p>There's something magical about the way autumn transforms our relationship with fashion and beauty. The cooler air invites us to embrace deeper colors, richer textures, and more layered looks that tell a story of comfort and elegance.</p>
            
            <div class="image-gallery">
                <img src="articles/10-14-2024%20Autumn%20The%20Mood%20Board/1.png" alt="Autumn Mood Board 1" class="gallery-image">
                <img data-src="articles/10-14-2024%20Autumn%20The%20Mood%20Board/2.png" alt="Autumn Mood Board 2" class="gallery-image lazy">
                <img data-src="articles/10-14-2024%20Autumn%20The%20Mood%20Board/3.png" alt="Autumn Mood Board 3" class="gallery-image lazy">
                <img data-src="articles/10-14-2024%20Autumn%20The%20Mood%20Board/4.png" alt="Autumn Mood Board 4" class="gallery-image lazy">
                <img data-src="articles/10-14-2024%20Autumn%20The%20Mood%20Board/5.png" alt="Autumn Mood Board 5" class="gallery-image lazy">
                <img data-src="articles/10-14-2024%20Autumn%20The%20Mood%20Board/6.png" alt="Autumn Mood Board 6" class="gallery-image lazy">
                <img data-src="articles/10-14-2024%20Autumn%20The%20Mood%20Board/7.png" alt="Autumn Mood Board 7" class="gallery-image lazy">
            </div>
            
            <p>These images represent more than just fashion - they're a celebration of the season's ability to inspire warmth, creativity, and thoughtful style choices that reflect the beauty of change.</p>
        `,
        image: "articles/10-14-2024%20Autumn%20The%20Mood%20Board/1.png",
        category: "Mood Board",
        date: "2024-10-14"
    },
    {
        id: 2,
        title: "My Favorite Details",
        excerpt: "It's the little things that make the biggest impact. Exploring the intricate details that elevate fashion from ordinary to extraordinary.",
        content: `
            <p>Fashion is in the details. Those small, thoughtful touches that might go unnoticed by the casual observer but create the difference between a good look and an unforgettable one.</p>
            
            <h2>The Power of Details</h2>
            <p>In a world of fast fashion and quick trends, it's the carefully considered details that create lasting impact. These are the elements that speak to craftsmanship, creativity, and personal style.</p>
            
            <div class="image-gallery">
                <img src="articles/10-11-2024%20My%20Favorite%20Details/1.png" alt="Fashion Detail 1" class="gallery-image">
                <img src="articles/10-11-2024%20My%20Favorite%20Details/2.png" alt="Fashion Detail 2" class="gallery-image">
                <img src="articles/10-11-2024%20My%20Favorite%20Details/3.png" alt="Fashion Detail 3" class="gallery-image">
                <img src="articles/10-11-2024%20My%20Favorite%20Details/4.png" alt="Fashion Detail 4" class="gallery-image">
                <img src="articles/10-11-2024%20My%20Favorite%20Details/5.png" alt="Fashion Detail 5" class="gallery-image">
                <img src="articles/10-11-2024%20My%20Favorite%20Details/6.png" alt="Fashion Detail 6" class="gallery-image">
                <img src="articles/10-11-2024%20My%20Favorite%20Details/7.png" alt="Fashion Detail 7" class="gallery-image">
            </div>
            
            <p>These details remind us that fashion is an art form, where every element serves a purpose in creating something beautiful and meaningful.</p>
        `,
        image: "articles/10-11-2024%20My%20Favorite%20Details/1.png",
        category: "Details",
        date: "2024-10-11"
    },
    {
        id: 3,
        title: "My Fall 2024 Trend Predictions",
        excerpt: "Looking ahead to the trends that will define fall 2024, from runway inspirations to street style movements that are gaining momentum.",
        content: `
            <p>Fall 2024 is shaping up to be a season of bold contrasts and thoughtful choices. From the runway to the streets, there's a clear movement towards pieces that make statements while remaining timelessly wearable.</p>
            
            <h2>The Trends to Watch</h2>
            <p>This fall, we're seeing a beautiful blend of nostalgia and innovation, with designers and style enthusiasts alike embracing both comfort and drama in equal measure.</p>
            
            <div class="image-gallery">
                <img src="articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/1.png" alt="Fall Trend 1" class="gallery-image">
                <img src="articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/2.png" alt="Fall Trend 2" class="gallery-image">
                <img src="articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/3.png" alt="Fall Trend 3" class="gallery-image">
                <img src="articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/4.png" alt="Fall Trend 4" class="gallery-image">
                <img src="articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/5.png" alt="Fall Trend 5" class="gallery-image">
                <img src="articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/6.png" alt="Fall Trend 6" class="gallery-image">
                <img src="articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/7.png" alt="Fall Trend 7" class="gallery-image">
            </div>
            
            <p>These trends represent more than just seasonal updates - they're a reflection of our collective desire for authenticity, creativity, and self-expression through fashion.</p>
        `,
        image: "articles/9-26-2024%20My%20Fall%202024%20Trend%20Predictions/1.png",
        category: "Trends",
        date: "2024-09-26"
    },
    {
        id: 4,
        title: "My Favorite Runways",
        excerpt: "A curated collection of the most inspiring runway moments that have shaped fashion and continue to influence style today.",
        content: `
            <p>The runway is where fashion dreams become reality. These are the shows that have captured my imagination and continue to influence how I think about style, creativity, and the power of fashion as art.</p>
            
            <h2>Runway Magic</h2>
            <p>There's something electric about a truly great runway show - the way it can transport you, challenge your perceptions, and introduce you to new ways of seeing fashion and beauty.</p>
            
            <div class="image-gallery">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/1.png" alt="Runway 1" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/2.png" alt="Runway 2" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/3.png" alt="Runway 3" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/4.png" alt="Runway 4" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/5.png" alt="Runway 5" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/6.png" alt="Runway 6" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/7.png" alt="Runway 7" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/8.png" alt="Runway 8" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/9.png" alt="Runway 9" class="gallery-image">
                <img src="articles/9-25-2024%20My%20Favorite%20Runways/10.png" alt="Runway 10" class="gallery-image">
            </div>
            
            <p>These runways represent the pinnacle of fashion creativity - moments where design, artistry, and vision come together to create something truly unforgettable.</p>
        `,
        image: "articles/9-25-2024%20My%20Favorite%20Runways/1.png",
        category: "Runways",
        date: "2024-09-25"
    },
    {
        id: 5,
        title: "Chic Cinema: TV Shows to Watch This Fall",
        excerpt: "The best fashion moments happening on screen right now, from costume design to character styling that's shaping our aesthetic.",
        content: `
            <p>Television has become one of the most powerful influences on fashion, and this fall's lineup is no exception. From period pieces to contemporary dramas, these shows are serving up major style inspiration.</p>
            
            <h2>Fashion on Screen</h2>
            <p>The best costume designers know that clothing is character development. These shows understand that fashion isn't just about looking good - it's about storytelling through style.</p>
            
            <div class="image-gallery">
                <img src="articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/1.png" alt="TV Show 1" class="gallery-image">
                <img src="articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/2.png" alt="TV Show 2" class="gallery-image">
                <img src="articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/3.png" alt="TV Show 3" class="gallery-image">
                <img src="articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/4.png" alt="TV Show 4" class="gallery-image">
                <img src="articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/5.png" alt="TV Show 5" class="gallery-image">
                <img src="articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/6.png" alt="TV Show 6" class="gallery-image">
            </div>
            
            <p>These shows remind us that fashion is everywhere - not just on runways and red carpets, but in the stories we tell and the characters we love.</p>
        `,
        image: "articles/9-23-2024%20Chic%20Cinema%20TV%20Shows%20to%20Watch%20This%20Fall/1.png",
        category: "Cinema",
        date: "2024-09-23"
    },
    {
        id: 6,
        title: "Halloween Costumes",
        excerpt: "Fashion meets fantasy in these Halloween costume inspirations that prove dressing up is the ultimate form of creative expression.",
        content: `
            <p>Halloween is fashion's most creative holiday - a time when we can experiment with personas, play with proportions, and push the boundaries of what clothing can communicate.</p>
            
            <h2>Costume as Fashion</h2>
            <p>The best costumes aren't just about accuracy - they're about interpretation, creativity, and finding new ways to express personality through clothing and styling.</p>
            
            <div class="image-gallery">
                <img src="articles/9-21-2024%20Halloween%20Costumes/1.png" alt="Halloween Costume 1" class="gallery-image">
                <img src="articles/9-21-2024%20Halloween%20Costumes/2.png" alt="Halloween Costume 2" class="gallery-image">
                <img src="articles/9-21-2024%20Halloween%20Costumes/3.png" alt="Halloween Costume 3" class="gallery-image">
                <img src="articles/9-21-2024%20Halloween%20Costumes/4.png" alt="Halloween Costume 4" class="gallery-image">
                <img src="articles/9-21-2024%20Halloween%20Costumes/5.png" alt="Halloween Costume 5" class="gallery-image">
                <img src="articles/9-21-2024%20Halloween%20Costumes/6.png" alt="Halloween Costume 6" class="gallery-image">
            </div>
            
            <p>These costumes show us that fashion is play, fashion is art, and fashion is one of the most powerful tools we have for self-expression and transformation.</p>
        `,
        image: "articles/9-21-2024%20Halloween%20Costumes/1.png",
        category: "Costumes",
        date: "2024-09-21"
    },
    {
        id: 7,
        title: "My Favorite Bag Shapes",
        excerpt: "The architecture of accessories: exploring the bag shapes that define eras, complement silhouettes, and make the perfect style statement.",
        content: `
            <p>A bag is more than just a functional accessory - it's architectural sculpture that we carry with us. The shape of a bag can define an era, complement a silhouette, and make the perfect style statement.</p>
            
            <h2>The Art of Bag Design</h2>
            <p>From structured totes to slouchy hobos, each bag shape tells a different story about the woman who carries it and the life she leads.</p>
            
            <div class="image-gallery">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/1.png" alt="Bag Shape 1" class="gallery-image">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/2.png" alt="Bag Shape 2" class="gallery-image">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/3.png" alt="Bag Shape 3" class="gallery-image">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/4.png" alt="Bag Shape 4" class="gallery-image">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/5.png" alt="Bag Shape 5" class="gallery-image">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/6.png" alt="Bag Shape 6" class="gallery-image">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/7.png" alt="Bag Shape 7" class="gallery-image">
                <img src="articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/8.png" alt="Bag Shape 8" class="gallery-image">
            </div>
            
            <p>These bag shapes represent the evolution of design, the intersection of function and beauty, and the endless possibilities of accessory architecture.</p>
        `,
        image: "articles/9-13-2024%20My%20Favorite%20Bag%20Shapes/1.png",
        category: "Accessories",
        date: "2024-09-13"
    },
    {
        id: 8,
        title: "Chic Cinema: Fall Movie Recs",
        excerpt: "The films that are serving major style inspiration this fall, from period pieces to contemporary dramas with unforgettable fashion moments.",
        content: `
            <p>Fall movie season brings us some of the year's most stylish films. From period pieces with exquisite costume design to contemporary dramas with impeccable styling, these films are visual feasts for fashion lovers.</p>
            
            <h2>Cinema as Style Inspiration</h2>
            <p>The best films understand that costume design is character development. These movies use fashion to tell stories, create atmospheres, and transport us to different worlds.</p>
            
            <div class="image-gallery">
                <img src="articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/1.png" alt="Movie 1" class="gallery-image">
                <img src="articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/2.png" alt="Movie 2" class="gallery-image">
                <img src="articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/3.png" alt="Movie 3" class="gallery-image">
                <img src="articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/4.png" alt="Movie 4" class="gallery-image">
                <img src="articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/5.png" alt="Movie 5" class="gallery-image">
                <img src="articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/6.png" alt="Movie 6" class="gallery-image">
                <img src="articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/7.png" alt="Movie 7" class="gallery-image">
            </div>
            
            <p>These films prove that great style transcends time and place - it's about creating memorable, meaningful moments that stay with us long after the credits roll.</p>
        `,
        image: "articles/9-13-2024%20Chic%20Cinema%20Fall%20Movie%20Recs/1.png",
        category: "Cinema",
        date: "2024-09-13"
    },
    {
        id: 9,
        title: "SexyThings Pt.4",
        excerpt: "The fourth installment in our exploration of what makes fashion truly captivating - the details, attitudes, and moments that define allure.",
        content: `
            <p>Continuing our exploration of the elements that make fashion truly captivating. This isn't just about revealing clothing - it's about confidence, attitude, and the subtle details that create genuine allure.</p>
            
            <h2>The Art of Allure</h2>
            <p>True sexiness in fashion comes from confidence, quality, and the knowledge that you look and feel amazing. It's about the cut of a garment, the way fabric moves, and the attitude you bring to every look.</p>
            
            <div class="image-gallery">
                <img src="articles/9-11-2024%20SexyThings%20Pt.4/1.png" alt="Sexy Style 1" class="gallery-image">
                <img src="articles/9-11-2024%20SexyThings%20Pt.4/2.png" alt="Sexy Style 2" class="gallery-image">
                <img src="articles/9-11-2024%20SexyThings%20Pt.4/3.png" alt="Sexy Style 3" class="gallery-image">
                <img src="articles/9-11-2024%20SexyThings%20Pt.4/4.png" alt="Sexy Style 4" class="gallery-image">
                <img src="articles/9-11-2024%20SexyThings%20Pt.4/5.png" alt="Sexy Style 5" class="gallery-image">
                <img src="articles/9-11-2024%20SexyThings%20Pt.4/6.png" alt="Sexy Style 6" class="gallery-image">
                <img src="articles/9-11-2024%20SexyThings%20Pt.4/7.png" alt="Sexy Style 7" class="gallery-image">
            </div>
            
            <p>These looks remind us that the most captivating fashion moments come from owning your style, understanding your body, and wearing clothes that make you feel powerful and beautiful.</p>
        `,
        image: "articles/9-11-2024%20SexyThings%20Pt.4/1.png",
        category: "Style",
        date: "2024-09-11"
    },
    {
        id: 10,
        title: "Fashion Quiz: My Favorites Edition",
        excerpt: "A visual journey through personal style preferences, favorite pieces, and the fashion moments that have shaped my aesthetic perspective.",
        content: `
            <p>Fashion is deeply personal, and our preferences tell a story about who we are, where we've been, and where we're going. This quiz explores the pieces, moments, and inspirations that have shaped my fashion perspective.</p>
            
            <h2>Personal Style Evolution</h2>
            <p>Every fashion lover has those key pieces, moments, and inspirations that define their aesthetic. This collection represents the elements that have most influenced my approach to style and beauty.</p>
            
            <div class="image-gallery">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/1.png" alt="Fashion Quiz 1" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/2.png" alt="Fashion Quiz 2" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/3.png" alt="Fashion Quiz 3" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/4.png" alt="Fashion Quiz 4" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/5.png" alt="Fashion Quiz 5" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/6.png" alt="Fashion Quiz 6" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/7.png" alt="Fashion Quiz 7" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/8.png" alt="Fashion Quiz 8" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/9.png" alt="Fashion Quiz 9" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/10.png" alt="Fashion Quiz 10" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/11.png" alt="Fashion Quiz 11" class="gallery-image">
                <img src="articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/12.png" alt="Fashion Quiz 12" class="gallery-image">
            </div>
            
            <p>These choices reflect not just personal taste, but the journey of developing a unique fashion voice in a world full of endless possibilities and inspirations.</p>
        `,
        image: "articles/9-10-2024%20Fashion%20Quiz%20My%20Favorites%20Edition/1.png",
        category: "Personal",
        date: "2024-09-10"
    },
    {
        id: 11,
        title: "My Favorite Fabrics",
        excerpt: "An exploration of the textiles that define luxury, comfort, and style - from the feel of silk to the structure of wool and everything in between.",
        content: `
            <p>Fabric is the foundation of fashion. The way a material feels, drapes, and moves can completely transform a design. These are the textiles that have captured my attention and continue to inspire my approach to style.</p>
            
            <h2>The Language of Textiles</h2>
            <p>Every fabric tells a story - of craftsmanship, tradition, innovation, and the endless possibilities of what clothing can be. Understanding fabric is understanding the soul of fashion.</p>
            
            <div class="image-gallery">
                <img src="articles/9-8-2024%20My%20Favorite%20Fabrics/1.png" alt="Fabric 1" class="gallery-image">
                <img src="articles/9-8-2024%20My%20Favorite%20Fabrics/2.png" alt="Fabric 2" class="gallery-image">
                <img src="articles/9-8-2024%20My%20Favorite%20Fabrics/3.png" alt="Fabric 3" class="gallery-image">
                <img src="articles/9-8-2024%20My%20Favorite%20Fabrics/4.png" alt="Fabric 4" class="gallery-image">
                <img src="articles/9-8-2024%20My%20Favorite%20Fabrics/5.png" alt="Fabric 5" class="gallery-image">
                <img src="articles/9-8-2024%20My%20Favorite%20Fabrics/6.png" alt="Fabric 6" class="gallery-image">
                <img src="articles/9-8-2024%20My%20Favorite%20Fabrics/7.png" alt="Fabric 7" class="gallery-image">
            </div>
            
            <p>These fabrics represent the tactile pleasure of fashion - the way great clothing feels against the skin, moves with the body, and creates the perfect foundation for personal style.</p>
        `,
        image: "articles/9-8-2024%20My%20Favorite%20Fabrics/1.png",
        category: "Fabrics",
        date: "2024-09-08"
    },
    {
        id: 12,
        title: "Fashion Quiz",
        excerpt: "Test your fashion knowledge and discover new style inspirations through this interactive visual journey of trends, designers, and iconic moments.",
        content: `
            <p>Fashion is a language that speaks to everyone differently. This quiz explores the visual vocabulary of style, from iconic silhouettes to emerging trends that shape how we express ourselves through clothing.</p>
            
            <h2>The Art of Fashion Knowledge</h2>
            <p>Understanding fashion history, recognizing great design, and appreciating the nuances of style are skills that enhance how we see and interact with the world around us.</p>
            
            <div class="image-gallery">
                <img src="articles/9-5-2024%20Fashion%20Quiz/1.png" alt="Fashion Quiz 1" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/2.png" alt="Fashion Quiz 2" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/3.png" alt="Fashion Quiz 3" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/4.png" alt="Fashion Quiz 4" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/5.png" alt="Fashion Quiz 5" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/6.png" alt="Fashion Quiz 6" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/7.png" alt="Fashion Quiz 7" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/8.png" alt="Fashion Quiz 8" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/9.png" alt="Fashion Quiz 9" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/10.png" alt="Fashion Quiz 10" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/11.png" alt="Fashion Quiz 11" class="gallery-image">
                <img src="articles/9-5-2024%20Fashion%20Quiz/12.png" alt="Fashion Quiz 12" class="gallery-image">
            </div>
            
            <p>These questions and visuals celebrate the depth and breadth of fashion knowledge, encouraging us to look deeper and appreciate the artistry in every detail.</p>
        `,
        image: "articles/9-5-2024%20Fashion%20Quiz/1.png",
        category: "Quiz",
        date: "2024-09-05"
    },
    {
        id: 13,
        title: "For Love and Lemons Halloween Costumes",
        excerpt: "Elegant and playful Halloween costume inspirations that blend romantic aesthetics with creative costume design for the perfect fall celebration.",
        content: `
            <p>Halloween doesn't have to mean abandoning your aesthetic. These For Love and Lemons inspired costumes prove that you can embrace the spooky season while maintaining an elegant, romantic approach to dressing up.</p>
            
            <h2>Romance Meets Halloween</h2>
            <p>The best costumes tell a story, and these looks weave together elements of romance, mystery, and playfulness to create Halloween magic that feels both festive and sophisticated.</p>
            
            <div class="image-gallery">
                <img src="articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/1.png" alt="Halloween Costume 1" class="gallery-image">
                <img src="articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/2.png" alt="Halloween Costume 2" class="gallery-image">
                <img src="articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/3.png" alt="Halloween Costume 3" class="gallery-image">
                <img src="articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/4.png" alt="Halloween Costume 4" class="gallery-image">
                <img src="articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/5.png" alt="Halloween Costume 5" class="gallery-image">
                <img src="articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/6.png" alt="Halloween Costume 6" class="gallery-image">
                <img src="articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/7.png" alt="Halloween Costume 7" class="gallery-image">
            </div>
            
            <p>These costumes prove that Halloween fashion can be both creative and beautiful, offering a fresh perspective on seasonal dressing that celebrates both style and celebration.</p>
        `,
        image: "articles/9-3-2024%20For%20Love%20and%20Lemons%20Halloween%20Costumes/1.png",
        category: "Costumes",
        date: "2024-09-03"
    },
    {
        id: 14,
        title: "My Favorite Symbols",
        excerpt: "Exploring the meaningful symbols and motifs that appear throughout fashion history, from ancient patterns to modern interpretations that speak to our souls.",
        content: `
            <p>Fashion is filled with symbols - from ancient motifs to modern interpretations that carry deep meaning and personal significance. These are the symbols that have captured my imagination and continue to inspire my approach to style.</p>
            
            <h2>The Language of Symbols</h2>
            <p>Every symbol tells a story, carries history, and communicates something beyond words. In fashion, these symbols become part of our personal narrative, expressing our values, beliefs, and aspirations.</p>
            
            <div class="image-gallery">
                <img src="articles/9-2-2024%20MyFavoriteSymbols/1.png" alt="Symbol 1" class="gallery-image">
                <img src="articles/9-2-2024%20MyFavoriteSymbols/2.png" alt="Symbol 2" class="gallery-image">
                <img src="articles/9-2-2024%20MyFavoriteSymbols/3.png" alt="Symbol 3" class="gallery-image">
                <img src="articles/9-2-2024%20MyFavoriteSymbols/4.png" alt="Symbol 4" class="gallery-image">
                <img src="articles/9-2-2024%20MyFavoriteSymbols/5.png" alt="Symbol 5" class="gallery-image">
                <img src="articles/9-2-2024%20MyFavoriteSymbols/6.png" alt="Symbol 6" class="gallery-image">
                <img src="articles/9-2-2024%20MyFavoriteSymbols/7.png" alt="Symbol 7" class="gallery-image">
            </div>
            
            <p>These symbols remind us that fashion is a form of communication, allowing us to express complex ideas and emotions through the visual language of clothing and accessories.</p>
        `,
        image: "articles/9-2-2024%20MyFavoriteSymbols/1.png",
        category: "Symbols",
        date: "2024-09-02"
    },
    {
        id: 15,
        title: "Pisces Sun: The Mood Board",
        excerpt: "A dreamy, intuitive exploration of Pisces energy through fashion, capturing the water sign's connection to creativity, emotion, and ethereal beauty.",
        content: `
            <p>Pisces energy is all about intuition, creativity, and a deep connection to the emotional and spiritual realms. This mood board captures the dreamy, flowing aesthetic that embodies the water sign's approach to beauty and style.</p>
            
            <h2>Water Sign Aesthetics</h2>
            <p>Pisces style is about embracing fluidity, both in silhouette and in spirit. It's fashion that moves like water, feels like a dream, and connects us to something deeper than the surface.</p>
            
            <div class="image-gallery">
                <img src="articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/1.png" alt="Pisces Mood 1" class="gallery-image">
                <img src="articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/2.png" alt="Pisces Mood 2" class="gallery-image">
                <img src="articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/3.png" alt="Pisces Mood 3" class="gallery-image">
                <img src="articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/4.png" alt="Pisces Mood 4" class="gallery-image">
                <img src="articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/5.png" alt="Pisces Mood 5" class="gallery-image">
                <img src="articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/6.png" alt="Pisces Mood 6" class="gallery-image">
            </div>
            
            <p>This aesthetic celebrates the Pisces ability to transform everyday moments into something magical, using fashion as a tool for emotional expression and creative exploration.</p>
        `,
        image: "articles/8-25-2024%20Pisces%20Sun%20The%20Mood%20Board/1.png",
        category: "Astrology",
        date: "2024-08-25"
    },
    {
        id: 16,
        title: "Capricorn Rising: The Mood Board",
        excerpt: "Structured elegance meets ambitious style in this exploration of Capricorn rising energy through fashion and aesthetic choices.",
        content: `
            <p>Capricorn rising energy brings structure, ambition, and a refined sense of style to everything it touches. This mood board explores the sophisticated, goal-oriented aesthetic that defines the mountain goat's approach to fashion.</p>
            
            <h2>Structured Sophistication</h2>
            <p>Capricorn rising style is about quality over quantity, investment pieces over trends, and creating a wardrobe that reflects both ambition and timeless elegance.</p>
            
            <div class="image-gallery">
                <img src="articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/1.png" alt="Capricorn Rising 1" class="gallery-image">
                <img src="articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/2.png" alt="Capricorn Rising 2" class="gallery-image">
                <img src="articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/3.png" alt="Capricorn Rising 3" class="gallery-image">
                <img src="articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/4.png" alt="Capricorn Rising 4" class="gallery-image">
                <img src="articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/5.png" alt="Capricorn Rising 5" class="gallery-image">
                <img src="articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/6.png" alt="Capricorn Rising 6" class="gallery-image">
            </div>
            
            <p>This aesthetic celebrates the Capricorn rising's ability to climb any mountain while looking effortlessly put-together, using fashion as a tool for professional success and personal confidence.</p>
        `,
        image: "articles/8-21-2024%20Capricorn%20Rising%20The%20Mood%20Board/1.png",
        category: "Astrology",
        date: "2024-08-21"
    },
    {
        id: 17,
        title: "Cancer Rising: The Mood Board",
        excerpt: "Nurturing, intuitive, and deeply connected to home and comfort, this mood board explores Cancer rising energy through soft, protective style choices.",
        content: `
            <p>Cancer rising energy brings a nurturing, protective quality to personal style. This mood board explores the soft, comforting aesthetic that reflects the crab's deep connection to home, family, and emotional security.</p>
            
            <h2>Comfort and Care</h2>
            <p>Cancer rising style is about creating a sense of home wherever you go, choosing pieces that feel like a warm embrace and reflect your caring, intuitive nature.</p>
            
            <div class="image-gallery">
                <img src="articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/1.png" alt="Cancer Rising 1" class="gallery-image">
                <img src="articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/2.png" alt="Cancer Rising 2" class="gallery-image">
                <img src="articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/3.png" alt="Cancer Rising 3" class="gallery-image">
                <img src="articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/4.png" alt="Cancer Rising 4" class="gallery-image">
                <img src="articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/5.png" alt="Cancer Rising 5" class="gallery-image">
                <img src="articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/6.png" alt="Cancer Rising 6" class="gallery-image">
            </div>
            
            <p>This aesthetic celebrates the Cancer rising's ability to make everyone feel welcome and cared for, using fashion as a way to express love and create emotional connections.</p>
        `,
        image: "articles/8-18-2024%20Cancer%20%20Rising%20The%20Mood%20Board/1.png",
        category: "Astrology",
        date: "2024-08-18"
    },
    {
        id: 18,
        title: "What To Do When Bored Outside",
        excerpt: "Creative outdoor activities and adventures that combine style with spontaneity, perfect for when you need to break free from routine and embrace the world.",
        content: `
            <p>Sometimes the best fashion moments happen when you step outside your comfort zone and embrace spontaneous adventure. This guide explores stylish ways to cure outdoor boredom while looking effortlessly chic.</p>
            
            <h2>Adventure Meets Style</h2>
            <p>The key to outdoor style is finding the balance between looking put-together and being prepared for anything. These activities prove that adventure and elegance can coexist beautifully.</p>
            
            <div class="image-gallery">
                <img src="articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/1.png" alt="Outdoor Activity 1" class="gallery-image">
                <img src="articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/2.png" alt="Outdoor Activity 2" class="gallery-image">
                <img src="articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/3.png" alt="Outdoor Activity 3" class="gallery-image">
                <img src="articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/4.png" alt="Outdoor Activity 4" class="gallery-image">
                <img src="articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/5.png" alt="Outdoor Activity 5" class="gallery-image">
                <img src="articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/6.png" alt="Outdoor Activity 6" class="gallery-image">
            </div>
            
            <p>These activities remind us that the best fashion moments often happen when we're living fully, embracing spontaneity, and allowing our style to be part of our adventures.</p>
        `,
        image: "articles/8-16-2024%20What%20To%20Do%20When%20Bored%20Outside%20/1.png",
        category: "Lifestyle",
        date: "2024-08-16"
    },
    {
        id: 19,
        title: "SexyThings Pt.3",
        excerpt: "The third exploration of what makes fashion truly captivating, focusing on the subtle art of allure and the confidence that comes from perfect fit and styling.",
        content: `
            <p>True allure in fashion isn't about showing more skin - it's about understanding fit, proportion, and the subtle details that create genuine magnetism. This third installment explores the art of sophisticated seduction through style.</p>
            
            <h2>The Art of Subtle Allure</h2>
            <p>The most captivating fashion moments come from confidence, quality, and the knowledge that you look and feel amazing. It's about the cut of a garment, the way fabric moves, and the attitude you bring to every look.</p>
            
            <div class="image-gallery">
                <img src="articles/8-14-2024%20SexyThings%20Pt.3/1.png" alt="Allure 1" class="gallery-image">
                <img src="articles/8-14-2024%20SexyThings%20Pt.3/2.png" alt="Allure 2" class="gallery-image">
                <img src="articles/8-14-2024%20SexyThings%20Pt.3/3.png" alt="Allure 3" class="gallery-image">
                <img src="articles/8-14-2024%20SexyThings%20Pt.3/4.png" alt="Allure 4" class="gallery-image">
                <img src="articles/8-14-2024%20SexyThings%20Pt.3/5.png" alt="Allure 5" class="gallery-image">
                <img src="articles/8-14-2024%20SexyThings%20Pt.3/6.png" alt="Allure 6" class="gallery-image">
                <img src="articles/8-14-2024%20SexyThings%20Pt.3/7.png" alt="Allure 7" class="gallery-image">
            </div>
            
            <p>These looks demonstrate that the most attractive fashion choices are those that enhance your natural beauty and make you feel powerful, confident, and authentically yourself.</p>
        `,
        image: "articles/8-14-2024%20SexyThings%20Pt.3/1.png",
        category: "Style",
        date: "2024-08-14"
    },
    {
        id: 20,
        title: "Leo Sun: The Mood Board",
        excerpt: "Bold, confident, and naturally dramatic, this mood board captures the radiant energy of Leo sun through fashion choices that command attention and celebrate self-expression.",
        content: `
            <p>Leo sun energy is all about confidence, creativity, and natural magnetism. This mood board captures the bold, radiant aesthetic that embodies the lion's approach to fashion and self-expression.</p>
            
            <h2>Solar Confidence</h2>
            <p>Leo style is about embracing your inner star, choosing pieces that reflect your natural confidence and creativity. It's fashion that celebrates individuality and isn't afraid to take center stage.</p>
            
            <div class="image-gallery">
                <img src="articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/1.png" alt="Leo Sun 1" class="gallery-image">
                <img src="articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/2.png" alt="Leo Sun 2" class="gallery-image">
                <img src="articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/3.png" alt="Leo Sun 3" class="gallery-image">
                <img src="articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/4.png" alt="Leo Sun 4" class="gallery-image">
                <img src="articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/5.png" alt="Leo Sun 5" class="gallery-image">
                <img src="articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/6.png" alt="Leo Sun 6" class="gallery-image">
            </div>
            
            <p>This aesthetic celebrates the Leo sun's natural ability to inspire and lead, using fashion as a tool for creative expression and confident self-presentation.</p>
        `,
        image: "articles/8-8-2024%20Leo%20Sun%20The%20Mood%20Board/1.png",
        category: "Astrology",
        date: "2024-08-08"
    },
    {
        id: 21,
        title: "My Favorite Floral Scents",
        excerpt: "A sensory journey through the most captivating floral fragrances that define elegance, romance, and personal style through the power of scent.",
        content: `
            <p>Scent is the invisible accessory that completes every look. These floral fragrances have captured my heart and continue to inspire my approach to personal style and the art of scent layering.</p>
            
            <h2>The Language of Flowers</h2>
            <p>Each floral scent tells a story, evokes a mood, and creates an invisible signature that becomes part of your personal style. These fragrances represent the perfect marriage of nature and artistry.</p>
            
            <div class="image-gallery">
                <img src="articles/8-7-2024%20MyFavoriteFloralScents/1.png" alt="Floral Scent 1" class="gallery-image">
                <img src="articles/8-7-2024%20MyFavoriteFloralScents/2.png" alt="Floral Scent 2" class="gallery-image">
                <img src="articles/8-7-2024%20MyFavoriteFloralScents/3.png" alt="Floral Scent 3" class="gallery-image">
                <img src="articles/8-7-2024%20MyFavoriteFloralScents/4.png" alt="Floral Scent 4" class="gallery-image">
                <img src="articles/8-7-2024%20MyFavoriteFloralScents/5.png" alt="Floral Scent 5" class="gallery-image">
                <img src="articles/8-7-2024%20MyFavoriteFloralScents/6.png" alt="Floral Scent 6" class="gallery-image">
                <img src="articles/8-7-2024%20MyFavoriteFloralScents/7.png" alt="Floral Scent 7" class="gallery-image">
            </div>
            
            <p>These fragrances remind us that true style engages all the senses, creating memorable moments and emotional connections through the power of beautiful scent.</p>
        `,
        image: "articles/8-7-2024%20MyFavoriteFloralScents/1.png",
        category: "Fragrance",
        date: "2024-08-07"
    },
    {
        id: 22,
        title: "Feeling Sexy Single: A Guide",
        excerpt: "Embracing confidence and self-love through fashion choices that celebrate independence, personal power, and the joy of dressing for yourself.",
        content: `
            <p>Single life is a celebration of self-love and personal freedom. This guide explores how to embrace confidence and allure through fashion choices that reflect your independence and celebrate your unique beauty.</p>
            
            <h2>Self-Love Through Style</h2>
            <p>The most attractive person in the room is the one who feels comfortable in their own skin. These looks celebrate the confidence that comes from dressing for yourself and embracing your personal power.</p>
            
            <div class="image-gallery">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/1.png" alt="Single Style 1" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/2.png" alt="Single Style 2" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/3.png" alt="Single Style 3" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/4.png" alt="Single Style 4" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/5.png" alt="Single Style 5" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/6.png" alt="Single Style 6" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/7.png" alt="Single Style 7" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/8.png" alt="Single Style 8" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/9.png" alt="Single Style 9" class="gallery-image">
                <img src="articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/10.png" alt="Single Style 10" class="gallery-image">
            </div>
            
            <p>These looks remind us that the most beautiful thing you can wear is confidence in yourself, and that true style comes from embracing who you are and celebrating your independence.</p>
        `,
        image: "articles/8-5-2024%20Feeling%20Sexy%20Single%20A%20Guide/1.png",
        category: "Lifestyle",
        date: "2024-08-05"
    },
    {
        id: 23,
        title: "My Favorite Patterns",
        excerpt: "A visual exploration of the patterns that define personal style, from classic prints to contemporary designs that add personality and visual interest to any wardrobe.",
        content: `
            <p>Patterns are the language of fabric - they tell stories, create moods, and add visual interest to even the simplest silhouettes. These are the patterns that have captured my imagination and continue to inspire my approach to print mixing and personal style.</p>
            
            <h2>The Art of Pattern</h2>
            <p>Every pattern has a personality, a history, and a unique way of transforming the garments it adorns. Understanding patterns is understanding the visual poetry of fashion.</p>
            
            <div class="image-gallery">
                <img src="articles/8-3-2024%20MyFavoritePatterns/1.png" alt="Pattern 1" class="gallery-image">
                <img src="articles/8-3-2024%20MyFavoritePatterns/2.png" alt="Pattern 2" class="gallery-image">
                <img src="articles/8-3-2024%20MyFavoritePatterns/3.png" alt="Pattern 3" class="gallery-image">
                <img src="articles/8-3-2024%20MyFavoritePatterns/4.png" alt="Pattern 4" class="gallery-image">
                <img src="articles/8-3-2024%20MyFavoritePatterns/5.png" alt="Pattern 5" class="gallery-image">
                <img src="articles/8-3-2024%20MyFavoritePatterns/6.png" alt="Pattern 6" class="gallery-image">
                <img src="articles/8-3-2024%20MyFavoritePatterns/7.png" alt="Pattern 7" class="gallery-image">
            </div>
            
            <p>These patterns represent the endless possibilities of fashion expression, showing how the right print can transform a simple piece into a statement and add personality to any wardrobe.</p>
        `,
        image: "articles/8-3-2024%20MyFavoritePatterns/1.png",
        category: "Patterns",
        date: "2024-08-03"
    },
    {
        id: 24,
        title: "Hair Care",
        excerpt: "The foundation of great style starts with healthy, beautiful hair. A comprehensive guide to achieving and maintaining the perfect hair that complements your personal aesthetic.",
        content: `
            <p>Great hair is the foundation of every memorable look. This guide explores the products, techniques, and routines that create healthy, beautiful hair that serves as the perfect complement to your personal style.</p>
            
            <h2>Hair as Fashion</h2>
            <p>Your hair is your most versatile accessory - it can completely transform your look, reflect your personality, and serve as the foundation for every style choice you make.</p>
            
            <div class="image-gallery">
                <img src="articles/7-29-2024%20HairCare/1.png" alt="Hair Care 1" class="gallery-image">
                <img src="articles/7-29-2024%20HairCare/2.png" alt="Hair Care 2" class="gallery-image">
                <img src="articles/7-29-2024%20HairCare/3.png" alt="Hair Care 3" class="gallery-image">
                <img src="articles/7-29-2024%20HairCare/4.png" alt="Hair Care 4" class="gallery-image">
                <img src="articles/7-29-2024%20HairCare/5.png" alt="Hair Care 5" class="gallery-image">
                <img src="articles/7-29-2024%20HairCare/6.png" alt="Hair Care 6" class="gallery-image">
                <img src="articles/7-29-2024%20HairCare/7.png" alt="Hair Care 7" class="gallery-image">
                <img src="articles/7-29-2024%20HairCare/8.png" alt="Hair Care 8" class="gallery-image">
            </div>
            
            <p>These hair care essentials remind us that great style starts with healthy foundations, and that taking care of your hair is an investment in your overall aesthetic and confidence.</p>
        `,
        image: "articles/7-29-2024%20HairCare/1.png",
        category: "Beauty",
        date: "2024-07-29"
    },
    {
        id: 25,
        title: "SexyThings Pt.2",
        excerpt: "The second exploration of sophisticated allure in fashion, focusing on the elements that create genuine magnetism through quality, fit, and confident styling.",
        content: `
            <p>Continuing our exploration of what makes fashion truly captivating. This second installment delves deeper into the art of sophisticated allure, focusing on the subtle elements that create genuine magnetism.</p>
            
            <h2>The Elements of Allure</h2>
            <p>True allure in fashion comes from understanding your body, choosing quality pieces, and wearing them with confidence. It's about creating looks that feel both powerful and effortless.</p>
            
            <div class="image-gallery">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/1.png" alt="Allure 1" class="gallery-image">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/2.png" alt="Allure 2" class="gallery-image">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/3.png" alt="Allure 3" class="gallery-image">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/4.png" alt="Allure 4" class="gallery-image">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/5.png" alt="Allure 5" class="gallery-image">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/6.png" alt="Allure 6" class="gallery-image">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/7.png" alt="Allure 7" class="gallery-image">
                <img src="articles/7-27-2024%20SexyThings%20Pt.2/8.png" alt="Allure 8" class="gallery-image">
            </div>
            
            <p>These looks demonstrate that the most attractive fashion choices are those that enhance your natural beauty and make you feel powerful, confident, and authentically yourself.</p>
        `,
        image: "articles/7-27-2024%20SexyThings%20Pt.2/1.png",
        category: "Style",
        date: "2024-07-27"
    },
    {
        id: 26,
        title: "My Fave Makeup",
        excerpt: "The beauty products and techniques that create the perfect complement to any fashion look, from everyday elegance to dramatic evening glamour.",
        content: `
            <p>Makeup is the perfect complement to fashion - it's art that enhances your natural beauty and completes every look. These are the products and techniques that have become essential to my beauty routine.</p>
            
            <h2>Beauty as Art</h2>
            <p>The best makeup enhances rather than masks, creating looks that feel both polished and authentic. These products and techniques represent the foundation of timeless beauty.</p>
            
            <div class="image-gallery">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/1.png" alt="Makeup 1" class="gallery-image">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/2.png" alt="Makeup 2" class="gallery-image">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/3.png" alt="Makeup 3" class="gallery-image">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/4.png" alt="Makeup 4" class="gallery-image">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/5.png" alt="Makeup 5" class="gallery-image">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/6.png" alt="Makeup 6" class="gallery-image">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/7.png" alt="Makeup 7" class="gallery-image">
                <img src="articles/7-23-2024%20My%20Fave%20Makeup/8.png" alt="Makeup 8" class="gallery-image">
            </div>
            
            <p>These beauty essentials remind us that great style is about the complete picture - from the perfect outfit to the finishing touches that make you feel confident and beautiful.</p>
        `,
        image: "articles/7-23-2024%20My%20Fave%20Makeup/1.png",
        category: "Beauty",
        date: "2024-07-23"
    },
    {
        id: 28,
        title: "Gemini Moon: The Mood Board",
        excerpt: "Capturing the dual nature and intellectual curiosity of Gemini moon energy through fashion choices that reflect versatility, communication, and mental agility.",
        content: `
            <p>Gemini moon energy is all about duality, communication, and intellectual curiosity. This mood board explores the versatile, ever-changing aesthetic that reflects the twin's approach to fashion and self-expression.</p>
            
            <h2>Mercurial Style</h2>
            <p>Gemini moon style is about embracing change, versatility, and the ability to adapt your look to match your mood and environment. It's fashion that speaks to intellectual curiosity and social connection.</p>
            
            <div class="image-gallery">
                <img src="articles/Gemini%20Moon%20The%20Mood%20Board/1.png" alt="Gemini Moon 1" class="gallery-image">
                <img src="articles/Gemini%20Moon%20The%20Mood%20Board/2.png" alt="Gemini Moon 2" class="gallery-image">
                <img src="articles/Gemini%20Moon%20The%20Mood%20Board/3.png" alt="Gemini Moon 3" class="gallery-image">
                <img src="articles/Gemini%20Moon%20The%20Mood%20Board/4.png" alt="Gemini Moon 4" class="gallery-image">
                <img src="articles/Gemini%20Moon%20The%20Mood%20Board/5.png" alt="Gemini Moon 5" class="gallery-image">
                <img src="articles/Gemini%20Moon%20The%20Mood%20Board/6.png" alt="Gemini Moon 6" class="gallery-image">
            </div>
            
            <p>This aesthetic celebrates the Gemini moon's ability to adapt and communicate through fashion, using clothing as a tool for intellectual expression and social connection.</p>
        `,
        image: "articles/Gemini%20Moon%20The%20Mood%20Board/1.png",
        category: "Astrology",
        date: "2024-06-15"
    },
    {
        id: 29,
        title: "Libra Rising: The Mood Board",
        excerpt: "Harmonious, balanced, and naturally elegant, this mood board captures the Venus-ruled energy of Libra rising through fashion choices that embody beauty and grace.",
        content: `
            <p>Libra rising energy brings natural elegance, harmony, and a refined sense of beauty to personal style. This mood board explores the balanced, graceful aesthetic that defines the scales' approach to fashion.</p>
            
            <h2>Venusian Grace</h2>
            <p>Libra rising style is about creating harmony in every look, choosing pieces that are beautiful, balanced, and effortlessly elegant. It's fashion that reflects a natural understanding of aesthetics and proportion.</p>
            
            <div class="image-gallery">
                <img src="articles/Libra%20Rising%20The%20Mood%20Board/1.png" alt="Libra Rising 1" class="gallery-image">
                <img src="articles/Libra%20Rising%20The%20Mood%20Board/2.png" alt="Libra Rising 2" class="gallery-image">
                <img src="articles/Libra%20Rising%20The%20Mood%20Board/3.png" alt="Libra Rising 3" class="gallery-image">
                <img src="articles/Libra%20Rising%20The%20Mood%20Board/4.png" alt="Libra Rising 4" class="gallery-image">
                <img src="articles/Libra%20Rising%20The%20Mood%20Board/5.png" alt="Libra Rising 5" class="gallery-image">
                <img src="articles/Libra%20Rising%20The%20Mood%20Board/6.png" alt="Libra Rising 6" class="gallery-image">
            </div>
            
            <p>This aesthetic celebrates the Libra rising's innate sense of beauty and balance, using fashion as a tool for creating harmony and expressing natural elegance.</p>
        `,
        image: "articles/Libra%20Rising%20The%20Mood%20Board/1.png",
        category: "Astrology",
        date: "2024-06-10"
    }
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first

// Function to convert image gallery HTML to lazy loading format with WebP support
function convertToLazyLoading(content) {
    return content.replace(
        /<div class="image-gallery">([\s\S]*?)<\/div>/g,
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
                const webpSrc = originalSrc.replace(/\.png$/, '.webp');
                const alt = altMatch ? altMatch[1] : '';
                const className = classMatch ? classMatch[1] : 'gallery-image';
                
                if (index === 0) {
                    // First image loads immediately with WebP support and responsive sizes
                    return `<picture>
                        <source 
                            srcset="${webpSrc.replace('.webp', '-small.webp')} 480w,
                                    ${webpSrc.replace('.webp', '-medium.webp')} 768w,
                                    ${webpSrc} 1200w"
                            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            type="image/webp">
                        <img 
                            src="${originalSrc}" 
                            srcset="${originalSrc.replace('.png', '-small.png')} 480w,
                                    ${originalSrc.replace('.png', '-medium.png')} 768w,
                                    ${originalSrc} 1200w"
                            sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            alt="${alt}" 
                            class="${className}">
                    </picture>`;
                } else {
                    // Other images use lazy loading with WebP support and responsive sizes
                    return `<picture>
                        <source 
                            data-srcset="${webpSrc.replace('.webp', '-small.webp')} 480w,
                                        ${webpSrc.replace('.webp', '-medium.webp')} 768w,
                                        ${webpSrc} 1200w"
                            data-sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            type="image/webp">
                        <img 
                            data-src="${originalSrc}" 
                            data-srcset="${originalSrc.replace('.png', '-small.png')} 480w,
                                        ${originalSrc.replace('.png', '-medium.png')} 768w,
                                        ${originalSrc} 1200w"
                            data-sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
                            alt="${alt}" 
                            class="${className} lazy">
                    </picture>`;
                }
            }).join('\n                ');
            
            return `<div class="image-gallery">
                ${processedImages}
            </div>`;
        }
    );
}

// Update all blog posts to use lazy loading
const updatedBlogPosts = blogPosts.map(post => ({
    ...post,
    content: convertToLazyLoading(post.content)
}));

// Global variables
let allPosts = updatedBlogPosts;
let filteredPosts = updatedBlogPosts;

// DOM elements
const postsGrid = document.getElementById('posts-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('.search-btn');
const noResults = document.getElementById('no-results');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Only run on index page
    if (postsGrid) {
        loadPosts();
        setupSearch();
    }
});

// Load and display posts
function loadPosts(posts = allPosts) {
    if (!postsGrid) return;
    
    postsGrid.innerHTML = '';
    
    if (posts.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    posts.forEach(post => {
        const postElement = createPostElement(post);
        postsGrid.appendChild(postElement);
    });
}

// Create individual post element
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';
    postDiv.onclick = () => openPost(post.id);
    
    // Create date tooltip
    const dateTooltip = document.createElement('div');
    dateTooltip.className = 'post-date-tooltip';
    dateTooltip.textContent = formatDate(post.date);
    
    postDiv.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image">
    `;
    
    postDiv.appendChild(dateTooltip);
    
    return postDiv;
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Open individual post
function openPost(postId) {
    window.location.href = `post.html?id=${postId}`;
}

// Load individual post content
function loadPost(postId) {
    const post = allPosts.find(p => p.id == postId);
    const postContent = document.getElementById('post-content');
    
    if (!post || !postContent) {
        if (postContent) {
            postContent.innerHTML = '<div class="post-loading"><p>Post not found.</p></div>';
        }
        return;
    }
    
    // Update page title
    document.title = `${post.title} - Chic Shit`;
    
    // Extract images from post content and create carousel
    const carousel = createImageCarousel(post);
    
    // Create post HTML with only title and date
    postContent.innerHTML = `
        ${carousel}
        <div class="post-full-header">
            <h1 class="post-full-title">${post.title}</h1>
            <div class="post-full-meta">
                <span class="post-date">${formatDate(post.date)}</span>
            </div>
        </div>
    `;
    
    // Initialize carousel functionality
    initializeCarousel();
    
    // Setup lazy loading for the new content
    setupLazyLoading();
}

// Create image carousel for post
function createImageCarousel(post) {
    // Extract all images from the post content
    const imageRegex = /<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/g;
    const images = [];
    let match;
    
    while ((match = imageRegex.exec(post.content)) !== null) {
        images.push({
            src: match[1],
            alt: match[2]
        });
    }
    
    if (images.length === 0) {
        return `<img src="${post.image}" alt="${post.title}" class="post-full-image">`;
    }
    
    const carouselSlides = images.map((img, index) => `
        <div class="carousel-slide">
            <img src="${img.src}" alt="${img.alt}" class="carousel-image">
        </div>
    `).join('');
    
    const indicators = images.map((_, index) => `
        <button class="carousel-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
    `).join('');
    
    return `
        <div class="image-carousel">
            <div class="carousel-container">
                <div class="carousel-track" style="transform: translateX(0%)">
                    ${carouselSlides}
                </div>
                <button class="carousel-button prev" id="carousel-prev">‹</button>
                <button class="carousel-button next" id="carousel-next">›</button>
            </div>
            <div class="carousel-indicators">
                ${indicators}
            </div>
        </div>
    `;
}

// Initialize carousel functionality
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Update carousel position
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }
    
    // Event listeners
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchStartX - touchEndX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Auto-advance carousel every 5 seconds (optional)
    // setInterval(nextSlide, 5000);
}

// Setup search functionality
function setupSearch() {
    if (!searchInput) return;
    
    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    
    // Handle enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

// Handle search
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        filteredPosts = allPosts;
    } else {
        filteredPosts = allPosts.filter(post => {
            return post.title.toLowerCase().includes(query) ||
                   post.excerpt.toLowerCase().includes(query) ||
                   post.category.toLowerCase().includes(query) ||
                   post.content.toLowerCase().includes(query);
        });
    }
    
    loadPosts(filteredPosts);
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Image lazy loading for better performance
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const picture = img.parentElement;
                
                // Handle WebP source and responsive images if they exist
                if (picture && picture.tagName === 'PICTURE') {
                    const webpSource = picture.querySelector('source[data-srcset]');
                    if (webpSource) {
                        webpSource.srcset = webpSource.dataset.srcset;
                        webpSource.sizes = webpSource.dataset.sizes;
                        webpSource.removeAttribute('data-srcset');
                        webpSource.removeAttribute('data-sizes');
                    }
                }
                
                // Handle responsive images on the img element
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                    img.sizes = img.dataset.sizes;
                    img.removeAttribute('data-srcset');
                    img.removeAttribute('data-sizes');
                }
                
                // Create a new image to preload
                const newImg = new Image();
                newImg.onload = () => {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    img.classList.remove('lazy');
                };
                newImg.src = img.dataset.src;
                
                observer.unobserve(img);
            }
        });
    }, {
        // Load images when they're 50px away from viewport
        rootMargin: '50px'
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', setupLazyLoading);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to go back to main page from post
    if (e.key === 'Escape' && window.location.pathname.includes('post.html')) {
        window.location.href = 'index.html';
    }
    
    // Focus search with '/' key
    if (e.key === '/' && searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add loading states
function showLoading() {
    if (postsGrid) {
        postsGrid.innerHTML = '<div class="post-loading"><p>Loading posts...</p></div>';
    }
}

function hideLoading() {
    const loadingElement = document.querySelector('.post-loading');
    if (loadingElement) {
        loadingElement.remove();
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could add user-friendly error messaging here
});

// Export functions for potential future use
window.ChicShitBlog = {
    loadPosts,
    openPost,
    loadPost,
    handleSearch,
    blogPosts: allPosts
}; 