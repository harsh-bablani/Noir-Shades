import { useRef } from "react";
import Slider from "react-slick";

const newArrivals = [
  {
    id: 1,
    name: "Eyeful Craft",
    price: 1299,
    oldPrice: 4000,
    discount: "-50%",
		image: ".//images/Wonder 24.svg",
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Kids",
    price: 2224,
		image: ".//images/Smart Kids.svg",
    isNew: false,
  },
  {
    id: 3,
    name: "Visate",
    price: 1679,
    oldPrice: 3179,
    discount: "-50%",
		image: ".//images/Visat.svg",
    isNew: false,
  },
  {
    id: 4,
    name: "Tom H",
    price: 6279,
		image: ".//images/Tom Harry.svg",
    isNew: false,
  },
];

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const NewArrival = () => {
  const sliderRef = useRef<Slider>(null);

  return (
    <section style={{ background: "#f7f9fc", padding: "3rem 0", marginTop: "2rem" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>New Arrival</h2>
        <p style={{ marginBottom: "2.5rem", color: "#666" }}>All new design for the new season</p>
        <div>
          <button
            style={{
              background: "#fff",
              border: "none",
              boxShadow: "0 2px 8px #eee",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              marginRight: "16px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            &#8592;
          </button>
          <button
            style={{
              background: "#fff",
              border: "none",
              boxShadow: "0 2px 8px #eee",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => sliderRef.current?.slickNext()}
          >
            &#8594;
          </button>
        </div>
        <Slider ref={sliderRef} {...sliderSettings}>
          {newArrivals.map((item) => (
            <div key={item.id} style={{ padding: "0 8px" }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 2px 8px #eee",
                  padding: "0.5rem 0.5rem 1rem 0.5rem",
                  minHeight: "260px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* New badge */}
                {item.isNew && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      background: 'orange',
                      color: '#fff',
                      padding: '2px 12px',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      zIndex: 2,
                    }}
                  >
                    New
                  </span>
                )}
                {/* Wishlist Icon */}
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    background: "#fff",
                    borderRadius: "50%",
                    boxShadow: "0 1px 4px #eee",
                    width: "34px",
                    height: "34px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    zIndex: 2,
                  }}
                >
                  <svg width="18" height="18" fill="#888">
                    <path d="M9 16s-7-4.35-7-8.5A4.5 4.5 0 019 3a4.5 4.5 0 017 4.5C16 11.65 9 16 9 16z" />
                  </svg>
                </span>
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "1.2rem",
                    marginTop: "2.2rem",
                    objectFit: "cover",
                    aspectRatio: "1.3/1",
                  }}
                />
                {/* Add to Cart */}
                <button
                  style={{
                    background: "#0066ff",
                    color: "#fff",
                    width: "95%",
                    margin: "0.5rem 0 0.5rem 0",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.7rem",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                >
                  Add to cart
                </button>
              </div>
              {/* Product Name & Price OUTSIDE the card */}
              <div style={{ marginTop: "10px", marginLeft: "4px" }}>
                <div style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "2px" }}>{item.name}</div>
                <div>
                  <b>₹{item.price}</b>
                  {item.oldPrice && (
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginLeft: "6px",
                        color: "#888",
                        fontWeight: "normal",
                        fontSize: "0.95em",
                      }}
                    >
                      ₹{item.oldPrice}
                    </span>
                  )}
                  {item.discount && (
                    <span
                      style={{
                        color: "green",
                        marginLeft: "6px",
                        fontWeight: 500,
                        background: "#eafaf1",
                        borderRadius: "8px",
                        padding: "1px 6px",
                        fontSize: "0.9em",
                      }}
                    >
                      {item.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewArrival;