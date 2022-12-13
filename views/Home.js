import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Divider,
  FlatList,
  Heading,
  HStack,
  Image,
  Input,
  Pressable,
  Spacer,
  VStack,
} from "native-base";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://633f93fb0dbc3309f3cce759.mockapi.io/api/ck")
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Box backgroundColor={"gray.200"} flex={1}>
      <StatusBar style="light"></StatusBar>
      <VStack space={5} className="bg-white rounded-b-3xl ">
        <VStack
          space={5}
          className="p-5  rounded-3xl"
          backgroundColor="#1f1f1f"
        >
          <HStack justifyContent="space-between" className="mt-10">
            <Text className="text-white text-3xl font-bold">The Kitchen~</Text>
            <Box
              rounded={"md"}
              px={3}
              flexDirection="row"
              alignItems="center"
              backgroundColor="#ccff01"
            >
              <AntDesign name="shoppingcart" size={24} color="black" />
              <Text className="text-black font-bold"> 2</Text>
            </Box>
          </HStack>
          <Input
            borderColor={0}
            rounded={"xl"}
            h={10}
            p={4}
            backgroundColor="#393939"
            InputLeftElement={
              <AntDesign
                style={{ marginLeft: 20 }}
                name="search1"
                size={24}
                color="gray"
              />
            }
            placeholder="Search for something stasy..."
          ></Input>
        </VStack>

        <VStack space={3} divider={<Divider></Divider>} className="px-10 mb-5">
          <Text>
            <Box className="w-10">
              <Feather name="repeat" size={24} color="black" />
            </Box>
            Repest last order
          </Text>
          <Text>
            <Box className="w-10">
              <FontAwesome name="question" size={24} color="black" />
            </Box>
            Help me choose
          </Text>
          <Text>
            <Box className="w-10">
              <FontAwesome5 name="concierge-bell" size={24} color="black" />
            </Box>
            Suprise me
          </Text>
        </VStack>
      </VStack>

      <HStack alignItems="center" justifyContent="space-around" mt={5}>
        <Heading fontSize={18}>Top Categories</Heading>
        <Box _text={{ color: "gray.500", fontSize: 16 }} flexDirection="row">
          View all
          <Feather name="arrow-right" size={24} color="gray" />
        </Box>
      </HStack>

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
            {
              name: "Donut",
              icon: <MaterialIcons name="donut-small" size={24} color="pink" />,
            },
            {
              name: "Bing Chilling",
              icon: <FontAwesome5 name="ice-cream" size={24} color="orange" />,
            },
          ]}
          renderItem={({ item }) => (
            <Box className="flex-row justify-center items-center bg-slate-50 mx-2 rounded-xl px-4 py-2">
              {item.icon} <Text>{item.name}</Text>
            </Box>
          )}
        ></FlatList>
      </Box>

      <HStack alignItems="center" justifyContent="space-around" mt={5}>
        <Heading fontSize={18}>Recommended for you</Heading>
        <Box _text={{ color: "gray.500", fontSize: 16 }} flexDirection="row">
          View all
          <Feather name="arrow-right" size={24} color="gray" />
        </Box>
      </HStack>

      <Box>
        <FlatList
          my={3}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { item: item })}
            >
              <Box className=" justify-center items-center bg-slate-50 m-2 rounded-xl px-4 py-2">
                <Image size={150} source={{ uri: item.pic }} alt={""}></Image>
                <HStack>
                  <Box w={70}>{item.name}</Box>
                  <Spacer></Spacer>
                  <Text>${item.price}</Text>
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
        ></FlatList>
      </Box>
      <Center className=" w-full absolute bottom-10">
        <TouchableOpacity className=" bg-black px-20 py-4 rounded-2xl">
          <Text className="text-white font-bold">Check out 2 products</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  );
};

export default Home;
