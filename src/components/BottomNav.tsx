import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Home, Search, Wallet, User } from "lucide-react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BottomNav({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const icons: Record<string, any> = {
    HomeTab: Home,
    DiscoverTab: Search,
    WalletTab: Wallet,
    ProfileTab: User,
  };

  const labels: Record<string, string> = {
    HomeTab: "Home",
    DiscoverTab: "Invest",
    WalletTab: "Wallet",
    ProfileTab: "Profile",
  };

  return (
    <View
      style={[styles.container, { paddingBottom: Math.max(insets.bottom, 16) }]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const Icon = icons[route.name];
        const label = labels[route.name];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={styles.tab}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                isFocused &&
                  route.name === "DiscoverTab" &&
                  styles.activeDiscover,
              ]}
            >
              <Icon
                size={24}
                color={isFocused ? "#2d5a27" : "#9ca3af"}
                strokeWidth={isFocused && route.name === "DiscoverTab" ? 3 : 2}
              />
            </View>
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? "#2d5a27" : "#9ca3af",
                  fontWeight: isFocused ? "bold" : "500",
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    paddingTop: 8,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  activeDiscover: {
    backgroundColor: "rgba(45, 90, 39, 0.1)",
  },
  label: {
    fontSize: 10,
  },
});
