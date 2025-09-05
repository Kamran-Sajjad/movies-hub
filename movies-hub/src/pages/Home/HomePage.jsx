import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import MovieSection from "../movie/MovieSection";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <MovieSection />
        <Footer />
      </div>
      
    </>
  );
};
export default HomePage;
