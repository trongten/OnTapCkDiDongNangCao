import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Center,
  Divider,
  FlatList,
  Heading,
  HStack,
  Image,
  Spacer,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  Layout,
  LightSpeedInRight,
  PinwheelIn,
  PinwheelOut,
  ZoomInLeft,
} from "react-native-reanimated";

export default function Detail({ route }) {
  const [so, setSo] = useState(1);
  return (
    <Box safeAreaTop>
      <Center>
        <Animated.View
          entering={PinwheelIn.duration(3000).damping(600).springify(500)}
          exiting={PinwheelOut.duration(3000).damping(600).springify(500)}
        >
          <Image
            size={370}
            source={{ uri: route.params.item.pic }}
            alt={""}
          ></Image>
        </Animated.View>
      </Center>
      <Box className="mx-5">
        <Heading>{route.params.item.name}</Heading>
        <Heading size={"sm"} my={2} color={"gray.500"}>
          -240g
        </Heading>
        <Box>
          <FlatList
            my={3}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={[
              {
                name: "Vegan",
                icon: (
                  <MaterialCommunityIcons name="leaf" size={24} color="green" />
                ),
              },
              {
                name: "Coffee",
                icon: (
                  <MaterialIcons name="local-drink" size={24} color="brown" />
                ),
              },
            ]}
            renderItem={({ item }) => (
              <Box className="flex-row justify-center items-center bg-slate-50 mr-2 rounded-xl px-4 py-2">
                {item.icon} <Text>{item.name}</Text>
              </Box>
            )}
          ></FlatList>
        </Box>
        <Divider className="my-4"></Divider>
        <Text className="text-gray-500 text-[15px] font-bold">
          Nutritional value per 100 g
        </Text>
        <HStack space={10}>
          <Text className="text-gray-500 text-lg font-bold">198</Text>
          <Text className="text-gray-500 text-lg font-bold">13.1</Text>
          <Text className="text-gray-500 text-lg font-bold">13.9</Text>
          <Text className="text-gray-500 text-lg font-bold">5.1</Text>
        </HStack>

        <HStack w={"full"} space={3}>
          <HStack className=" py-4 bg-gray-300  rounded-2xl">
            <TouchableOpacity
              className="w-14 items-center"
              onPress={() => setSo(so - 1)}
            >
              <Text className="font-bold">-</Text>
            </TouchableOpacity>
            <Text>{so}</Text>
            <TouchableOpacity
              className="w-14 items-center"
              onPress={() => setSo(so + 1)}
            >
              <Text className="font-bold">+</Text>
            </TouchableOpacity>
          </HStack>

          <TouchableOpacity className="p-5 bg-black rounded-2xl flex-1">
            <HStack>
              <Text className="text-white">Add to Cart</Text>
              <Spacer></Spacer>
              <Text className="text-white">
                ${route.params.item.price * so}
              </Text>
            </HStack>
          </TouchableOpacity>
        </HStack>
      </Box>
    </Box>
  );
}
