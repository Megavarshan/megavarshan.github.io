# AI Research Engineer Portfolio

A modern, responsive portfolio website for Megavarshan A, showcasing AI research, projects, and professional experience.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Dark theme with premium spacing and typography
- Smooth scroll navigation
- Interactive skills section with tabs
- Timeline-based experience display
- Achievement showcase with LinkedIn integration
- Contact section with social links
- Professional certifications display (Oracle & AWS)

## Tech Stack

- HTML5
- CSS3 (with Tailwind CSS via CDN)
- Vanilla JavaScript
- Google Fonts (Inter)

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript for interactivity
├── public/
│   └── images/
│       ├── profile-photo.jpeg
│       ├── ideas.png
│       ├── growth.png
│       └── figma.png
└── README.md
```

## Local Development

1. Clone or download the repository
2. Open `index.html` in your web browser
3. No build process required - it's pure HTML/CSS/JS

## GitHub Pages Deployment

### Option 1: Direct Deployment

1. Create a new repository on GitHub
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. Go to repository Settings > Pages
4. Under "Source", select "Deploy from a branch"
5. Select branch: `main` and folder: `/ (root)`
6. Click "Save"
7. Your site will be published at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Custom Domain

1. Follow Option 1 steps 1-6
2. In Settings > Pages, add your custom domain
3. Create a `CNAME` file in the root with your domain name
4. Configure DNS settings with your domain provider

### Option 3: Username GitHub Pages

1. Create a repository named `YOUR_USERNAME.github.io`
2. Push files to this repository
3. Your site will be automatically published at: `https://YOUR_USERNAME.github.io/`

## Customization

### Updating Content

1. **Personal Information**: Edit text in `index.html`
2. **Images**: Replace images in `public/images/` directory
3. **Skills**: Modify skill arrays in the Skills section of `index.html`
4. **Social Links**: Update href attributes in Contact and Footer sections
5. **Colors**: Adjust Tailwind classes or add custom colors in `styles.css`

### Adding Sections

1. Add new `<section>` in `index.html`
2. Add navigation link in navbar
3. Style as needed in `styles.css`
4. Add scroll functionality in `script.js` if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Tailwind CSS loaded via CDN (consider self-hosting for production)
- Google Fonts optimized with preconnect
- Images should be optimized before deployment
- Smooth scroll with CSS `scroll-behavior`
- Intersection Observer for animations

## Troubleshooting

### Images not loading

- Check file paths in `index.html`
- Ensure images are in `public/images/` directory
- Use relative paths: `public/images/filename.jpg`

### GitHub Pages 404 Error

- Verify repository settings
- Check that files are in the correct directory
- Wait a few minutes for deployment to complete

### Styles not applying

- Clear browser cache
- Check that `styles.css` is in the same directory as `index.html`
- Verify Tailwind CDN link is working

## License

This is a personal portfolio website. Feel free to use as a template with attribution.

## Contact

- Email: megavarshan1616@gmail.com
- LinkedIn: [https://linkedin.com/in/megavarshan](https://linkedin.com/in/megavarshan)
- GitHub: [https://github.com/Megavarshan](https://github.com/Megavarshan)

---

Built with passion for AI research and sustainable technology solutions.
