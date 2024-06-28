import { NotificationStreamer } from "@/components/NotificationStreamer";
import { ClientAudio } from "@/components/clientAudio";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // audioOn();
  return (
    <div>
      <NotificationStreamer />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 map-tile">{children}</main>
      </div>
      <ClientAudio src="/audio/maou_bgm_orchestra20.mp3" />
    </div>
  );
}
