import "@/shared/react-native/Next.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { getWebThemeId, getWebThemeStyleSheet, useTheme } from "@/app/styles";
import { NextStyleSheetProvider } from "@/shared/react-native/NextStyleSheetProvider";
import ReactNativeProviders from "@/shared/react-native/ReactNativeProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        {/* <Favicon /> */}
        {getWebThemeStyleSheet()}
      </head>
      <body
        className={getWebThemeId()}
        style={{
          display: "flex",
          height: "100%",
          backgroundColor: theme.colors.back.default,
        }}
      >
        <NextStyleSheetProvider>
          <ReactNativeProviders>{children}</ReactNativeProviders>
        </NextStyleSheetProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
