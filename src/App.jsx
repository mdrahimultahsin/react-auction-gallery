import Hero from "./components/hero/Hero";
import Auctions from "./components/auctions/Auctions";
import Footer from "./components/footer/Footer";
import {ToastContainer} from "react-toastify";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <div className="bg-[rgb(235,240,245)] font-sora">
      
        <ToastContainer />
        <Navbar></Navbar>
        <Hero></Hero>
        <Auctions></Auctions>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
