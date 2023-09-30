import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex-end">
      <ModeToggle />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
