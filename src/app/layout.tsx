import "@/styles/globals.scss";
import { metadata } from "./metadata";
import { headers } from "next/headers";
import PageTypeWrapper from "@/components/PageTypeWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import HeaderContainer from "@/features/media/header/HeaderContainer";
import NavigationContainer from "@/features/media/navigation/NavigationContainer";
import Footer from "@/features/media/footer";

export { metadata };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const initialPageType = headersList.get("x-page-type") || "top";

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="images/sns/apple-touch-icon-impreme.jpg"
        />
      </head>
      <body suppressHydrationWarning>
        <PageTypeWrapper initialPageType={initialPageType}>
          <ScrollToTop />
          <HeaderContainer />
          <NavigationContainer />
          {children}
          <Footer />
        </PageTypeWrapper>
      </body>
    </html>
  );
}
