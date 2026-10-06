"use client";
import { useState } from "react";

export default function CaseStudies() {
  const projects: {
    title: string;
    description: string;
    image: string;
    link: string;
    tech: string[];
    number: string;
  }[] = [
    {
      number: "01",
      title: "BEASTARS Novel",
      description:
        "A Python-based game project inspired by the Beastars universe. The project focuses on interactive storytelling, character relationships and a dynamic world built around anthropomorphic animals.",
      image: "/images/beastars.png",
      link: "https://github.com/TAMOTO24/beastars-novel",
      tech: ["Python", "Pygame", "OOP", "Game Development", "Storytelling"],
    },
    {
      number: "02",
      title: "SportLife",
      description:
        "This project was created to support those who can't always make it to the gym, offering a flexible and motivating distance training experience that fits seamlessly into any lifestyle.",
      image: "/images/SportLife.png",
      link: "https://github.com/TAMOTO24/SportLife",
      tech: ["React", "JavaScript", "CSS", "Node.js", "Socket.IO", "MongoDB", "Express.js", "WebSockets", "Antd Design"],
    },
  ];

  const videos = [
    {
      title: "Project 01",
      src: "/videos/5.mp4",
    },
    {
      title: "Project 02",
      src: "/videos/6.mp4",
    },
    {
      title: "Project 03",
      src: "/videos/7.mp4",
    },
    {
      title: "Project 03",
      src: "/videos/8.mp4",
    },
    {
      title: "Project 04",
      src: "/videos/9.mp4",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "6rem 2rem",
        color: "whitesmoke",
      }}
    >
      <section style={{ marginBottom: "6rem" }}>
        {/* <div
          style={{
            fontFamily: "var(--font-plex-mono)",
            fontSize: "0.8rem",
            color: "#777",
            marginBottom: "1rem",
          }}
        >
          /case-studies
        </div> */}

        <h1
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 0.95,
            margin: 0,
            fontWeight: 500,
            letterSpacing: "-0.06em",
          }}
        >
          Case
          <span style={{ color: "#666" }}> Studies.</span>
        </h1>

        <p
          style={{
            maxWidth: "600px",
            marginTop: "2rem",
            fontFamily: "var(--font-plex-mono)",
            color: "#888",
            lineHeight: 1.7,
            fontSize: "0.9rem",
          }}
        >
          Selected projects, experiments and things I&apos;ve built while
          working with modern web technologies.
        </p>
      </section>

      <div>
        <p
          style={{
            fontFamily: "var(--font-plex-mono)",
            color: "whitesmoke",
            paddingBlock: "1rem",
            fontSize: "2rem",
          }}
        >
          AI VIDEO PROJECTS
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {videos.map((video) => (
            <div
              key={video.src}
              onClick={() => setSelectedVideo(video.src)}
              style={{
                cursor: "pointer",
                border: "1px solid #222",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#111",
              }}
            >
              <video
                src={video.src}
                muted
                playsInline
                style={{
                  display: "block",
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "1rem",
                  fontFamily: "var(--font-plex-mono)",
                  color: "whitesmoke",
                }}
              >
                {video.title}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedVideo && (
          <div
            onClick={() => setSelectedVideo(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(100%, 1000px)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  position: "absolute",
                  right: "-10px",
                  top: "-45px",
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
                style={{
                  display: "block",
                  width: "100%",
                  maxHeight: "80vh",
                  borderRadius: "12px",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Projects */}
      <p
        style={{
          fontFamily: "var(--font-plex-mono)",
          color: "whitesmoke",
          paddingBlock: "1rem",
          paddingTop: "10rem",
          fontSize: "2rem",
        }}
      >
        Programming Projects
      </p>
      <section>
        {projects.map((project, index) => (
          <article
            key={project.title}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(250px, 0.8fr) minmax(400px, 1.2fr)",
              gap: "4rem",
              padding: "3rem 0",
              borderTop: "1px solid #222",
              alignItems: "center",
            }}
          >
            {/* Info */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-plex-mono)",
                  fontSize: "0.75rem",
                  color: "#666",
                }}
              >
                <span>{project.number}</span>
                <span>—</span>
                <span>PROJECT</span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  margin: "0 0 1.5rem",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: "#888",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                  maxWidth: "500px",
                  marginBottom: "2rem",
                }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      border: "1px solid #292929",
                      borderRadius: "999px",
                      padding: "0.4rem 0.8rem",
                      fontFamily: "var(--font-plex-mono)",
                      fontSize: "0.7rem",
                      color: "#999",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                style={{
                  background: "transparent",
                  color: "whitesmoke",
                  border: "1px solid #444",
                  padding: "0.8rem 1.2rem",
                  borderRadius: "0.4rem",
                  fontFamily: "var(--font-plex-mono)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                href={project.link}
              >
                View details ↗
              </a>
            </div>

            {/* Image */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.75rem",
                border: "1px solid #222",
                background: "#111",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  zIndex: 1,
                  fontFamily: "var(--font-plex-mono)",
                  fontSize: "0.65rem",
                  color: "#777",
                }}
              >
                0{index + 1}
              </div>

              <img
                src={project.image}
                alt={project.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  opacity: 0.85,
                }}
              />
            </div>
          </article>
        ))}
      </section>

      {/* Bottom */}
      <div
        style={{
          borderTop: "1px solid #222",
          marginTop: "2rem",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-plex-mono)",
          fontSize: "0.7rem",
          color: "#555",
        }}
      >
        <span>SELECTED WORK</span>
        <span>{projects.length.toString().padStart(2, "0")} PROJECTS</span>
      </div>
    </main>
  );
}
