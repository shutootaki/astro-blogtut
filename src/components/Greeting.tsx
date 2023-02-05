import React, { useState } from "react";

export const Greeting = ({ messages }: { messages: string[] }) => {
  const ramdomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(ramdomMessage());

  return (
    <>
      <div>
        <h3>{greeting} Thank you for visiting!!</h3>
        <button onClick={() => setGreeting(ramdomMessage)}>
          Generat New Greeting
        </button>
      </div>
    </>
  );
};
