import React, { useState, useCallback, useEffect } from "react";
import { Card } from "./card";
import update from "immutability-helper";

const style = {
  display: "flex",
  flexWrap: 'wrap'
};
const Container = ({ data, unCheckUser, updateSelectUsers, userNameKey }) => {
  const [cards, setCards] = useState([]);
  const [returncards, setreturncards] = useState(false);
  useEffect(() => {
    setCards(data)
  }, [data])
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      );
      setreturncards(true)
    },
    [cards]
  );
  if (returncards) {
    updateSelectUsers(cards)
    setreturncards(false)
  }
  const renderCard = (card, index) => {
    return (
      <Card
        updateSelectUsers={updateSelectUsers}
        unCheckUser={unCheckUser}
        card={card}
        key={card.userId}
        index={index}
        id={card.userId}
        text={card[userNameKey]}
        moveCard={moveCard}
      />
    );
  };
  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};

export default Container