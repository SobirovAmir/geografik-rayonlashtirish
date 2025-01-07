import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Tabiiy Geografik Rayonlashtirish</h1>
        <p className="hero-subtitle">
          Hududlarning tabiiy sharoiti, iqtisodiy imkoniyatlari va ekologik
          muvozanatini o&apos;rganing!
        </p>
      </section>

      {/* Navigation Section */}
      <nav className="nav-section">
        <Link to="/materials" className="nav-card">
          <h2>Materiallar</h2>
          <p>
            Tabiiy geografik rayonlashtirish bo&apos;yicha ilmiy va amaliy
            materiallar.
          </p>
        </Link>
        <Link to="/tests" className="nav-card">
          <h2>Testlar</h2>
          <p>Mavzu bo&apos;yicha bilimlaringizni sinab ko&apos;ring.</p>
        </Link>
        <Link to="/resources" className="nav-card">
          <h2>Resurslar</h2>
          <p>
            Qo&apos;shimcha manbalar va interaktiv o&apos;quv materiallari bilan
            tanishing.
          </p>
        </Link>
      </nav>

      {/* Information Section */}
      <section className="info-section">
        <div className="info-content">
          <h2>Rayonlashtirishning Muhimligi</h2>
          <p>
            Tabiiy geografik rayonlashtirish hududlarning iqlim, tuproq, suv
            resurslari va bioxilma-xillikni chuqurroq o&apos;rganish imkonini beradi.
            Bu bilimlar hududlarning ekologik muvozanatini saqlash va ulardan
            samarali foydalanishga yordam beradi.
          </p>
        </div>
        <img
          src="/geographic-regions.webp"
          alt="Geographic Regions"
          className="info-image"
        />
      </section>
    </div>
  );
};

export default Home;
