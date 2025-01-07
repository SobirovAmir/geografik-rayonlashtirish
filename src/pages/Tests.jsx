import { Link } from "react-router-dom";
import "./Tests.css";

const Tests = () => {
  const testFiles = [
    "lesson1.txt",
    "lesson2.txt",
    "lesson3.txt",
    "lesson4.txt",
    "lesson5.txt",
    "lesson6.txt",
  ];

  return (
    <div className="tests-container">
      <section className="additional-section">
        <h1 className="hero-title">Testlar</h1>
        <p className="hero-subtitle">
          Hududlarning tabiiy resurslari, landshaft va ekologik tizimlarini
          o&apos;rganing!
        </p>
      </section>

      <div className="test-list">
        <ul>
          {testFiles.map((file, index) => {
            const lessonId = file.replace(".txt", "");
            return (
              <li key={index} className="test-item">
                <Link to={`/tests/${lessonId}`} className="test-link">
                  {index + 1} ma&apos;ruza testi
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Section */}
      <footer className="test-footer">
        <p>Yaxshi omad va ilmiy sayohat!</p>
      </footer>
    </div>
  );
};

export default Tests;
