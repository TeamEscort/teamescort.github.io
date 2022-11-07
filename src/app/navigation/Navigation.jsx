import { Footer } from "./footer/Footer";
import { NavBar } from "./navBar/NavBar";

export const Navigation = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
