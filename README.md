# 🛍️ Cosmic Store - Premium E-Commerce Showcase

![App Preview](https://imgix.cosmicjs.com/fef25450-d4a2-11f0-a679-efa620642f73-photo-1441986300917-64674bd600d8-1765245697422.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated e-commerce showcase platform built with Next.js 16 and Cosmic CMS. Display your products, collections, and customer reviews with a beautiful, responsive interface.

## ✨ Features

- 🛍️ **Dynamic Product Catalog** - Browse products with detailed information, pricing, and image galleries
- 📦 **Curated Collections** - Explore themed collections like "Best Sellers" and "Summer Essentials"
- ⭐ **Customer Reviews** - View authentic ratings and testimonials with verified purchase badges
- 📱 **Fully Responsive** - Mobile-first design that works beautifully on all devices
- 🎨 **Modern UI** - Clean, elegant interface built with Tailwind CSS
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16 App Router
- 🔄 **Real-time Updates** - Content managed through Cosmic CMS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=693782ad14404406a170882d&clone_repository=6937845914404406a1708856)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> Based on the content model I created for "Design a content model for an e-commerce store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for Cosmic API integration

## 📋 Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account and bucket with the e-commerce content model
- Environment variables for Cosmic API access

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd cosmic-store
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server**
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

### Fetching Products with Collections

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with their collections
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get a single product by slug
const { object: product } = await cosmic.objects
  .findOne({
    type: 'products',
    slug: 'product-slug'
  })
  .depth(1)
```

### Fetching Collections

```typescript
// Get all collections
const { objects: collections } = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])

// Get products in a specific collection
const { objects: products } = await cosmic.objects
  .find({
    type: 'products',
    'metadata.collections': collectionId
  })
  .depth(1)
```

### Fetching Reviews

```typescript
// Get reviews for a product with product details
const { objects: reviews } = await cosmic.objects
  .find({
    type: 'reviews',
    'metadata.product': productId
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

// Get all reviews with product information
const { objects: allReviews } = await cosmic.objects
  .find({ type: 'reviews' })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application uses the Cosmic CMS SDK to fetch content from your bucket. The content model includes:

### Products Object Type
- **Product Name** (text) - The product's display name
- **Description** (html-textarea) - Rich text product description
- **Price** (number) - Product price
- **Product Images** (files) - Multiple product images
- **In Stock** (switch) - Availability status
- **SKU** (text) - Stock keeping unit
- **Collections** (objects) - Related collections

### Collections Object Type
- **Collection Name** (text) - Collection display name
- **Description** (textarea) - Collection description
- **Featured Image** (file) - Collection hero image

### Reviews Object Type
- **Customer Name** (text) - Reviewer's name
- **Rating** (select-dropdown) - 1-5 star rating
- **Review Text** (textarea) - Detailed review
- **Product** (object) - Related product
- **Verified Purchase** (switch) - Purchase verification

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `.next`
6. Deploy!

## 📝 License

MIT License - feel free to use this project for your own e-commerce showcase!

<!-- README_END -->