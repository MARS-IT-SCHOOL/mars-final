import "../../../src/index.css";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { logout } from '../../actions/authActions'; // Import your logout action

const itemVariants = {
  open: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    scale: 0.3,
    filter: "blur(20px)",
    transition: { duration: 0.2 }
  }
};

export default function DropdownMenu({ nameUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/sign-in'); // Navigate to the login page or any other appropriate page
  };

  // Truncate nameUser if it exceeds 25 characters
  const displayName = nameUser.length > 17 ? `${nameUser.slice(0, 14)}...` : nameUser;

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu drop-shadow-xs max-w-[310px] max-h-[60px] w-full rounded-lg"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className=" rounded-lg max-h-[42px] py-2 px-5 text-lg font-bold cursor-pointer w-full text-left mb-3 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        data-theme
      >
        {displayName}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          <svg width="15" fill="white" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
              delayChildren: 0.3,
              staggerChildren: 0.1
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              when: "afterChildren",
              staggerDirection: -1,
              staggerChildren: 0.06
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="flex flex-col absolute max-w-[295px] w-full top-20"
        data-theme
      >
        <motion.li className="list-none m-0 p-4 active:scale-95 cursor-pointer hover:bg-red-600 hover:duration-500 rounded-lg" variants={itemVariants}>
          Profile settings
        </motion.li>
        <motion.li className="list-none m-0 p-4 active:scale-95 cursor-pointer hover:bg-red-600 hover:duration-500 rounded-lg" variants={itemVariants}>
          Get Desktop App
        </motion.li>
        <motion.li
          className="list-none text-red-300 m-0 p-4 active:scale-95 cursor-pointer hover:bg-red-600 hover:duration-500 rounded-lg"
          variants={itemVariants}
          onClick={handleLogout} // Add onClick handler
        >
          Log Out
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
