/* All page content in one place. Keep this file as the single source of truth. */

export type Species = {
  id: number;
  num: string;
  name: string;
  family: string;
  location: string;
  elev: string;
  year: number;
  isNew: boolean;
  image: string;
  link: string;
  note: string;
};

export type Publication = {
  yr: number;
  title: string;
  authors: string;
  journal: string;
  if: number;
  link: string;
};

export type Fellowship = {
  yr: string;
  name: string;
  full: string;
};

export type Award = {
  yr: string;
  name: string;
  org?: string;
};

export type Video = {
  id: string;
  title: string;
  source: string;
  year: number;
};

export type Appointment = {
  yr: string;
  role: string;
  org: string;
};

/* ----- Species (Field Index) ----- */
export const SPECIES: Species[] = [
  { id: 1, num: "001", name: "Trisetopsis himalayensis", family: "Poaceae",
    location: "Maitoli Glacier, Uttarakhand", elev: "2,560 m", year: 2021, isNew: true,
    image: "/trisetopsis_himalayensis.png",
    link: "https://doi.org/10.1111%2Fnjb.03390",
    note: "New grass species in subtribe Aveninae." },
  { id: 2, num: "002", name: "Anemone pindariensis", family: "Ranunculaceae",
    location: "Pindari Valley, Western Himalaya", elev: "3,400 m", year: 2021, isNew: true,
    image: "/Anemone_ped.png",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.516.3.8",
    note: "Identified from the Pindari Valley." },
  { id: 3, num: "003", name: "Aconitum sikkimensis", family: "Ranunculaceae",
    location: "Sikkim, Eastern Himalaya", elev: "3,200 m", year: 2021, isNew: true,
    image: "/Aconitum_sikkimensis.png",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.484.2.5",
    note: "Section Catenatae; alpine slope habitat." },
  { id: 4, num: "004", name: "Aconitum haridasanii", family: "Ranunculaceae",
    location: "Arunachal Pradesh", elev: "3,800 m", year: 2020, isNew: true,
    image: "/Aconitum_haridasanii.png",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.440.3.5",
    note: "Documented from Arunachal Pradesh." },
  { id: 5, num: "005", name: "Aconitum tawangense", family: "Ranunculaceae",
    location: "Tawang, Arunachal Pradesh", elev: "4,100 m", year: 2019, isNew: true,
    image: "/aconitum_tawangense.png",
    link: "https://www.biotaxa.org/Phytotaxa/article/view/phytotaxa.413.1.6",
    note: "Described from Tawang, Eastern Himalaya." },
  { id: 6, num: "006", name: "Christella kendujharensis", family: "Thelypteridaceae",
    location: "Kendujhar, Odisha", elev: "650 m", year: 2019, isNew: true,
    image: "/Christella.jpeg",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.397.3.4",
    note: "New fern species from north-east India." },
  { id: 7, num: "007", name: "Pedicularis husainiana", family: "Orobanchaceae",
    location: "Western Himalaya", elev: "3,600 m", year: 2018, isNew: false,
    image: "/Pedicularis_husainiana.png",
    link: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.371.4.3",
    note: "Series Curvipes — alpine meadow." },
  { id: 8, num: "008", name: "Swertia angustifolia", family: "Gentianaceae",
    location: "Trans-Himalaya", elev: "—", year: 2020, isNew: false,
    image: "/swertia.jpeg",
    link: "https://www.researchgate.net/publication/343642843",
    note: "Nomenclatural typification of taxa & synonyms." }
];

