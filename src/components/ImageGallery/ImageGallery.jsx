import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, openModal }) {
  return (
    <>
      <ul className={css.gList}>
        {images.map((image) => {
          return (
            <li key={image.id} className={css.gItem}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
