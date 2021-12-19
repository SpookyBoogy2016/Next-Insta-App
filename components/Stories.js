import faker from "faker";
import Story from "./Story";
import React, { useEffect, useState } from "react";

function Stories() {
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestion(suggestions);
  }, []);

  return (
    <div>
      <div
        className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
      border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
      >
        {suggestions.map((profile) => (
          <Story key={profile.id} username={profile.username} />
        ))}
      </div>
    </div>
  );
}

export default Stories;
