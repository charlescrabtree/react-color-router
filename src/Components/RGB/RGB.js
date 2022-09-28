import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  const currentColor = `rgb(${r},$}{g},${b})`;

  return (
    <div key={Math.random()} style={{ backgroundColor: currentColor }} className="colors">
      <h1>{`rgb(${r},${g},${b})`}</h1>
    </div>
  );
}
