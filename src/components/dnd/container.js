import React, { useState, useCallback, useEffect } from "react";
import { Card } from "./card";
import update from "immutability-helper";

const style = {
  display: "flex",
  flexWrap: 'wrap'
};
const Container = ({ data, unCheckUser, updateSelectUsers }) => {
  const [cards, setCards] = useState([]);
  const [returncards, setreturncards] = useState(false);
  useEffect(() => {
    setCards(data.map(item => ({
      id: item.userId,
      text: item.username,
      ...item
    })))
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
    updateSelectUsers(cards.map((v) => ({
      userId: v.id,
      username: v.text,
      ...v
    })))
    setreturncards(false)
  }
  const renderCard = (card, index) => {
    return (
      <Card
        updateSelectUsers={updateSelectUsers}
        unCheckUser={unCheckUser}
        card={card}
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
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