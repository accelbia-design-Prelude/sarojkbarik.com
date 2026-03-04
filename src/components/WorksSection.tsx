import { useEffect, useRef } from "react";
import gsap from "gsap";
import FlowingAwards from "./FlowingAwards";
import "../styles/WorksSection.css";

const works = [
  {
    id: 1,
    type: "Publication",
    title:
      "Progress and Prospects of Cyanide Pollution Remediation Research–A Global Review",
    authors: "Gupta, A., Barik, S.K.* and Srivastava, P.K.",
    publication: "Water, Air, & Soil Pollution 237:200. IF: 3.0 (2026)",
    link: "https://link.springer.com/article/10.1007/s11270-025-08853-8",
  },
  {
    id: 2,
    type: "Publication",
    title:
      "Three hundred years history of Cyanide use in industries, its environmental risks and mitigation technologies",
    authors: "Gupta, A., Manika, N., Srivastava, P.K. and Barik, S.K.*",
    publication: "Environmental Sustainability. IF: 2.8 (2026)",
    link: "https://www.researchgate.net/publication/398598882_Three_hundred_years_history_of_Cyanide_use_in_industries_its_environmental_risks_and_mitigation_technologies",
  },
  {
    id: 3,
    type: "Publication",
    title: "Measuring the Quality of Species List Contents",
    authors: "Pape, T., Pyle, R.L., Bánki, O., Barik, S.K., et al.",
    publication: "BioScience. IF: 8.4 (2026)",
    link: "https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biaf191/8442886",
  },
  {
    id: 4,
    type: "Publication",
    title: "Measuring the Quality of Species List Governance",
    authors: "Stephen T. Garnett, Olaf Bánki, Saroj Kanta Barik, et al.",
    publication: "BioScience. IF: 8.4 (2026)",
    link: "https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biaf071/8443372",
  },
  {
    id: 6,
    type: "Publication",
    title:
      "Evaluation of in vivo anti-lithiatic activity of polyherbal formulation in ameliorating calcium oxalate kidney stones and integrated in vitro-in silico studies",
    authors:
      "Misra, A., Chaudhary, M.K., Rawat, P., Khan, H., Srivastava, V., Singh, D., Barik, S.K. and Srivastava, S.",
    publication: "Fitoterapia 185:106739. IF: 2.6 (2025)",
    link: "https://pubmed.ncbi.nlm.nih.gov/40675268/",
  },
  {
    id: 7,
    type: "Publication",
    title:
      "Transcriptomic insights into elevation‐dependent gene expression in Rhododendron anthopogon D.Don: Implications for climate resilience",
    authors:
      "Mangral, Z.A., Islam, S.U., Majeed, A., Tariq, L., Goel, S., Barik, S.K., and Dar, T.U.H.",
    publication: "Physiologia Plantarum 177(4): e70419. IF: 3.6 (2025)",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/ppl.70419",
  },
  {
    id: 8,
    type: "Publication",
    title:
      "Genetic diversity analysis of Rhododendron arboreum in western Himalaya indicates altitudinal population differentiation and mid-elevation enrichment of heterozygotes",
    authors:
      "Sorokhaibam, S.S., Jhajhariya, M., Baishya, R., Barik, S.K., Goel, S. and Tandon, R.",
    publication: "The Nucleus. IF: 2.6 (2025)",
    link: "https://link.springer.com/article/10.1007/s13237-025-00595-6",
  },
  {
    id: 9,
    type: "Publication",
    title:
      "Metagenomic profiling of cyanide-degrading microbial communities in steel industry wastewater with an implication for bioremediation",
    authors:
      "Gupta, A., Naseem, M., Gupta, E., Srivastava, P.K. and Barik, S.K.",
    publication: "ENGINEERING Environment 19(10):137. IF: 6.4 (2025)",
    link: "https://link.springer.com/article/10.1007/s11783-025-2057-9",
  },
  {
    id: 10,
    type: "Publication",
    title:
      "Integrated in vitro and in vivo antilithiatic efficacy of a synergistic herbal formulation, URO-5 and exploration of in silico guided mechanism of action",
    authors:
      "Misra, A., Rawat, P., Khan, H., Srivastava, V., Singh, D., Barik, S.K. and Srivastava, S.",
    publication: "Phytochemistry Letters 69:103525. IF: 1.4 (2025)",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1874390025016179?via%3Dihub",
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
    image:
      "https://www.ipsdis.org/image/cache/catalog/Presidents/1966%20Tandon,%20R.N.-304x364.jpg",
  },
  {
    link: "#",
    text: "Dr. Brandis Award",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/DietrichBrandis.jpg/500px-DietrichBrandis.jpg",
  },
  {
    link: "#",
    text: "Prof. Birbal Sahani Medal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bust_of_Birbal_Sahni_%28Birla_Industrial_%26_Technological_Museum%29.jpg",
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
        {works.map((work) => {
          const cardContent = (
            <>
              <div className="work-type">{work.type}</div>
              <h4>{work.title}</h4>
              <p>{work.authors}</p>
              <span className="work-year">{work.publication}</span>
            </>
          );

          return work.link ? (
            <a
              key={work.id}
              href={work.link}
              target="_blank"
              className={`work-card work-${work.type.toLowerCase()}`}
            >
              {cardContent}
            </a>
          ) : (
            <div
              key={work.id}
              className={`work-card work-${work.type.toLowerCase()}`}
            >
              {cardContent}
            </div>
          );
        })}
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
