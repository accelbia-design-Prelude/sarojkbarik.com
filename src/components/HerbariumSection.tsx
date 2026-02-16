import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/HerbariumSection.css";

const specimens = [
  {
    id: 1,
    name: "Trisetopsis himalayensis",
    location: "Maitoli Glacier, Western Himalaya",
    year: 2021,
    description:
      "New grass species (Poaceae, Aveninae) described from the Western Himalaya.",
  },
  {
    id: 2,
    name: "Anemone pindariensis",
    location: "Pindari Valley, Western Himalaya",
    year: 2021,
    description: "New Anemone species identified from the Pindari Valley.",
  },
  {
    id: 3,
    name: "Aconitum sp. (Sikkim)",
    location: "Sikkim, Eastern Himalaya",
    year: 2021,
    description: "New Aconitum species described from Sikkim.",
  },
  {
    id: 4,
    name: "Aconitum haridasanii",
    location: "Arunachal Pradesh",
    year: 2020,
    description: "New Aconitum species documented from Arunachal Pradesh.",
  },
  {
    id: 5,
    name: "Aconitum sp. (Eastern Himalaya)",
    location: "Eastern Himalaya",
    year: 2019,
    description:
      "Another new Aconitum species recorded from the Eastern Himalaya.",
  },
  {
    id: 6,
    name: "Christella sp.",
    location: "North-East India",
    year: 2019,
    description:
      "New fern species (Thelypteridaceae) described from North-East India.",
  },
  {
    id: 7,
    name: "Pedicularis sp.",
    location: "Himalaya",
    year: 2018,
    description: "New Pedicularis species in series Curvipes (Orobanchaceae).",
  },
  {
    id: 8,
    name: "Swertia angustifolia (typification)",
    location: "Himalaya",
    year: 2020,
    description:
      "Nomenclature and typification resolved for Swertia angustifolia and infraspecific taxa.",
  },
];

export default function HerbariumSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(() => {
      if (galleryRef.current) {
        gsap.from(galleryRef.current, {
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

  return (
    <section id="herbarium" className="herbarium-section" ref={sectionRef}>
      <h2>Interactive Herbarium</h2>
      <div ref={galleryRef} className="herbarium-grid">
        {specimens.map((specimen) => (
          <div
            key={specimen.id}
            className={`herbarium-card ${selectedId === specimen.id ? "active" : ""}`}
            onClick={() =>
              setSelectedId(selectedId === specimen.id ? null : specimen.id)
            }
          >
            <div className="plant-image">
              <div className="image-placeholder">🌿</div>
            </div>
            <div className="card-content">
              <h4>{specimen.name}</h4>
              <p className="location">{specimen.location}</p>
              <p className="year">{specimen.year}</p>
              {selectedId === specimen.id && (
                <div className="expanded-info">
                  <p>{specimen.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
