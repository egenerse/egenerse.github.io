import styled from "@emotion/styled";
import { motion, useScroll, useSpring } from "framer-motion";
import { Z_INDEXS } from "../utils/constants";

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.8rem;
  background: #7d00a3;
  transform-origin: 0%;
  z-index: ${Z_INDEXS.progressIndicator};
`;

export default function ProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    duration: 200,
  });

  return <Bar style={{ scaleX }} />;
}