/* ----- Publications ----- */
export const PUBLICATIONS: Publication[] = [
  { yr: 2026, title: "Progress and Prospects of Cyanide Pollution Remediation Research — A Global Review",
    authors: "Gupta, A., Barik, S.K.*, Srivastava, P.K.",
    journal: "Water, Air, & Soil Pollution", if: 3.0,
    link: "https://link.springer.com/article/10.1007/s11270-025-08853-8" },
  { yr: 2026, title: "Three hundred years history of Cyanide use in industries, its environmental risks and mitigation technologies",
    authors: "Gupta, A., Manika, N., Srivastava, P.K., Barik, S.K.*",
    journal: "Environmental Sustainability", if: 2.8,
    link: "https://www.researchgate.net/publication/398598882_Three_hundred_years_history_of_Cyanide_use_in_industries_its_environmental_risks_and_mitigation_technologies" },
  { yr: 2026, title: "Measuring the Quality of Species List Contents",
    authors: "Pape, T., Pyle, R.L., Bánki, O., Barik, S.K., et al.",
    journal: "BioScience", if: 8.4,
    link: "https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biaf191/8442886" },
  { yr: 2026, title: "Measuring the Quality of Species List Governance",
    authors: "Garnett, S.T., Bánki, O., Barik, S.K., et al.",
    journal: "BioScience", if: 8.4,
    link: "https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biaf071/8443372" },
  { yr: 2025, title: "Transcriptomic insights into elevation-dependent gene expression in Rhododendron anthopogon D.Don",
    authors: "Mangral, Z.A., Islam, S.U., Majeed, A., Tariq, L., Goel, S., Barik, S.K., Dar, T.U.H.",
    journal: "Physiologia Plantarum", if: 3.6,
    link: "https://onlinelibrary.wiley.com/doi/10.1111/ppl.70419" },
  { yr: 2025, title: "Metagenomic profiling of cyanide-degrading microbial communities in steel-industry wastewater",
    authors: "Gupta, A., Naseem, M., Gupta, E., Srivastava, P.K., Barik, S.K.",
    journal: "Frontiers of Environmental Science & Engineering", if: 6.4,
    link: "https://link.springer.com/article/10.1007/s11783-025-2057-9" },
  { yr: 2025, title: "Genetic diversity analysis of Rhododendron arboreum in western Himalaya indicates altitudinal population differentiation",
    authors: "Sorokhaibam, S.S., Jhajhariya, M., Baishya, R., Barik, S.K., Goel, S., Tandon, R.",
    journal: "The Nucleus", if: 2.6,
    link: "https://link.springer.com/article/10.1007/s13237-025-00595-6" },
  { yr: 2025, title: "Evaluation of in-vivo anti-lithiatic activity of polyherbal formulation in ameliorating calcium oxalate kidney stones",
    authors: "Misra, A., Chaudhary, M.K., Rawat, P., et al., Barik, S.K., Srivastava, S.",
    journal: "Fitoterapia", if: 2.6,
    link: "https://pubmed.ncbi.nlm.nih.gov/40675268/" },
  { yr: 2024, title: "Plant defence mechanism in honeydew-mediated plant–Hemiptera–ant interactions and ecosystem sustainability: a review",
    authors: "Banerjee, R.P., Barik, S.K., Borges, R.M., Agrawal, M.",
    journal: "Environmental Sustainability 7:427–437", if: 2.8,
    link: "https://link.springer.com/article/10.1007/s42398-024-00326-8" },
  { yr: 2024, title: "Forest carbon stock-based bioeconomy: mixed models improve accuracy of tree biomass estimates",
    authors: "Adhikari, D., Singh, P.P., Tiwary, R., Barik, S.K.",
    journal: "Biomass and Bioenergy 183:107142", if: 5.8,
    link: "https://www.sciencedirect.com/journal/biomass-and-bioenergy/vol/183" },
  { yr: 2024, title: "Evaluating bioeconomic potential of Phyllostachys mannii Gamble and Chimonocalamus griffithianus from north-eastern India",
    authors: "Kharlyngdoh, E., Barik, S.K.",
    journal: "Biomass and Bioenergy 182:107076", if: 5.8,
    link: "https://www.sciencedirect.com/journal/biomass-and-bioenergy/vol/182" },
  { yr: 2023, title: "Widespread Support for a Global Species List with a Formal Governance System",
    authors: "Lien, A., Bánki, O., Barik, S.K., et al.",
    journal: "Proceedings of the National Academy of Sciences 120(45)", if: 11.1,
    link: "https://www.pnas.org/doi/10.1073/pnas.2306899120" },
  { yr: 2023, title: "Forestry in the face of global change: results of a global survey of professionals",
    authors: "Himes, A., Bauhus, J., Adhikari, S., Barik, S.K., et al.",
    journal: "Current Forestry Reports 9(6):473–489", if: 8.6,
    link: "https://link.springer.com/article/10.1007/s40725-023-00205-1" }
];

