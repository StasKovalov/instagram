import Card from "./Card";
import P from "prop-types";

Card.propTypes = {
  title: P.string.isRequired,
  image: P.string.isRequired,
  description: P.string.isRequired
};

export default Card;
export { CardSkeleton } from "./CardSkeleton";
