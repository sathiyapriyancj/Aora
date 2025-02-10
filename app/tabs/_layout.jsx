import React from "react";
import { Text, View, Image } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

function TabIcon({ icon, color, name, focused }) {
  return (
    <View className="flex items-center justify-center w-16">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color }}
        className="w-7 h-7"
      />
      <Text
        className={`text-[10px] ${
          focused ? "font-semibold text-black" : "font-normal text-gray-500"
        }`}
        style={{ color: color }}
        numberOfLines={1}
      >
        {name.length > 8 ? name.slice(0, 7) + "…" : name}
      </Text>
    </View>
  );
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          height: 55,
          paddingBottom: 10,
          paddingTop: 10,
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
