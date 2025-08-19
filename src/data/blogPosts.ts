import { BlogPost } from '@/types/blog'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14 and App Router',
    slug: 'getting-started-nextjs-14-app-router',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and the new App Router. This comprehensive guide covers everything from setup to deployment.',
    content: `# Getting Started with Next.js 14 and App Router

Next.js 14 brings exciting new features and improvements to the React framework. In this comprehensive guide, we'll explore the App Router and how it revolutionizes the way we build modern web applications.

![Next.js 14 App Router](https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

## What's New in Next.js 14

The App Router introduces a **completely new paradigm** for routing in Next.js applications. Here are the key benefits that make it a game-changer:

### 🚀 Performance Improvements
- **Improved Performance**: Better code splitting and loading strategies
- **Enhanced Developer Experience**: More intuitive file-based routing  
- **Server Components**: Better server-side rendering capabilities
- **Streaming**: Improved loading states and partial rendering

### 🛠️ Developer Experience
The new App Router makes development more intuitive and productive:

> "The App Router represents the future of React development with Next.js, offering unprecedented control over your application's architecture." - Next.js Team

## Setting Up Your Project

Getting started with Next.js 14 is straightforward. First, create a new project:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
npm run dev
\`\`\`

### Project Structure
Your new project will have this structure:

\`\`\`
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── public/
├── package.json
└── next.config.js
\`\`\`

## App Router Deep Dive

The App Router uses a **file-system based routing** approach:

| File | Purpose |
|------|---------|
| \`layout.tsx\` | Shared UI for a segment and its children |
| \`page.tsx\` | Unique UI for a route |
| \`loading.tsx\` | Loading UI for a segment |
| \`error.tsx\` | Error UI for a segment |

### Server Components by Default

One of the most significant changes is that **components are Server Components by default**:

\`\`\`tsx
// This runs on the server by default
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 14</h1>
      <p>This component renders on the server!</p>
    </div>
  )
}
\`\`\`

To make a component client-side, use the \`'use client'\` directive:

\`\`\`tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
\`\`\`

## Advanced Features

### Data Fetching
The App Router introduces new patterns for data fetching:

\`\`\`tsx
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  
  return <div>{data.title}</div>
}
\`\`\`

### Route Groups
Organize routes without affecting the URL structure:

\`\`\`
app/
├── (marketing)/
│   ├── about/
│   └── contact/
└── (shop)/
    ├── products/
    └── cart/
\`\`\`

## Migration Tips

If you're migrating from the Pages Router:

1. **Start with new routes** - Build new features with App Router
2. **Incremental adoption** - Both routers can coexist
3. **Update data fetching** - Replace \`getServerSideProps\` with async components
4. **Review client components** - Add \`'use client'\` where needed

## Conclusion

Next.js 14 with App Router is a **game-changer** for React developers. The improved performance, better developer experience, and new features make it an excellent choice for modern web development.

### Key Takeaways:
- ✅ Better performance with automatic optimization
- ✅ Simplified data fetching patterns
- ✅ Enhanced developer experience
- ✅ Future-proof architecture

Ready to get started? [Check out the official documentation](https://nextjs.org/docs) and begin building amazing applications today!`,
    author: 'John Doe',
    publishedAt: '2024-01-15',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript'],
    featured: true,
  },
  {
    id: '2',
    title: 'Building Beautiful UIs with Material-UI and Styled Components',
    slug: 'building-uis-material-ui-styled-components',
    excerpt: 'Discover how to create stunning user interfaces using Material-UI and styled components. Learn best practices and advanced techniques.',
    content: `# Building Beautiful UIs with Material-UI and Styled Components

Material-UI (MUI) provides a comprehensive set of React components that implement **Google's Material Design**. When combined with styled components, you can create truly beautiful and customizable user interfaces that scale across any application.

![Material-UI Design System](https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

## Why Choose MUI? 🎨

Material-UI stands out as the premier React component library for several compelling reasons:

### 📦 Comprehensive Component Library
- **50+ Components**: From basic buttons to complex data grids
- **Pre-built Patterns**: Common UI patterns ready to use
- **Consistent Design**: All components follow Material Design principles
- **Production Ready**: Battle-tested in thousands of applications

### 🎯 Theming System
MUI's theming system is incredibly powerful:

> "MUI's theming system allows you to create consistent, scalable design systems that can adapt to any brand or use case." - MUI Team

\`\`\`javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})
\`\`\`

## Getting Started with Styled Components 🚀

The \`styled\` utility from MUI allows you to create **custom components** with ease:

### Basic Example
\`\`\`tsx
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  textTransform: 'none',
  fontWeight: 600,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}))
\`\`\`

### Advanced Styling with Props
\`\`\`tsx
interface StyledCardProps {
  featured?: boolean
}

const StyledCard = styled(Card)<StyledCardProps>(({ theme, featured }) => ({
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  ...(featured && {
    border: \`2px solid \${theme.palette.primary.main}\`,
    boxShadow: theme.shadows[8],
  }),
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[12],
  },
}))
\`\`\`

## Theming Best Practices 💡

Follow these proven strategies for creating maintainable design systems:

### 1. Define Your Color Palette
\`\`\`tsx
const palette = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
  },
  secondary: {
    main: '#dc004e',
    light: '#ff5983',
    dark: '#9a0036',
  },
  // Add semantic colors
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
}
\`\`\`

### 2. Typography Scales
Create a consistent typography system:

| Variant | Use Case | Size |
|---------|----------|------|
| h1 | Page titles | 96px |
| h2 | Section headers | 60px |
| h3 | Subsection headers | 48px |
| body1 | Main content | 16px |
| caption | Small text | 12px |

### 3. Spacing System
Use the 8px grid system:

\`\`\`tsx
const theme = createTheme({
  spacing: 8, // Base unit
  // Now theme.spacing(1) = 8px, theme.spacing(2) = 16px, etc.
})
\`\`\`

### 4. Responsive Breakpoints
\`\`\`tsx
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
\`\`\`

## Component Composition Patterns 🏗️

### Higher-Order Components
\`\`\`tsx
const withGlow = (Component: React.ComponentType) => {
  return styled(Component)(({ theme }) => ({
    '&:hover': {
      boxShadow: \`0 0 20px \${theme.palette.primary.main}40\`,
    },
  }))
}

const GlowingButton = withGlow(Button)
\`\`\`

### Theme-aware Components
\`\`\`tsx
const StatusChip = styled(Chip)(({ theme, color }) => ({
  fontWeight: 600,
  ...(color === 'success' && {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.dark,
  }),
  ...(color === 'error' && {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.dark,
  }),
}))
\`\`\`

## Advanced Techniques 🎭

### CSS-in-JS Performance
- Use \`useMemo\` for computed styles
- Avoid inline styles in render
- Leverage theme caching

### Dark Mode Support
\`\`\`tsx
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  
  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  }), [darkMode])
  
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}
\`\`\`

## Conclusion ✨

Material-UI with styled components provides an **unparalleled developer experience** for building beautiful, consistent user interfaces. The combination of:

- 🎨 **Rich component library**
- 🎯 **Powerful theming system**  
- 🛠️ **TypeScript support**
- ♿ **Built-in accessibility**

Makes it the perfect choice for modern React applications. Start building beautiful UIs today!

### Resources:
- [MUI Documentation](https://mui.com/)
- [Material Design Guidelines](https://material.io/design)
- [Styled Components Guide](https://styled-components.com/)`,
    author: 'Jane Smith',
    publishedAt: '2024-01-12',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['Material-UI', 'React', 'Design System', 'UI/UX'],
    featured: false,
  },
  {
    id: '3',
    title: 'TypeScript Best Practices for React Applications',
    slug: 'typescript-best-practices-react',
    excerpt: 'Master TypeScript in React applications with these proven best practices. Improve code quality and developer experience.',
    content: `
# TypeScript Best Practices for React Applications

TypeScript brings type safety and improved developer experience to React applications. Here are some best practices to help you make the most of TypeScript in your React projects.

## Component Props Typing

Always define interfaces for your component props:

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
\`\`\`

## State Management

Use proper typing for state:

\`\`\`tsx
interface User {
  id: number
  name: string
  email: string
}

const [user, setUser] = useState<User | null>(null)
\`\`\`

## Event Handlers

Type your event handlers correctly:

\`\`\`tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  // Handle click
}
\`\`\`

These practices will help you build more robust and maintainable React applications.
    `,
    author: 'Mike Johnson',
    publishedAt: '2024-01-10',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['TypeScript', 'React', 'Best Practices', 'Development'],
    featured: false,
  },
  {
    id: '4',
    title: 'Responsive Design with CSS Grid and Flexbox',
    slug: 'responsive-design-css-grid-flexbox',
    excerpt: 'Learn how to create responsive layouts using CSS Grid and Flexbox. Modern approaches to web layout design.',
    content: `
# Responsive Design with CSS Grid and Flexbox

Modern CSS provides powerful tools for creating responsive layouts. CSS Grid and Flexbox are two layout methods that, when used together, can handle any layout challenge.

## CSS Grid for Layout Structure

CSS Grid excels at creating two-dimensional layouts:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Flexbox for Component Layout

Flexbox is perfect for one-dimensional layouts:

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Combining Both

Use Grid for the overall page layout and Flexbox for component internals:

- Grid: Page sections, card layouts, galleries
- Flexbox: Navigation bars, card content, form layouts

## Responsive Strategies

1. Mobile-first approach
2. Use relative units (rem, em, %)
3. Implement breakpoints strategically
4. Test on real devices

With these tools, you can create layouts that work beautifully on any device.
    `,
    author: 'Sarah Wilson',
    publishedAt: '2024-01-08',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['CSS', 'Grid', 'Flexbox', 'Responsive Design'],
    featured: true,
  },
  {
    id: '5',
    title: 'Performance Optimization in React Applications',
    slug: 'performance-optimization-react',
    excerpt: 'Boost your React app performance with these optimization techniques. From code splitting to memoization.',
    content: `
# Performance Optimization in React Applications

Performance is crucial for user experience. Here are proven techniques to optimize your React applications.

## Code Splitting

Split your code to reduce initial bundle size:

\`\`\`tsx
const LazyComponent = lazy(() => import('./LazyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

## Memoization

Use React.memo and useMemo strategically:

\`\`\`tsx
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return expensiveCalculation(data)
  }, [data])
  
  return <div>{processedData}</div>
})
\`\`\`

## Virtual Scrolling

For large lists, implement virtual scrolling:

\`\`\`tsx
import { FixedSizeList as List } from 'react-window'

const VirtualList = ({ items }) => (
  <List
    height={600}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>{items[index]}</div>
    )}
  </List>
)
\`\`\`

## Image Optimization

- Use next/image for automatic optimization
- Implement lazy loading
- Use appropriate image formats (WebP, AVIF)

These techniques will significantly improve your application's performance.
    `,
    author: 'David Brown',
    publishedAt: '2024-01-05',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
    featured: false,
  },
  {
    id: '6',
    title: 'Modern State Management with Zustand',
    slug: 'modern-state-management-zustand',
    excerpt: 'Simplify your React state management with Zustand. A lightweight alternative to Redux and Context API.',
    content: `
# Modern State Management with Zustand

Zustand is a small, fast, and scalable state management solution for React. It provides a simple API without the boilerplate of Redux.

## Why Zustand?

- **Minimal boilerplate**: Less code to write and maintain
- **TypeScript-first**: Excellent TypeScript support
- **No providers**: Direct store access
- **Flexible**: Works with any React pattern

## Basic Store Setup

\`\`\`tsx
import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
  decrease: (by: number) => void
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  decrease: (by) => set((state) => ({ bears: state.bears - by })),
}))
\`\`\`

## Using the Store

\`\`\`tsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  const increase = useBearStore((state) => state.increase)
  
  return (
    <div>
      <h1>{bears} around here ...</h1>
      <button onClick={() => increase(1)}>One up</button>
    </div>
  )
}
\`\`\`

## Advanced Features

- Persist middleware for localStorage
- Immer for immutable updates
- Subscriptions for external libraries
- Slices for large stores

Zustand makes state management simple and enjoyable.
    `,
    author: 'Emily Davis',
    publishedAt: '2024-01-03',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    tags: ['React', 'State Management', 'Zustand', 'JavaScript'],
    featured: false,
  },
]
