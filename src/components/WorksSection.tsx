import { useEffect, useRef } from "react";
import gsap from "gsap";
import FlowingAwards from "./FlowingAwards";
import "../styles/WorksSection.css";

const works = [
  {
    id: 1,
    type: "Publication",
    title: "Biodiversity Assessment of Eastern Ghats",
    description: "A comprehensive study on the endemic species diversity.",
    year: 2023,
  },
  {
    id: 2,
    type: "Project",
    title: "Conservation of Rare Orchid Species",
    description: "Field study and in-situ conservation strategies.",
    year: 2023,
  },
  {
    id: 3,
    type: "Publication",
    title: "Climate Change Impact on Flora",
    description: "Research on shifting distribution patterns.",
    year: 2022,
  },
  {
    id: 4,
    type: "Project",
    title: "Community-Based Habitat Restoration",
    description: "Engaging local communities in conservation.",
    year: 2022,
  },
  {
    id: 5,
    type: "Publication",
    title: "Medicinal Plants of India",
    description: "Documentation of traditional medicine sources.",
    year: 2021,
  },
];

const fellowships = [
  {
    link: "#",
    text: "INSA Fellowship",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "IASc Fellowship",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "NASI Fellowship",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "NAAS Fellowship",
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    link: "#",
    text: "Linnean Society Fellowship",
    image: "https://picsum.photos/600/400?random=5",
  },
  {
    link: "#",
    text: "LEAD Fellowship",
    image: "https://picsum.photos/600/400?random=6",
  },
  {
    link: "#",
    text: "ISEB Fellowship",
    image: "https://picsum.photos/600/400?random=7",
  },
];

const awards = [
  {
    link: "#",
    text: "Prof. R.N. Tandon Memorial Award",
    image: "https://picsum.photos/600/400?random=8",
  },
  {
    link: "#",
    text: "Dr. Brandis Award",
    image: "https://picsum.photos/600/400?random=9",
  },
  {
    link: "#",
    text: "Prof. Birbal Sahani Medal",
    image: "https://picsum.photos/600/400?random=10",
  },
  {
    link: "#",
    text: "Biodiversity Lecture Award",
    image: "https://picsum.photos/600/400?random=11",
  },
  {
    link: "#",
    text: "Dr. Mopuri Brahmam Memorial Award",
    image: "https://picsum.photos/600/400?random=12",
  },
  {
    link: "#",
    text: "Samanta Chandra Sekhar Award",
    image: "https://picsum.photos/600/400?random=13",
  },
  {
    link: "#",
    text: "LMA Award for Creativity and Innovation",
    image: "https://picsum.photos/600/400?random=14",
  },
  {
    link: "#",
    text: "SN Patnaik Memorial Lecture Award, 2024",
    image: "https://picsum.photos/600/400?random=15",
  },
];

export default function WorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(() => {
      if (worksRef.current) {
        gsap.from(worksRef.current, {
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
    <section id="works" className="works-section" ref={sectionRef}>
      <h2>Recent Works</h2>
      <div ref={worksRef} className="works-grid">
        {works.map((work) => (
          <div
            key={work.id}
            className={`work-card work-${work.type.toLowerCase()}`}
          >
            <div className="work-type">{work.type}</div>
            <h4>{work.title}</h4>
            <p>{work.description}</p>
            <span className="work-year">{work.year}</span>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "80px" }}>Fellowships Elected</h2>
      <div style={{ height: "600px", position: "relative", width: "100vw" }}>
        <FlowingAwards
          items={fellowships}
          speed={15}
          textColor="var(--accent-color)"
          bgColor="var(--neutral-color)"
          marqueeBgColor="var(--accent-color)"
          marqueeTextColor="var(--neutral-color)"
          borderColor="var(--accent-color)"
        />
      </div>

      <h2 style={{ marginTop: "80px" }}>Awards Received</h2>
      <div style={{ height: "600px", position: "relative", width: "100vw" }}>
        <FlowingAwards
          items={awards}
          speed={15}
          textColor="var(--accent-color)"
          bgColor="var(--neutral-color)"
          marqueeBgColor="var(--accent-color)"
          marqueeTextColor="var(--neutral-color)"
          borderColor="var(--accent-color)"
        />
      </div>
    </section>
  );
}
