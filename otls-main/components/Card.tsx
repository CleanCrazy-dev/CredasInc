import React from "react";

interface CardProp {
  body: React.ReactNode;
}
const Card = (props: CardProp) => {
  const { body } = props;
  return (
    <div className="custom-card" data-testid="card">
      <div className="card-body">{body}</div>
    </div>
  );
};

export default Card;
