import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/VideosSection.css";

const videos = [
  {
    id: 1,
    title: "RSTV Eureka - Ecosystem & Biodiversity - India's real wealth",
    videoId: "BIhugPrmM-4",
  },
  {
    id: 2,
    title:
      "Professor Saroj Kanta Barik Director CSIR - N.B.R.I Lucknow speaks at Rose and Gladiolus Flower Show",
    videoId: "0rrk341nFLM",
  },
  {
    id: 3,
    title: "Inaugural Ceremony of (ICPEP-7) | 30 Nov 2025. | CSIR-NBRI",
    videoId: "EDXI3E2Lqxk",
  },
  {
    id: 4,
    title: "TEN NEWS LIVE - Biodiversity Conclave",
    videoId: "hG0taakGjoA",
  },
];

export default function VideosSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(() => {
      if (carouselRef.current) {
        gsap.from(carouselRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
        });
      }
      observer.unobserve(sectionRef.current!);
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const video = videos[currentIndex];

  return (
    <section id="videos" className="videos-section" ref={sectionRef}>
      <h2>Featured Videos</h2>
      <div ref={carouselRef} className="carousel">
        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="video-title">{video.title}</p>
        <div className="carousel-controls">
          <button onClick={prevVideo} className="carousel-btn">
            ❮
          </button>
          <div className="carousel-dots">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></div>
            ))}
          </div>
          <button onClick={nextVideo} className="carousel-btn">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
