interface Props {
  action?: () => void;
  text: string;
  as?: "a" | "button";
  href?: string;
  targetBlank?: boolean;
}

export const Button = ({
  action,
  text,
  as: Component = "button",
  href,
  targetBlank
}: Props) => {
  if (Component === "a" && !href) {
    console.warn("Warning: <a> elements should have an href attribute.");
  }
  if (Component === "button" && !action) {
    console.warn("Warning: <button> elements should have an action attribute.");
  }

  return (
    <Component
      {...(Component === "a" ? { href } : { onClick: action })}
      target={targetBlank ? "_blank" : "_self"}
      className="py-3 px-10 my-10 font-montserrat font-bold uppercase bg-olive-3 rounded-full text-nyanza-2 cursor-pointer shadow-md shadow-gray-400 active:scale-95 transition-all active:shadow-none block"
    >
      {text}
    </Component>
  );
};
