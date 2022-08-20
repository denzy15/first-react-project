import preloader from "../../../assets/preloader.svg"

const Preloader = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img src={preloader} alt="loading" />
    </div>
  );
};

export default Preloader