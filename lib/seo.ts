export const defaultSEO = {
  title: 'Ben Alaya & Hmem Déco | Dressings, Cuisines & Mobilier Sur Mesure',
  description: 'Fabrication sur mesure de dressings, cuisines, portes, fenêtres en aluminium et mobilier haut de gamme en Tunisie.',
  keywords: 'dressing, cuisine, porte, aluminium, bois, menuiserie, mobilier, aménagement, Menzel Temim, Tunisie',
  ogImage: '/og-image.jpg',
  canonicalUrl: 'https://benalayahmemdeco.tn',
}

export const generateMetaTags = (title: string, description: string, path: string) => {
  return {
    title: `${title} | Ben Alaya & Hmem Déco`,
    description,
    canonical: `${defaultSEO.canonicalUrl}${path}`,
    openGraph: {
      title: `${title} | Ben Alaya & Hmem Déco`,
      description,
      url: `${defaultSEO.canonicalUrl}${path}`,
      siteName: 'Ben Alaya & Hmem Déco',
      type: 'website',
      image: defaultSEO.ogImage,
    },
  }
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ben Alaya & Hmem Déco',
  image: '/logo.png',
  description: 'Fabrication sur mesure de dressings, cuisines, portes et mobilier d\'exception',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sidi Jamel Eddine',
    addressLocality: 'Menzel Temim',
    postalCode: '8070',
    addressCountry: 'TN',
  },
  telephone: '+216 55 919 373',
  email: 'ben.alaya.hmem.déco@gmail.com',
  founded: 2020,
  priceRange: '$$$',
  areaServed: 'TN',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61591857179296',
    'https://www.instagram.com/benalaya_hmem_deco/',
  ],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ben Alaya & Hmem Déco',
  url: 'https://benalayahmemdeco.tn',
  logo: '/logo.png',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61591857179296',
    'https://www.instagram.com/benalaya_hmem_deco/',
  ],
  contact: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+216 55 919 373',
    email: 'ben.alaya.hmem.déco@gmail.com',
  },
}
