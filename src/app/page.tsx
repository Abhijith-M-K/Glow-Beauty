import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import AboutUs from "./components/about/about";
import Services from "./components/services/services";
import Works from "./components/works/work";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <Banner />
      <AboutUs />
      <Services />
      <Works/>
      <Contact />
      <Footer /> */}
       <section id="home">
          <Banner />
        </section>

        <section id="about-us">
          <AboutUs />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="works">
          <Works />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <Footer />
      
    </div>
  );
}
