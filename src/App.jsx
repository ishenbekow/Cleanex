import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Service";
import Team from "./components/Team/Team";
import Portfolio from "./components/Portfolio/Portfolio";
import News from "./components/News/News";
import Customers from "./components/Customers/Customers";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Portfolio />
      <Customers/>
      <News />
    </div>
  );
};

export default App;
