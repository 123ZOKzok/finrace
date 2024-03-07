import React, { useState, useEffect } from "react";
import BongaPointRow from "./BongaPointRow";
import { Button } from "../../components/Button/Button";

function BongaPointsPage() {
  const [bongaPoints, setBongaPoints] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    handleFetchBongaPoints();
  }, []);

  const handleNext = () => {
    if (currentIndex < bongaPoints.length) setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
  };

  const handleFetchBongaPoints = async () => {
    try {
      const response = await fetch("http://54.163.216.81:4000/api/v1/challenges");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      setBongaPoints(json);
    } catch (error) {
      console.error("Error fetching points:", error.message);
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
          heading={b.title}
          text={b.description}
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

