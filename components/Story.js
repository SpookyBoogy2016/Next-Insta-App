import SVG from "react-inlinesvg";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/big-smile";

function Story({ img, username }) {
  const avatars = Array(1);
  avatars.fill(createAvatar(style));

  return (
    <div>
      {/* <img src={img} /> */}
      {avatars.map((imgLink, index) => (
        <SVG
          src={imgLink}
          className="w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 
          object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          key={index}
        />
      ))}
      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  );
}

export default Story;
