import React, { useState } from "react";
import BongaPointRow from "./BongaPointRow";
import { Button } from "../../components/Button/Button";

const _bongaPoints = [
  {
    id: 1,
    title: "Redeem 100 Bonga Points.",
    description: "Redeem 100 bonga points for airtime or minutes.",
  },
  {
    id: 2,
    title: "Redeem 100 Bonga Points.",
    description: "Redeem 100 bonga points for airtime or minutes.",
  },
  {
    id: 3,
    title: "Redeem 100 Bonga Points.",
    description: "Redeem 100 bonga points for airtime or minutes.",
  },
  {
    id: 4,
    title: "Redeem 100 Bonga Points.",
    description: "Redeem 100 bonga points for airtime or minutes.",
  },
  {
    id: 5,
    title: "Redeem 100 Bonga Points.",
    description: "Redeem 100 bonga points for airtime or minutes.",
  },
  {
    id: 6,
    title: "Redeem 100 Bonga Points.",
    description: "Redeem 100 bonga points for airtime or minutes.",
  },
];
function BongaPointsPage() {
  const [bongaPoints, setBongaPoints] = useState(_bongaPoints);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (currentIndex <= bongaPoints.length) setCurrentIndex(currentIndex + 1);
  };
  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleFetchBongaPoints = async () => {
    try {
      const response = await fetch("https://api-endpoint.here");
      if (response.ok) {
        const json = await response.json();
        setBongaPoints(json);
      }
    } catch (e) {
      // log your error here.
    }
  };

  return (
    <div className="flex flex-col justify-stretch items-start mt-[60px] px-10">
      {bongaPoints.map((b) => (
        <BongaPointRow
          key={b.id}
          index={b.id}
          isActive={b.id === currentIndex}
          isComplete={b.id < currentIndex}
          isLast={b.id === bongaPoints.length}
        />
      ))}
      <div className="flex flex-row items-center justify-stretch gap-5 w-full">
        <Button color="black" onClick={handlePrevious}>
          Prev
        </Button>
        <Button
          color={currentIndex !== bongaPoints.length ? "lightRed" : "red"}
          className="w-full"
          disabled={currentIndex !== bongaPoints.length}
        >
          Submit
        </Button>
        <Button color="black" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default BongaPointsPage;