'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { testimonials } from '@/data/testimonials'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section className="py-20 bg-light-gray">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Avis de nos clients
          </h2>
          <p className="text-xl text-dark-gray max-w-2xl mx-auto">
            Découvrez ce que nos clients satisfaits disent de nous
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-white rounded-xl p-8 md:p-12 shadow-premium"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-primary text-xl"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-xl text-dark-gray text-center mb-8 italic">
                "{testimonial.comment}"
              </p>

              {/* Name */}
              <p className="text-center text-dark font-semibold text-lg">
                {testimonial.name}
              </p>
              <p className="text-center text-dark-gray text-sm">
                {new Date(testimonial.date).toLocaleDateString('fr-FR')}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-700 transition-colors"
              aria-label="Précédent"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-primary' : 'bg-medium-gray'
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-700 transition-colors"
              aria-label="Suivant"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials