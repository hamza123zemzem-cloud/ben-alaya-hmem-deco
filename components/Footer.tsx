'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook as faFacebookBrand, faInstagram as faInstagramBrand } from '@fortawesome/free-brands-svg-icons'
import { companyInfo } from '@/data/company'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">{companyInfo.name}</h3>
            <p className="text-gray-400 mb-6">{companyInfo.description}</p>
            <div className="flex gap-4">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookBrand} />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagramBrand} />
              </a>
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {companyInfo.about.expertise.map((service, index) => (
                <li key={index} className="hover:text-white transition-colors">
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">
                <Link href="/">Accueil</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/produits">Produits</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/realisations">Réalisations</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/a-propos">À Propos</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-primary" />
                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-white transition-colors">
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1" />
                <span>{companyInfo.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} {companyInfo.name}. Tous droits réservés. | Développé avec passion.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer