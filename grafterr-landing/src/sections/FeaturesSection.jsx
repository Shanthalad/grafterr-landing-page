import useContent from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import { useState } from "react";

export default function FeaturesSection() {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);
  const [index, setIndex] = useState(0);

  if (loading) {
    return (
      <section className="features">
        <h2>Loading...</h2>
        <div className="carousel">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="card skeleton"></div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return <button onClick={retry}>Retry</button>;
  }

  if (!data || !data.products) {
    return <p>No data available</p>;
  }

  const next = () => {
    if (index < data.products.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="features">
      <h2>
        {data.title} <span className="gradient">{data.titleAccent}</span>
      </h2>
      <p className="subtitle">{data.subtitle}</p>

      <div className="carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`
          }}
        >
          {data.products.map((item, i) => (
            <div key={i} className="card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
<button onClick={prev} disabled={index === 0}>⬅</button>

<button 
  onClick={next} 
  disabled={index >= data.products.length - 1}
>
  ➡
</button>


    </section>
  );
}