import { useEffect } from "react";

const categories = [
  {
    label: "Men glasses",
    image: "//images/MEN.svg",
    bg: "#eaf0fb",
    link: "#"
  },
  {
    label: "Women glasses",
    image: "//images/WOMEN.svg",
    bg: "#f6fae6",
    link: "#"
  },
  {
    label: "Kids glasses",
    image: "//images/KIDS.svg",
    bg: "#f8ede4",
    link: "#"
  }
];

const ExploreCategories = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media (max-width: 768px) {
        .grid-container {
          display: flex !important;
          flex-direction: column !important;
          padding: 1rem !important;
          gap: 1rem !important;
        }
        .category-box {
          min-height: auto !important;
          padding: 1.5rem 1rem !important;
        }
        .category-box img {
          width: 45% !important;
        }
        .category-box h3 {
          font-size: 1.5rem !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section style={{ background: "#fff", padding: "2.5rem 1rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "2.7rem", fontWeight: "bold", margin: 0 }}>Explore Categories</h2>
        <div style={{ fontSize: "1.2rem", color: "#444", marginTop: "0.7rem" }}>
          Providing glasses for everyone
        </div>
      </div>

      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {categories.map((category, index) => (
          <div
            key={category.label}
            className="category-box"
            style={{
              background: category.bg,
              borderRadius: "20px",
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: index === 0 ? "420px" : "200px",
              position: "relative",
              gridRow: index === 0 ? "1 / span 2" : undefined,
              gridColumn: index === 0 ? "1 / 2" : undefined
            }}
          >
            <h3 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.2rem" }}>
              {category.label}
            </h3>
            <a
              href={category.link}
              style={{
                color: "#1976d2",
                fontWeight: 500,
                textDecoration: "none",
                fontSize: "1.1rem",
                marginBottom: "2rem",
                display: "inline-block"
              }}
            >
              Shop Now <span style={{ fontSize: "1.2em" }}>→</span>
            </a>
            <img
              src={category.image}
              alt={category.label}
              style={{
                position: "absolute",
                bottom: "1.5rem",
                right: "1.5rem",
                width: index === 0 ? "60%" : "48%",
                maxWidth: index === 0 ? "260px" : "180px",
                borderRadius: "12px",
                objectFit: "cover"
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategories;
