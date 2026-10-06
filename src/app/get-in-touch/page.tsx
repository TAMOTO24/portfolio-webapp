"use client";
import sendEMail from "../action/mailer";

export default function GetInTouch() {
  const socials: { icon: string; name: string; link: string }[] = [
    { icon: "/icons/facebook.png", name: "Facebook", link: "#" },
    {
      icon: "/icons/instagram.png",
      name: "Instagram",
      link: "https://www.instagram.com/neveerness.to.evernesss/",
    },
    {
      icon: "/icons/linkedin.png",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/levkovich-olexandr-253688366/?isSelfProfile=true",
    },
    {
      icon: "/icons/telegram.png",
      name: "Telegram",
      link: "https://t.me/TAM0T0",
    },
    { icon: "/icons/twitter.png", name: "Twitter", link: "#" },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await sendEMail(formData);
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <main
      style={{
        minHeight: "80vh",
        marginInline: "10%",
        marginTop: "5%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginBottom: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 0.95,
            margin: 0,
            fontWeight: 500,
            letterSpacing: "-0.06em",
          }}
        >
          Get in
          <span style={{ color: "#666" }}> Touch.</span>
        </h1>
        <p
          style={{
            color: "#888",
            fontSize: "0.9rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
            padding: "2.5rem",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 80px rgba(0,0,0,0.25)",
          }}
        >
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.6rem",
                color: "#aaa",
                fontSize: "0.9rem",
              }}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 1.1rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              style={{
                display: "block",
                marginBottom: "0.6rem",
                color: "#aaa",
                fontSize: "0.9rem",
              }}
            >
              Mobile
            </label>

            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="+380 ..."
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 1.1rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "0.6rem",
                color: "#aaa",
                fontSize: "0.9rem",
              }}
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Tell me about your project..."
              rows={6}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "1rem 1.1rem",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                outline: "none",
                fontSize: "1rem",
                resize: "vertical",
                fontFamily: "inherit",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              border: "none",
              background: "white",
              color: "black",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
          >
            Send Message →
          </button>
        </form>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            paddingTop: "1rem",
          }}
        >
          <div>
            <p
              style={{
                color: "#888",
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "0.8rem",
              }}
            >
              Let's connect
            </p>

            <p
              style={{
                color: "#aaa",
                lineHeight: 1.7,
                fontSize: "1rem",
                margin: 0,
              }}
            >
              Have a project in mind?
              <br />
              Feel free to reach out.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.link}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.9rem 1rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                  color: "white",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  width={28}
                  height={28}
                  style={{
                    objectFit: "contain",
                  }}
                />

                <span>{item.name}</span>

                <span
                  style={{
                    marginLeft: "auto",
                    color: "#666",
                    fontSize: "1.2rem",
                  }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
