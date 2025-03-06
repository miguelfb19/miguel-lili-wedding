export const translateLeftAnimation = {
  initial: { translateX: "-50%", opacity: 0 },
  whileInView: { translateX: "0", opacity: 1 },
  transition: { duration: 1 },
  viewport: { once: true },
};
export const translateRightAnimation = {
  initial: { translateX: "50%", opacity: 0 },
  whileInView: { translateX: "0", opacity: 1 },
  transition: { duration: 1 },
  viewport: { once: true },
};
