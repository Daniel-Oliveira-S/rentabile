type ButtonProps = {
  children?: React.ReactNode;
  className?: object | string;
  href: string;
  id?: string;
};
import "./button.css";

export function Button(Props: ButtonProps) {
  return (
    <a href={Props.href} >
      {Props.children}
    </a>
  );
}
