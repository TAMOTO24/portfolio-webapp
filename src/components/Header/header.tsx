import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const pages: { to: string; label: string }[] = [
    { to: "/", label: "Home" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/get-in-touch", label: "Get in Touch" },
  ];

  return (
    <header
      style={{
        backgroundColor: "var(--block)",
        marginInline: "10%",
        borderRadius: "0 0 1rem 1rem",
        fontFamily: "var(--font-plex-mono)",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "5rem",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {pages.map((page) => (
          <Link
            key={page.label}
            style={{ fontSize: "1.25rem" }}
            className={pathname === page.to ? "selected" : undefined}
            href={page.to}
          >
            {page.label}
          </Link>
        ))}
        <div>
          <img src="/icons/github.png" alt="GitHub" width={50} height={50} />
        </div>
      </nav>
    </header>
  );
}
