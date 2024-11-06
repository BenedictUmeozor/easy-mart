export interface AppLink {
  name: string;
  href: string;
}

export interface AppCategory {
  name: string;
  slug: string;
  url: string;
}

export interface AppProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductResponse {
  products: AppProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface BreadCrumbLink {
  id: number;
  name: string;
  href: string;
  isPage: boolean;
  isClickable?: boolean;
}
