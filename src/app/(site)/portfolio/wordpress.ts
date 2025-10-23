export interface WpCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WpPortfolioItem {
  id: number;
  title: {
    rendered: string;
  };
  meta: {
    company_url: string;
  };
  testimonial_category: number[];
}

export interface PortfolioItem {
  title: string;
  url: string;
  category: string;
}