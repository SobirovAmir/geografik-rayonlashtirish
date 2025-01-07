import { Link } from 'react-router-dom';
import './Materials.css'; // Подключаем стили

const Materials = () => {
  const lessons = ['lesson1', 'lesson2', 'lesson3', 'lesson4', 'lesson5', 'lesson6'];

  return (
    <div className="materials-container">
      <h1 className="title">Ma&apos;ruzalar</h1>
      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <div key={lesson} className="lesson-card">
            <Link to={`/materials/${lesson}`} className="lesson-link">
              <div className="lesson-content">
                <h2>{`Dars ${lesson.replace('lesson', '')}`}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
