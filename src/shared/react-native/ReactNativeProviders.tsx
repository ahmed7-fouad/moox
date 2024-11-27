"use client";

import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PortalProvider } from "@/shared/components/Portal";

export default function ReactNativeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
