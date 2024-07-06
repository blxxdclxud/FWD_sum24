import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
