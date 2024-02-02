import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Horoscope from "./Components/HoroScope/Horoscope";
import Ourservice from "./Components/OurService/Ourservice";
import WhyChoseUs from "./Components/WhyChoseUs/WhyChoseUs";
import Feedback from "./Components/FeedbackClient/Feedback";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        {/* <Pages/> */}
        <Header />
        <About />
        <Horoscope/>
        <Ourservice/>
        <WhyChoseUs/>
        <Feedback/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
