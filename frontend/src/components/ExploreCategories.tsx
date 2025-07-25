
const categories = [
  {
    label: "Men glasses",
		image: ".//images/MEN.svg",
    bg: "#eaf0fb",
    link: "#"
  },
  {
    label: "Women glasses",
		image: ".//images/WOMEN.svg",
    bg: "#f6fae6",
    link: "#"
  },
  {
    label: "Kids glasses",
		image: ".//images/KIDS.svg",
    bg: "#f8ede4",
    link: "#"
  }
];

const ExploreCategories = () => (
  <section style={{ background: "#fff", padding: "2.5rem 0" }}>
    <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
      <h2 style={{ fontSize: "2.7rem", fontWeight: "bold", margin: 0 }}>Explore Categories</h2>
      <div style={{ fontSize: "1.2rem", color: "#444", marginTop: "0.7rem" }}>
        Providing glasses for everyone
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "2rem",
        maxWidth: "1100px",
        margin: "0 auto"
      }}
    >
      {/* Men */}
      <div
        style={{
          gridRow: "1 / span 2",
          gridColumn: "1 / 2",
          background: categories[0].bg,
          borderRadius: "20px",
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "420px",
          position: "relative"
        }}
      >
        <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.2rem" }}>
          {categories[0].label}
        </div>
        <a href={categories[0].link} style={{ color: "#1976d2", fontWeight: 500, textDecoration: "none", fontSize: "1.1rem", marginBottom: "2rem", display: "inline-block" }}>
          Shop Now <span style={{ fontSize: "1.2em" }}>→</span>
        </a>
        <img
          src={categories[0].image}
          alt={categories[0].label}
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            width: "60%",
            maxWidth: "260px",
            borderRadius: "12px",
            objectFit: "cover"
          }}
        />
      </div>
      {/* Women */}
      <div
        style={{
          background: categories[1].bg,
          borderRadius: "20px",
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "200px",
          position: "relative"
        }}
      >
        <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.2rem" }}>
          {categories[1].label}
        </div>
        <a href={categories[1].link} style={{ color: "#1976d2", fontWeight: 500, textDecoration: "none", fontSize: "1.1rem", marginBottom: "2rem", display: "inline-block" }}>
          Shop Now <span style={{ fontSize: "1.2em" }}>→</span>
        </a>
        <img
          src={categories[1].image}
          alt={categories[1].label}
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            width: "48%",
            maxWidth: "180px",
            borderRadius: "12px",
            objectFit: "cover"
          }}
        />
      </div>
      {/* Kids */}
      <div
        style={{
          background: categories[2].bg,
          borderRadius: "20px",
          padding: "2.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "200px",
          position: "relative"
        }}
      >
        <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.2rem" }}>
          {categories[2].label}
        </div>
        <a href={categories[2].link} style={{ color: "#1976d2", fontWeight: 500, textDecoration: "none", fontSize: "1.1rem", marginBottom: "2rem", display: "inline-block" }}>
          Shop Now <span style={{ fontSize: "1.2em" }}>→</span>
        </a>
        <img
          src={categories[2].image}
          alt={categories[2].label}
          style={{
            position: "absolute",
            bottom: "1.5rem",
            right: "1.5rem",
            width: "48%",
            maxWidth: "180px",
            borderRadius: "12px",
            objectFit: "cover"
          }}
        />
      </div>
    </div>
  </section>
);

export default ExploreCategories;