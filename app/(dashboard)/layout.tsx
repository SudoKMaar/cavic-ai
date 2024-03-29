import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { ThemeProvider } from "@/providers/theme-provider";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      storageKey="cavic-theme"
    >
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md-inset-y-0 dark:bg-[#2B2D31] bg-[#F2F3F5]">
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </div>
        <main className="h-full md:pl-72 bg-white dark:bg-zinc-900">
          <Navbar />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
