import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({ href, text, icon, className }: Props) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "group flex w-fit items-center justify-center rounded-sm bg-primary/90 px-6 py-2.5 text-base text-background transition-all duration-300 ease-in-out hover:bg-primary",
        icon && "items-center gap-2",
        className,
      )}
    >
      <span>{text}</span>
      <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-2">
        {icon}
      </span>
    </Link>
  );
};

export default Button;
