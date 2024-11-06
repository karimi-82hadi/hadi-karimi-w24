import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <>
      <ThreeDots
        width="32px"
        height="24px"
        color="#a1a3a8"
        wrapperStyle={{ justifyContent: "center" }}
      />
    </>
  );
}

export default Loader;
