import { OtlsStar, OtlsStarFill } from "../Icons";
import styles from "./ratingStars.module.scss";

export interface RatingStarsProps {
  rating: number;
  ratingScale?: number;
}

const RatingStars = ({ rating, ratingScale = 5 }: RatingStarsProps) => {
  return (
    <div className={styles.rating} data-testid="rating-star-container">
      {new Array(ratingScale)
        .fill(0)
        .map((_, index) => (index < rating ? 1 : 0))
        .map((el, index) => (
          <span key={index} data-testid="rating-stars">
            {el === 1 ? <OtlsStarFill /> : <OtlsStar />}
          </span>
        ))}
    </div>
  );
};

export default RatingStars;
