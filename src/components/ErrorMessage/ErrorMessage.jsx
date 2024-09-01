import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ children, textAlign = "", marginBottom = "0" }) {
  return <p className={[css["text"], css[textAlign], css[`marginBottom${marginBottom}`]].join(" ")}>{children}</p>;
}
