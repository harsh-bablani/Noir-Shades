
const trending = [
  {
    name: "ROUND",
    image: "./public//images/ROUND.svg",
  
  },
  {
    name: "CAT-EYE",
    image: "./public//images/CAT-EYE.svg",
  
  },
  {
    name: "WAYFARER",
    image: "./public//images/WAYFARER.svg",
   
  },
  {
    name: "AVIATOR",
    image: "./public//images/AVIATOR.svg",
  
  },
  {
    name: "SUNGLASSES",
    image: "./public//images/SUNGLASSES.svg",

  }
];

const TrendingEyeWear = () => (
  <section style={{ background: "#fff", padding: "3rem 0" }}>
    <div style={{ textAlign: "center", marginBottom: "2.5rem", maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}>
      <h2 style={{ fontSize: "2.7rem", fontWeight: "bold", margin: 0 }}>Trending Eyewear</h2>
      <div style={{ fontSize: "1.2rem", color: "#666", marginTop: "0.7rem" }}>Loved by the masses</div>
    </div>
    <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap", maxWidth: "1400px", margin: "0 auto" }}>
      {trending.map((item) => (
        <div key={item.name} style={{ textAlign: "center" }}>
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.2rem auto",
              overflow: "hidden"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "80%", height: "80%", objectFit: "contain" }}
            />
          </div>
          <div style={{ fontWeight: "bold", letterSpacing: "1px" }}>{item.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TrendingEyeWear;