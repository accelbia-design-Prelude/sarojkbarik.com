import { useEffect, useRef } from "react";
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
    image: "./trisetopsis_himalayensis.png",
    link: "https://doi.org/10.1111%2Fnjb.03390",
  },
  {
    id: 2,
    name: "Anemone pindariensis",
    location: "Pindari Valley, Western Himalaya",
    year: 2021,
    description: "New Anemone species identified from the Pindari Valley.",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.516.3.8",
    image: "./Anemone_per.jpg",
  },
  {
    id: 3,
    name: "Aconitum sp. (Sikkim)",
    location: "Sikkim, Eastern Himalaya",
    year: 2021,
    description: "New Aconitum species described from Sikkim.",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.484.2.5",
    image: "./Aconitum_sikkimensis.png",
  },
  {
    id: 4,
    name: "Aconitum haridasanii",
    location: "Arunachal Pradesh",
    year: 2020,
    description: "New Aconitum species documented from Arunachal Pradesh.",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.440.3.5",
    image: "./Aconitum_haridasanii.png",
  },
  {
    id: 6,
    name: "Christella sp.",
    location: "North-East India",
    year: 2019,
    description:
      "New fern species (Thelypteridaceae) described from North-East India.",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.397.3.4",
    image: "./Christella.jpeg",
  },
  {
    id: 7,
    name: "Pedicularis sp.",
    location: "Himalaya",
    year: 2018,
    description: "New Pedicularis species in series Curvipes (Orobanchaceae).",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.371.4.3",
  },
  {
    id: 8,
    name: "Swertia angustifolia (typification)",
    location: "Himalaya",
    year: 2020,
    description:
      "Nomenclature and typification resolved for Swertia angustifolia and infraspecific taxa.",
    link: "https://www.researchgate.net/publication/343642843_Nomenclature_and_typification_of_Swertia_angustifolia_Gentianaceae_its_infraspecific_taxa_and_synonyms",
    image: "./swertia.jpeg",
  },
];

export default function HerbariumSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
          <a
            key={specimen.id}
            className="herbarium-card"
            href={specimen.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="plant-image">
              {specimen.image ? (
                <img
                  src={specimen.image}
                  alt={specimen.name}
                  style={{
                    filter: "grayscale(100%)",
                    opacity: 1,
                  }}
                />
              ) : (
                <div className="image-placeholder">No Image</div>
              )}
            </div>
            <div className="card-content">
              <h4>{specimen.name}</h4>
              <p className="location">{specimen.location}</p>
              <p className="year">{specimen.year}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
