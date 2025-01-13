import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router'

const backdrop = {
  hiden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duratio: 1.8,
      ease: 'easy',
      when: 'beforeChildren',
    },
  },
}

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '200px',
    opacity: 1,
    transition: { delay: 0.5, duratio: 0.8, ease: 'easeInOut', type: 'spring' },
  },
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit={'hiden'}
          className="backdrop flex justify-center items-start"
        >
          <motion.div
            variants={modal}
            className="bg-slate-200 p-8 rounded-2xl flex flex-col  items-center "
          >
            <p className="text-[#444] text-2xl mb-4 font-bold">
              Want to make another pizza?
            </p>
            <Link to="/">
              <button
                type="button"
                className="bg-white font-bold text-black px-4 py-2 text-center rounded-full border-2 border-slate-700"
                onClick={() => {
                  setShowModal(false)
                }}
              >
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Modal
