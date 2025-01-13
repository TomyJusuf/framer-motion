import { Link } from 'react-router'
import { motion } from 'motion/react'

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
      mass: 0.4,
      damping: 8,
      when: 'BeforeChildren',
      stagerChildren: 0.4,
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}

const bodyVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      // duration: 2,
      easy: 'easeInOut',
    },
  },
}
const nextVariantsHover = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1.3,
    originX: 0,

    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
  visibleButton: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
  },
}
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ]

  return (
    <motion.div
      variants={containerVariantsBase}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <motion.ul variants={bodyVariants} initial="hidden" animate="visible">
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : ''
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={nextVariantsHover.visible}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </motion.ul>
      <Link to="/order">
        <motion.button whileHover={nextVariantsHover.visibleButton}>
          Order
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Toppings
