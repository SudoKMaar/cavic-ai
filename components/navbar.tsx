import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <span className="px-2">
          <ModeToggle />
        </span>
        <UserButton
          afterSignOutUrl="/"
          appearance={{ elements: { avatarBox: "h-10 w-10" } }}
        />
      </div>
    </div>
  );
};

export default Navbar;
