import { FormEvent } from 'react';

interface Props {
  action?: (e:FormEvent) => void;
  text: string | React.ReactNode;
  as?: "a" | "button";
  href?: string; 
  targetBlank?: boolean;
  className?: string
  id?: string
}

export const Button = ({
  action,
  text,
  as: Component = "button",
  href,
  targetBlank,
  id,
  className
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
      className={`${className} custom-btn`}
      id={id}
    >
      {text}
    </Component>
  );
};
