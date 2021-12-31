import faker from "faker";
import Story from "./Story";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ProfileImage from "./ProfileImage";

function Stories() {
  const [suggestions, setSuggestion] = useState([]);
  const { data: session } = useSession();

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
        {session && <ProfileImage />}

        {suggestions.map((profile) => (
          <div key={profile.id}>
            <Story username={profile.username} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
