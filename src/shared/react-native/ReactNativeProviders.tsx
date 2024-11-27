"use client";

import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PortalProvider } from "@/shared/components/Portal";

const initialMetrics = {
  insets: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  frame: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  },
};

export default function ReactNativeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <SafeAreaProvider initialMetrics={initialMetrics}>
          {children}
        </SafeAreaProvider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}
