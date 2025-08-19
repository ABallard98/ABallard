# Modern Blog with Next.js and Material-UI

A beautiful, responsive blog website built with Next.js 14, Material-UI (MUI), and TypeScript. Features a modern design with styled components and excellent performance.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Material-UI
- **Responsive Design**: Beautiful layouts that work on all devices
- **Styled Components**: Custom MUI styled components for consistent design
- **Blog Functionality**: Homepage with post listings and individual post pages
- **Sample Content**: Pre-loaded with sample blog posts
- **Pages**: Home, About, Contact, and individual blog post pages
- **Performance Optimized**: Fast loading with Next.js optimizations

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Styling**: MUI styled components with Emotion
- **Markdown**: React Markdown for blog post content
- **Icons**: Material-UI Icons

## 📦 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/[slug]/       # Dynamic blog post pages
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── BlogCard.tsx       # Blog post card component
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header/navigation
│   └── HeroSection.tsx    # Homepage hero section
├── data/                  # Static data
│   └── blogPosts.ts       # Sample blog posts
├── theme/                 # MUI theme configuration
│   └── theme.ts           # Custom theme settings
└── types/                 # TypeScript type definitions
    └── blog.ts            # Blog post interface
```

## 🎨 Customization

### Theme
Customize the theme in `src/theme/theme.ts`:
- Colors and palette
- Typography settings
- Component style overrides
- Breakpoints and spacing

### Content
- Add new blog posts in `src/data/blogPosts.ts`
- Modify the About page content in `src/app/about/page.tsx`
- Update contact information in `src/app/contact/page.tsx`

### Styling
All components use MUI styled components for consistent theming:
- Responsive design with theme breakpoints
- Custom color schemes
- Typography scales
- Consistent spacing

## 🚀 Deployment

### Build for production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Deploy to other platforms
The built application in the `.next` folder can be deployed to any Node.js hosting platform.

## 📝 Adding New Blog Posts

To add a new blog post, add an entry to the `blogPosts` array in `src/data/blogPosts.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Your Post Title',
  slug: 'url-friendly-slug',
  excerpt: 'Brief description...',
  content: 'Full markdown content...',
  author: 'Author Name',
  publishedAt: '2024-01-01',
  readTime: 5,
  image: 'https://example.com/image.jpg',
  tags: ['Tag1', 'Tag2'],
  featured: false,
}
```

## 🤝 Contributing

Feel free to contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and Material-UI
