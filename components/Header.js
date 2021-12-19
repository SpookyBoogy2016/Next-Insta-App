import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import InstaLogo from "../public/Instagram_logo.svg";
import SmallInstaLogo from "../public/Instagram_simple_icon.svg";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-32 cursor-pointer p-3">
          <img src={InstaLogo} />
        </div>

        <div className="relative w-7 lg:hidden flex-shrink-0 cursor-pointer p-3">
          <img src={SmallInstaLogo} />
        </div>

        {/* Middle - Search Input */}
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 flex container items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
      </div>
    </div>
  );
}

export default Header;
