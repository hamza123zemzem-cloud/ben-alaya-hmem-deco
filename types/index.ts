export interface Product {
  id: number
  name: string
  description: string
  category: 'cuisine' | 'dressing' | 'porte-interieur' | 'porte-pivotante' | 'porte-aluminium' | 'fenetre-aluminium' | 'mobilier'
  image: string
  images?: string[]
}

export interface Service {
  id: number
  name: string
  description: string
  icon: string
  image: string
}

export interface Testimonial {
  id: number
  name: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface NavItem {
  label: string
  href: string
}
