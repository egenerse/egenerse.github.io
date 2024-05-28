import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: #e7765048;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
`;

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

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
