import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function CounterText({max, duration}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, max, { duration: duration });

    return animation.stop;
  }, []);

  return <motion.h1>{rounded}</motion.h1>;
}