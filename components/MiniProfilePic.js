import SVG from "react-inlinesvg";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";

function MiniProfilePic() {
  const avatars = createAvatar(style);
  return (
    <div className="">
      <SVG src={avatars} className="w-10 h-10 rounded-full border p-[2px] " />
    </div>
  );
}

export default MiniProfilePic;
