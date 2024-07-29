import Link from "next/link";

// Next Hooks
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type PropsType = {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
};

const links = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/portfolio", name: "portfolio" },
  { path: "/pricing", name: "pricing" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }: PropsType) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
