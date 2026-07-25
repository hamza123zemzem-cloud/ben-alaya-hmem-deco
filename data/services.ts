import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 1,
    name: 'Cuisines Modernes',
    description: 'Cuisines sur mesure alliant design, fonctionnalité et qualité premium. Fabrication en bois et aluminium.',
    icon: 'UtensilsCrossed',
    image: '/images/cuisine/cuisine-noire-1.jpg',
  },
  {
    id: 2,
    name: 'Dressings Sur Mesure',
    description: 'Dressings spacieux et optimisés pour votre chambre. Rangements intelligents et design contemporain.',
    icon: 'Shirt',
    image: '/images/dressing/dressing-blanc.jpg',
  },
  {
    id: 3,
    name: 'Portes Intérieures',
    description: 'Portes en bois ou aluminium, pivotantes ou coulissantes. Design moderne et finition impeccable.',
    icon: 'DoorOpen',
    image: '/images/porte/porte-bois-naturel.jpg',
  },
  {
    id: 4,
    name: 'Menuiserie Bois',
    description: 'Mobilier et menuiserie en bois massif. Qualité premium et finitions exceptionnelles.',
    icon: 'TreePine',
    image: '/images/porte/porte-bois-moderne.jpg',
  },
  {
    id: 5,
    name: 'Structures Aluminium',
    description: 'Fenêtres, portes et rampes en aluminium. Design épuré et durabilité exceptionnelle.',
    icon: 'Metal',
    image: '/images/fenetre/fenetre-aluminium.jpg',
  },
  {
    id: 6,
    name: 'Mobilier Sur Mesure',
    description: 'Meubles et structures sur mesure. Créations uniques adaptées à votre espace.',
    icon: 'Couch',
    image: '/images/mobilier/rampe-escalier.jpg',
  },
]

export const whyChooseUs = [
  {
    id: 1,
    title: 'Fabrication Sur Mesure',
    description: 'Chaque projet est unique et fabriqué selon vos besoins exactes.',
    icon: 'Hammer',
  },
  {
    id: 2,
    title: 'Qualité Premium',
    description: 'Matériaux haut de gamme et finitions irréprochables garanties.',
    icon: 'Star',
  },
  {
    id: 3,
    title: 'Installation Professionnelle',
    description: 'Équipe expérimentée pour une installation parfaite de vos réalisations.',
    icon: 'HardHat',
  },
  {
    id: 4,
    title: 'Respect des Délais',
    description: 'Livraison à temps garantie et suivi de projet rigoureux.',
    icon: 'Clock',
  },
  {
    id: 5,
    title: 'Accompagnement Personnalisé',
    description: 'Conseils d\'experts pour bien choisir vos solutions d\'aménagement.',
    icon: 'Handshake',
  },
  {
    id: 6,
    title: 'Satisfaction Client',
    description: '+300 clients satisfaits et +500 projets réussis depuis 2020.',
    icon: 'ThumbsUp',
  },
]

export const stats = [
  { label: 'Projets Réalisés', value: 500, suffix: '+' },
  { label: 'Clients Satisfaits', value: 300, suffix: '+' },
  { label: '100% Sur Mesure', value: 100, suffix: '%' },
  { label: 'Ans d\'Expérience', value: 5, suffix: '+' },
]
