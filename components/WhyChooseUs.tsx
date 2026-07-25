'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHammer,
  faStar,
  faHardHat,
  faClock,
  faHandshake,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { whyChooseUs } from '@/data/services'
import { containerVariant, slideUpVariant } from '@/lib/animations'

const iconMap: { [key: string]: any } = {
  Hammer: faHammer,
  Star: faStar,
  HardHat: faHardHat,
  Clock: faClock,
  Handshake: faHandshake,
  ThumbsUp: faThumbsUp,
}

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-dark-gray max-w-2xl mx-auto">
            Ben Alaya & Hmem Déco : qualité, professionnalisme et satisfaction garantis
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseUs.map((item) => (
            <motion.div
              key={item.id}
              className="bg-light-gray rounded-xl p-8 text-center hover:shadow-premium transition-all duration-300"
              variants={slideUpVariant}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                  <FontAwesomeIcon icon={iconMap[item.icon] || faStar} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-dark-gray leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs