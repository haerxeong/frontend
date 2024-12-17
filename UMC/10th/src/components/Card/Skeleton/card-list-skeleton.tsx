import React from "react";
import CardSkeleton from "./card-skeleton.tsx";

interface CardListSkeletonProps {
  number: number;
}

const CardListSkeleton: React.FC<CardListSkeletonProps> = ({ number }) => {
  return (
    <>
      {new Array(number).fill(0).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </>
  );
};

export default CardListSkeleton;
