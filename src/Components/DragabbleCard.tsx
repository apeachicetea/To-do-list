import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

interface ICardProps {
  isDragging: boolean;
}

const Card = styled.div<ICardProps>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "5px 5px 5px rgba(0,0,0,0.5)" : "none"};
`;

function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);