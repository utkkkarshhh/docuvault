import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { HTMLAttributes } from "react";

export type PageLayoutProps = HTMLAttributes<HTMLDivElement> & {
  showHeader?: boolean;
  showFooter?: boolean;
  isAuthenticated?: boolean;
};

export default function PageLayout(props: PageLayoutProps) {
  const { showHeader, showFooter, children, ...divProps } = props;

  return (
    <div {...divProps}>
      {showHeader && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
}
