import { Link } from 'react-router'
import { motion } from 'motion/react'
import { delay } from 'motion'

const buttonVariables = {
  hover: {
    scale: 1.1,
    boxShadow: '0px 0px 5px rgb(255,255,255)',
    duration: 0.3,
    transition: { repeat: 5, delay: 0.5, repeatType: 'mirror' },
  },
}

const bodyVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      easy: 'easeInOut',
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
}
const Home = () => {
  return (
    <motion.div
      variants={bodyVariants}
      initial={'hidden'}
      animate={'visible'}
      exit={'exit'}
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariables} whileHover={'hover'}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home
