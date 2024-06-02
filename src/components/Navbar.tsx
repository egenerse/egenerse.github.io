import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Z_INDEXS } from "../utils/constants";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: #e77650;
  opacity: 1;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0s ease;
  z-index: ${Z_INDEXS.navbar};
`;

const SCROLL_DISTANCE_TO_TRIGGER_NAVBAR_ANIMATION_IN_PX = 25;

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollUpDistance, setScrollUpDistance] = useState(0);
  const [scrollDownDistance, setScrollDownDistance] = useState(0);

  const controlNavbar = () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
      // User is scrolling down
      setScrollDownDistance((prev) => prev + (scrollY - lastScrollY));
      if (
        scrollDownDistance > SCROLL_DISTANCE_TO_TRIGGER_NAVBAR_ANIMATION_IN_PX
      ) {
        setShow(false);
      }
      setScrollUpDistance(0);
    } else {
      // User is scrolling up
      setScrollUpDistance((prev) => prev + (lastScrollY - scrollY));
      if (
        scrollUpDistance > SCROLL_DISTANCE_TO_TRIGGER_NAVBAR_ANIMATION_IN_PX
      ) {
        setShow(true);
      }
      setScrollDownDistance(0);
    }

    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, scrollUpDistance]);

  return (
    <NavbarContainer
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -100 }}
    >
      <h1>Ege Nerse</h1>
    </NavbarContainer>
  );
};

export default Navbar;
