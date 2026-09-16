import Link from "next/link";

export default function Header() {
  const pages: { to: string; label: string }[] = [
    { to: "/", label: "Home" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/recent-work", label: "Recent Work" },
    { to: "/get-in-touch", label: "Get in Touch" },
  ];

  return (
    <header
      style={{
        backgroundColor: "var(--block)",
        marginInline: "10%",
        padding: "1rem",
        borderRadius: "0 0 1rem 1rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        {pages.map((page) => (
          <Link key={page.label} href={page.to}>
            {page.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
