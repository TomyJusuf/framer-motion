import { motion } from 'motion/react'
import { Link } from 'react-router'

const containerVariantsHeader = {
  hidden: { y: -250 },
  visible: {
    y: -10,
    transition: { delay: 0.2, type: 'spring' },
  },
}

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
}
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <div>
        <Link to={'/'}>
          <motion.h2
            variants={containerVariantsHeader}
            initial="hidden"
            animate="visible"
            className=" ml-5 font-extrabold"
          >
            Pizza Join
          </motion.h2>
        </Link>
      </div>
    </header>
  )
}

export default Header
