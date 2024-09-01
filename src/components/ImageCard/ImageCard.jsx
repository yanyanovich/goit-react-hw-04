import css from "./ImageCard.module.css";

export default function ImageCard({ image, openModal }) {
  return (
    <div className={css.imgContainer}>
      <img
        onClick={() => {
          openModal(image.urls.regular, image.alt_description);
        }}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
