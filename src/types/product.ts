export interface Media {
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  id: string;
  text: string;
  icon: string;
}

// ask question about more seo things later
export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}

export interface CtaText {
  name: string;
  value: string;
}

export type SectionType =
  | "instructors"
  | "feature_explanations"
  | "features"
  | "pointers"
  | "about";

export interface Section {
  type: SectionType;
  name: string;
  values: unknown[];
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface ProductApiResponse {
  code: number;
  data: ProductData;
  error: unknown[];
  message: string;
  payload: unknown[];
  status_code: number;
}

export type Instructor = {
  type: SectionType;
  name: string;
  description: string;
  image: string;
  short_description: string;
  slug: string;
};

export type Feature = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
};

export type Pointer = {
  id: string;
  text: string;
};

export type About = {
  id: string;
  title: string;
  description: string;
};

export type ExclusiveFeature = {
  id: string;
  checklist: string[];
  file_url: string;
  title: string;
}
