import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";

const App = () => {
  return (
    <div className="">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/cheerfulBaddyKids.webp')`,
        }}
      >
        <header className="p-4 pb-0 bg-black/80 text-gray-100">
          <Navbar />
          <Hero />
        </header>
      </div>
      <main className=" pt-12 flex flex-col dark:text-gray-300 text-gray-900">
        <About />
        <Services />
        <Benefits />
      </main>
    </div>
  );
};

export default App;
