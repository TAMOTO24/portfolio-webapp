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

  const title: { icon: string; label: string }[] = [
    { icon: "/icons/pin.png", label: "Based In Ukraine" },
    { icon: "/icons/code.png", label: "Available for Remote Work" },
    { icon: "/icons/brain.png", label: "Open to New Opportunities" },
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
    <div style={{ marginInline: "10%", marginTop: "5%" }}>
      <div
        style={{
          gap: "5rem",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
        className="centerBlock"
      >
        <div>
          <p
            style={{ fontFamily: "var(--font-plex-mono)", color: "whitesmoke" }}
          >
            AI CREATOR & FULL-STACK DEVELOPER
          </p>
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
              fontSize: "1.25rem",
              marginBottom: "2rem",
              fontFamily: "var(--font-plex-mono)",
            }}
          >
            I create websites, AI-powered products, animations and digital
            experiences. Passionate about new technologies and always aeger to
            learn and improve my skills.
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
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <img
            src="/photo/facePic.jpg"
            width={450}
            height={450}
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 100px rgba(140, 60, 255, 0.35)",
            }}
            alt="My Photo"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {title.map((item) => (
              <div
                key={item.label}
                style={{
                  fontFamily: "var(--font-plex-mono)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                  />
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: "1.25rem",
            marginTop: "10rem",
            color: "whitesmoke",
            fontFamily: "var(--font-plex-mono)",
            marginBottom: "1rem",
          }}
        >
          Tech stack
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
