import { HTMLAttributes } from "react";
import "./Link.scss";
export type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
  showUnderline?: boolean;
  shouldBold?: boolean;
  href: string;
};

export default function Link(props: LinkProps) {
  const { children, className, href, showUnderline, shouldBold } = props;
  return (
    <a
      {...props}
      className={[
        "dv-link",
        showUnderline ? "dv-u-underline" : undefined,
        shouldBold ? "dv-u-bold" : undefined,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      href={href}
    >
      {children}
    </a>
  );
}
