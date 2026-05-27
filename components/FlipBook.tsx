const Flipbook = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Digital Brochure</h1>
      <div
        className="flipbook-container"
        style={{
          position: "relative",
          paddingTop: "56.25%", // 16:9 Aspect Ratio
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://online.fliphtml5.com/KimNam/SENG-KIMNAM-Full-Stack/#p=1" // Replace with your URL
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          seamless={true}
          allowTransparency={true}
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

export default Flipbook;
