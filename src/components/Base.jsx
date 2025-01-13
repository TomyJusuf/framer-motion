import { motion } from 'motion/react'
import { Link } from 'react-router'

const containerVariantsBase = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

const nextVariantsBase = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      stiffness: 110,
    },
  },
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust']

  return (
    <motion.div
      variants={containerVariantsBase}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : ''
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
                // textShadow: '0px 0px 5px rgb(255,255,255)',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={nextVariantsBase} className="next">
          <Link to="/toppings">
            <motion.button
              className=""
              whileHover={{
                scale: 1.2,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                borderBottom: 'solid rgb(255, 255, 255 ) 1px',
                duration: 1.5,
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base
