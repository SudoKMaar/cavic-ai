import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="h-[77px] w-[234px] relative animate-pulse">
        <Image alt="CAVIC AI" fill src="/logo.png" />
      </div>
      <p className="text-lg text-muted-foreground">is thinking . . .</p>
    </div>
  );
};

export default Loader;
