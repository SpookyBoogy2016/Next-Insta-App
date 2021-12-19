import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import InstaLogo from "../public/Instagram_logo.svg";
import SmallInstaLogo from "../public/Instagram_simple_icon.svg";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-32 cursor-pointer p-3">
          <img src={InstaLogo} />
        </div>

        <div className="relative lg:hidden flex-shrink-0 w-16 cursor-pointer p-3">
          <img src={SmallInstaLogo} />
        </div>

        {/* Middle - Search Input */}
        <div className="max-w-xs">
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
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navButton" />
          <MenuIcon className="h-8 md:hidden cursor-pointer " />
          <div className="relative navButton">
            <PaperAirplaneIcon className="navButton rotate-45" />
            <div
              className="absolute -top-2 -right-3 text-xs w-5 h-5 bg-red-500 rounded-full flex 
              items-center justify-center animate-pulse text-white"
            >
              3
            </div>
          </div>

          <PlusCircleIcon className="navButton" />
          <UserGroupIcon className="navButton" />
          <HeartIcon className="navButton" />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAFY_9yPY2B_gnruXUK7S6K_EMgDzVxI1kg&usqp=CAU"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
