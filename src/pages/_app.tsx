import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import ShopProvider from "@/context/ShopContext";

import { api } from "@/utils/api";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ShopProvider>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </ShopProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
