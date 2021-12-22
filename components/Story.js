import SVG from "react-inlinesvg";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/big-smile";

function Story({ username }) {
  const avatars = createAvatar(style);

  return (
    <div>
      <SVG
        src={avatars}
        className="w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 
        object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />

      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  );
}

export default Story;
