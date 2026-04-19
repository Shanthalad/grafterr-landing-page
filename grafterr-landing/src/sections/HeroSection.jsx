import useContent from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";


export default function HeroSection() {
  const { data, loading } = useContent(fetchHeroContent);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="hero">
      <h1>
        {data.headlinePrefix}{" "}
        <span className="gradient">{data.headlineGradient}</span>
      </h1>
      <p>{data.subheadline}</p>
  
      <button>{data.cta}</button>
    </section>
  );
}