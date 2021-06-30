import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Tag } from 'antd'

const ItemTypes = 'card'
const style = {
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  // backgroundColor: "white",
  cursor: "move",
  color: '#375EEE',
  backgroundColor: 'rgba(55, 94, 238, 0.09)',
  borderRadius: '4px',
  border: '1px solid #375EEE',
  marginLeft: '10px',
  marginTop: '8px'
};
const Card = ({ id, text, index, moveCard, unCheckUser, card }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current && ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <Tag
      onClick={() => { unCheckUser({ userId: card.id, username: card.text, ...card }) }}
      ref={ref}
      style={{ ...style, opacity }}
      data-handler-id={handlerId}
    // longpress={() => { console.log('longe') }}
    >
      {text}
    </Tag>
  );
};
export {
  Card
}