/* ----- Fellowships ----- */
export const FELLOWSHIPS: Fellowship[] = [
  { yr: "2025", name: "FASc",  full: "Indian Academy of Sciences" },
  { yr: "2024", name: "FNA",   full: "Indian National Science Academy" },
  { yr: "2020", name: "FNAAS", full: "National Academy of Agricultural Sciences" },
  { yr: "2020", name: "FLS",   full: "The Linnean Society of London" },
  { yr: "2018", name: "FNASc", full: "National Academy of Sciences, India" },
  { yr: "2012", name: "ISEB",  full: "Indian Society of Environmental Botanists" },
  { yr: "2003", name: "LEAD",  full: "Leadership for Environment & Development" }
];

/* ----- Awards ----- */
export const AWARDS: Award[] = [
  { yr: "2024", name: "SN Patnaik Memorial Lecture Award" },
  { yr: "2020", name: "Samanta Chandra Sekhar Award",     org: "Govt of Odisha" },
  { yr: "2020", name: "Prof. R.N. Tandon Memorial Award",  org: "NASI" },
  { yr: "2019", name: "Prof. Birbal Sahni Medal",          org: "Indian Botanical Society" },
  { yr: "2019", name: "Biodiversity Lecture Award" },
  { yr: "2016", name: "Dr. Mopuri Brahmam Memorial Award", org: "for biodiversity conservation" },
  { yr: "2009", name: "Dr. Brandis Award",                 org: "The Indian Forester" }
];

/* ----- Service & advisory roles ----- */
export const SERVICE: string[] = [
  "Vice-President, National Academy of Sciences, India (NASI)",
  "Board Member, Science and Engineering Research Board (SERB), DST, GoI",
  "President, International Society for Environmental Botanists",
  "Member, Governing Body — G.B. Pant National Institute of Himalayan Environment",
  "Member, Governing Body — National Institute of Plant Genome Research",
  "Theme Director, CSIR Agriculture-Nutrition-Biotechnology (2019–22)"
];

/* ----- Videos ----- */
export const VIDEOS: Video[] = [
  { id: "BIhugPrmM-4", title: "Ecosystem & Biodiversity — India's real wealth", source: "RSTV Eureka", year: 2021 },
  { id: "0rrk341nFLM", title: "Address at the Rose & Gladiolus Flower Show",      source: "CSIR-NBRI Lucknow", year: 2021 },
  { id: "EDXI3E2Lqxk", title: "Inaugural Ceremony of ICPEP-7",                    source: "CSIR-NBRI · 30 Nov 2025", year: 2025 },
  { id: "hG0taakGjoA", title: "Biodiversity Conclave",                            source: "Ten News Live", year: 2022 }
];

/* ----- Appointments ----- */
export const EXPERIENCE: Appointment[] = [
  { yr: "2025—",     role: "Dean, School of Life Sciences", org: "North-Eastern Hill University, Shillong" },
  { yr: "2025",      role: "President",                      org: "Indian Botanical Society" },
  { yr: "2020–2022", role: "Director (concurrent)",          org: "CSIR-Indian Institute of Toxicology Research, Lucknow" },
  { yr: "2016–2022", role: "Director",                       org: "CSIR-National Botanical Research Institute, Lucknow" },
  { yr: "2014–2016", role: "Head, Department of Botany",     org: "North-Eastern Hill University, Shillong" },
  { yr: "2006–2016", role: "Professor of Botany",            org: "North-Eastern Hill University, Shillong" },
  { yr: "1997–2006", role: "Lecturer, Department of Botany", org: "North-Eastern Hill University, Shillong" },
  { yr: "1995–1997", role: "Scientist",                      org: "State Forest Research Institute, Arunachal Pradesh" }
];

/* ----- Scholar metrics (update from scholar.google.co.in/citations?user=4ilAyWsAAAAJ) ----- */
export const SCHOLAR_METRICS = {
  hIndex: 36,
  i10Index: 115,
};

export const NAV = [
  { id: "index",        label: "Index" },
  { id: "publications", label: "Publications" },
  { id: "honours",      label: "Honours" },
  { id: "media",        label: "Media" },
  { id: "connect",      label: "Connect" }
] as const;
