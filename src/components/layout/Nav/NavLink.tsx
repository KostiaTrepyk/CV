import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./NavLink.module.css";

export interface ILink {
    href: string;
    label: string;
    target?: React.HTMLAttributeAnchorTarget;
}

interface NavLinkProps {
    link: ILink;
    active?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(({ link }, ref) => {
    const location = useLocation();

    return (
        <Link
            className={styles.NavLink}
            to={link.href}
            aria-current={link.href === location.pathname ? "page" : undefined}
            ref={ref}
            target={link.target}
            unstable_viewTransition
        >
            {link.label}
        </Link>
    );
});

export default NavLink;
