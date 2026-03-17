import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FinalCTA from "./components/FinalCTA";

const App = () => {
  return (
    <div className="">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/cheerfulBaddyids.webp')`,
        }}
      >
        <header className="py-4  pb-0 bg-gray-950 text-gray-100">
          <Navbar />
          <Hero />
        </header>
      </div>
      <main className=" flex flex-col dark:text-gray-300 text-gray-900">
        <About />
        <Services />
        <Benefits />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
