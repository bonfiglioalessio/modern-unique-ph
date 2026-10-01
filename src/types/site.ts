export interface NavSubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  subLinks?: NavSubLink[];
}

export interface SiteLocation {
  city: string;
  province: string;
  region: string;
  country: string;
  address: string;
}

export interface SiteSocials {
  instagram: string;
  facebook: string;
  matrimonioCom: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  photographer: string;
  title: string;
  description: string;
  url: string;
  piva: string;
  email: string;
  phone: string;
  location: SiteLocation;
  socials: SiteSocials;
  navLinks: NavLink[];
}
