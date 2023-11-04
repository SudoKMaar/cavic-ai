"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-full w-full flex items-center justify-center bg-white dark:bg-zinc-900">
      <div className="max-w-5xl px-4 sm:px-16 flex flex-col items-center justify-center">
        <Image src="/notFound.png" alt="404 Image" height={400} width={400} />
        <div className="text-xl">
          Uh-oh, you&apos;ve stumbled into CAVIC AI&apos;s secret hideout.
          It&apos;s not quite ready to reveal its secrets just yet. But
          dont&apos; worry, your digital adventure is far from over! Try another
          path, and let&apos;s uncover the magic together.
        </div>
        <Button variant={"premium"} onClick={() => router.push("/dashboard")}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}
