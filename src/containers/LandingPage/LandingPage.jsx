import React from "react";
import { Heading } from "../../components/Heading/index";
import { Text } from "../../components/Text/index";
import BackgroundBeams from "../../components/acertainity/BackgroundBeams";

function LandingPage() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <Heading
          as="h1"
          className="z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center"
        >
          This is a WIP for Finrace
        </Heading>
        <Text
          as="p"
          className="z-10 mt-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center"
        >
          Step into a world where innovation knows no boundaries, a realm where
          the extraordinary becomes routine, and the status quo is an
          ever-shifting canvas of potential.
        </Text>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default LandingPage;