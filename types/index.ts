/**
 * Types TypeScript pour Les Récoltants
 */

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: number;
  category: 'entree' | 'plat' | 'dessert' | 'boisson';
  isVegetarian?: boolean;
  allergens?: string[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bocal' | 'frais' | 'sec';
  image?: string;
  inStock: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: 'reservation' | 'traiteur' | 'privatisation' | 'autre';
  message: string;
  eventDate?: string;
  guestCount?: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}
