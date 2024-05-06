import { AssetsProvider } from "@/context/AssetsContext";
import { DashboardFooter } from "./_components/DashboardFooter";
import { IBM_Plex_Sans } from "next/font/google";

const IbmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibmPlex",
  weight: ["300", "400", "500", "600", "700"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AssetsProvider>
        <main
          className={`${IbmPlex.className} flex min-h-[100vh] max-w-full flex-col bg-foreground-grey pt-16`}
        >
          <div className="flex-1 pb-[5rem]">{children}</div>
          <DashboardFooter />
        </main>
      </AssetsProvider>
    </>
  );
}
