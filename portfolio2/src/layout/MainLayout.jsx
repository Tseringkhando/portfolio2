import PropTypes from "prop-types";
import Background from "../Background/Background";
import Footer from "../sections/Footer/Footer";
import Navigation from "../sections/Navigation/Navigation";

const MainLayout = ({ children }) => {
  return (
    <>
      <Background />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is provided
};

export default MainLayout;
