import Navbar from "../../components/layout/Navbar";
import MovieSection from "../movie/MovieSection";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <MovieSection />
      </div>
    </>
  );
};
export default HomePage;
