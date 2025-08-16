import partnerLogo from "../assets/partnerLogo.png";

export default function Footer() {
  return (
    <section className="flex justify-center items-center">
      <div className="px-2 w-4/5 mx-auto flex">
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-1 text-left">
            Become a Partner
          </h1>
          <p>
            Join our platform and list your shop <br /> to rent out bikes
          </p>
          <div style={{ width: "150px", display: "inline-block" }}>
            <button
              style={{
                backgroundColor: "#209d67",
                color: "white",
                padding: "6px",
                margin: "13px 0",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                width: "100%",
              }}
            >
              List your shop
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src={partnerLogo}
            alt="partner-logo"
            className="max-h-[100%] max-w-[60%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
