export default function Page() {
  const tags: { color: string; label: string; icon: string }[] = [
    { color: "#007ACC", label: "React", icon: "/icons/react.png" },
    { color: "#10B981", label: "Next.js", icon: "/icons/nextjs.png" },
    {
      color: "#F59E0B",
      label: "TypeScript",
      icon: "/icons/typescript.png",
    },
    {
      color: "#8B5CF6",
      label: "Tailwind CSS",
      icon: "/icons/tailwindcss.png",
    },
    { color: "#EF4444", label: "Node.js", icon: "/icons/nodejs.png" },
    { color: "#F97316", label: "MongoDB", icon: "/icons/mongodb.png" },
    { color: "#6366F1", label: "C++", icon: "/icons/c++.png" },
    { color: "#EC4899", label: "Python", icon: "/icons/python.png" },
  ];

  const carouselImages: string[] = [
    "/icons/react.png",
    "/icons/pygame.png",
    "/icons/redux.png",
    "/icons/klingai.png",
    "/icons/grok.png",
    "/icons/seedance.png",
    "/icons/elevenlabs.png",
  ];
  return (
    <div style={{ marginInline: "15%", marginTop: "5%" }}>
      <div
        style={{
          gap: "5rem",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        className="centerBlock"
      >
        <div>
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              color: "whitesmoke",
            }}
          >
            Levkovich Olexandr
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              fontFamily: "var(--font-plex-mono)",
            }}
          >
            Full Stack & Game Developer ⚙️ MERN (MongoDB, Express, React,
            Node.js) | C++ | Python Pygame | TypeScript 🎮Passionate about web
            apps, games and other software development. Always eager to learn
            new technologies and improve my skills.
          </p>

          <div>
            {tags.map((tag) => (
              <p
                key={tag.label}
                style={{
                  display: "inline-block",
                  backgroundColor: tag.color,
                  color: "white",
                  padding: "0.5rem",

                  margin: "0.5rem",
                  fontWeight: "bolder",
                  borderRadius: "0.5rem",
                }}
              >
                {tag.label}
              </p>
            ))}
          </div>
        </div>
        <img
          src="/photo/facePic.jpg"
          width={450}
          height={450}
          style={{ borderRadius: "50%" }}
          alt="My Photo"
        />{" "}
      </div>
      <div>
        <div
          style={{
            fontSize: "1.25rem",
            color: "whitesmoke",
            fontFamily: "var(--font-plex-mono)",
            marginBottom: "1rem",
          }}
        >
          Worked with
        </div>
        <div className="carousel">
          <div className="carousel-track">
            {[...carouselImages, ...carouselImages, ...carouselImages].map(
              (image, index) => (
                <img
                  key={index}
                  src={image}
                  width="auto"
                  height={100}
                  className="carousel-image"
                  alt={`Worked with ${image}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
