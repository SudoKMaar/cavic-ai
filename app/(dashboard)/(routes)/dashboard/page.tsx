"use client";
import {
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Audio Generation",
    icon: Music,
    href: "/audio",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];
export default function DashboardPage() {
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of CAVIC AI
        </h2>
        <p className="font-light text-muted-foreground text-sm md:text-lg text-center">
          HAVE CHAT WITH AI, GENERATE AUDIO, VIDEO, IMAGE & CODE ALL AT ONE
          PLACE
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 dark:bg-zinc-800 border-black/5 dark:border-white/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
