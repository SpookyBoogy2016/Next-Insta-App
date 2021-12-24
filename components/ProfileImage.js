import { useSession } from "next-auth/react";

function ProfileImage() {
  const { data: session } = useSession();

  return (
    <div>
      <img
        src={session?.user?.image}
        className="w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 
            object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center ">
        {session?.user?.username}
      </p>
    </div>
  );
}

export default ProfileImage;
