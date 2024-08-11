import { NavItem } from "../types";

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Quotes',
    href: '/dashboard/quotes',
    icon: 'database',
    label: 'quotes'
  },
  {
    title: 'Upload Quotes',
    href: '/dashboard/upload',
    icon: 'upload',
    label: 'upload'
  },
  {
    title: 'Logout',
    href: '/',
    icon: 'logout',
    label: 'logout'
  }
];

export type Quotes = {
  id: number;
  quote: string;
  movie: string;
  year: string;
  language: string;
  // name: string;
  // email: string;
  // message: string;
  createdAt: string;
  updatedAt: string;
};