export default function CaseStudies() {
  //Builded projects and case studies of my work

  const projects: { title: string; description: string; image: string }[] = [
    {
      title: "Python game project",
      description: `BEASTARS-Novel is set in a dynamic and complex world
       of anthropomorphic animals, inspired by the universe of the Beastars series.
        This novella explores deep social, emotional, and psychological themes,
         focusing on the intricate relationships between different species within
          a society marked by tension, prejudice, and the search for personal identity.`,
      image: "/images/beastars.png",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        marginInline: "10%",
        marginTop: "5%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Case Studies</h1>
      <div>
        <p style={{ fontFamily: "var(--font-plex-mono)", color: "whitesmoke" }}>
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div style={{ fontSize: "1.25rem", marginBlock: "3rem", alignSelf: "flex-start" }}>Full-stack developer/Python/C++</div>
      <div>
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              display: "flex",
              alignItems: "center",
              color: "whitesmoke",
              gap: "2rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button>View Details</button>
            </div>

            <div>
              <img
                src={project.image}
                width="auto"
                height="400"
                alt={project.title}
                style={{
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
