import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Horoscope from "./Components/HoroScope/Horoscope";
import Ourservice from "./Components/OurService/Ourservice";
import WhyChoseUs from "./Components/WhyChoseUs/WhyChoseUs";
import Feedback from "./Components/FeedbackClient/Feedback";
import Footer from "./Components/Footer/Footer";
// import Pages from "./Routers/Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
   <div className="app">
        <Navbar /> 
        <Header/>
         <About/>
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
