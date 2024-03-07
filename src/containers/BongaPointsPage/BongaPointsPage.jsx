import React from "react";
import BongaPointRow from "./BongaPointRow";

function BongaPointsPage() {
  return (
    <div className="flex flex-col justify-stretch items-start mt-[60px] px-10">
      <BongaPointRow index={1} isActive={true} isComplete={false} />
      <BongaPointRow index={2} isActive={false} isComplete={false} />
      <BongaPointRow index={3} isActive={false} isComplete={false} />
      <BongaPointRow index={4} isActive={false} isComplete={false} />
      <BongaPointRow
        index={5}
        isActive={false}
        isComplete={false}
        isLast={true}
      />
    </div>
  );
}

export default BongaPointsPage;