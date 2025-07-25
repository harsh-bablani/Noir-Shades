const policies = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#4a6fa1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="16" width="30" height="12" rx="3" />
        <circle cx="9" cy="30" r="2" />
        <circle cx="27" cy="30" r="2" />
        <path d="M3 16V12a3 3 0 013-3h6l3 7h15" />
      </svg>
    ),
    label: "Free Shipping"
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#4a6fa1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="7" width="22" height="22" rx="5" />
        <path d="M18 12v6l4 2" />
        <path d="M25 11l3 3-3 3" />
      </svg>
    ),
    label: "Return & Replacement"
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#4a6fa1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="16" width="16" height="12" rx="2" />
        <path d="M18 16v-4a2 2 0 114 0v4" />
      </svg>
    ),
    label: "Secure Online Payment"
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#4a6fa1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 30c6-2 10-8 10-14v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a2 2 0 002 2h2" />
        <path d="M14 6a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
      </svg>
    ),
    label: "Customer Support"
  }
];

const Policies = () => (
  <section style={{
    background: "#fff",
    padding: "1.5rem 0",
    margin: "2rem 0"
  }}>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "3.5rem",
      flexWrap: "wrap"
    }}>
      {policies.map((policy) => (
        <div key={policy.label} style={{ display: "flex", alignItems: "center", gap: "0.7rem", color: "#4a6fa1", fontSize: "1.25rem" }}>
          {policy.icon}
          <span style={{ color: "#4a6fa1", fontWeight: 500 }}>{policy.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Policies;