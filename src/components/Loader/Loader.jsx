import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return <RotatingLines visible={true} height="96" width="96" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" />;
}
