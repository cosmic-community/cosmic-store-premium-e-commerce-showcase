// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product type with typed metadata
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    description?: string;
    price: number;
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    in_stock: boolean;
    sku?: string;
    collections?: Collection[];
  };
}

// Collection type with typed metadata
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    collection_name: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Review type with typed metadata
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text?: string;
    product?: Product;
    verified_purchase: boolean;
  };
}

// Page type with typed metadata
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title: string;
    hero_heading?: string;
    hero_subheading?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    content?: string;
    mission_statement?: string;
    values?: Array<{
      title: string;
      description: string;
    }>;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections';
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews';
}

export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}