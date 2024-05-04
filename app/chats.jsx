import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import Back from "../assets/arrow_white.svg";
import Message from "../assets/Group31.svg";
import Down from "../assets/down.svg";
import Vertical from "../assets/vertical.svg";
import { UbuntuText } from "../components/Texts";
import { StatusBar } from "expo-status-bar";
import Tick from "../assets/charm_tick.svg";
import Play from "../assets/play.svg";
import { Image } from "expo-image";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { colors } from "../utils/constants";

export default function chats() {
  return (
    <View style={tw`flex-1 bg-gray-200`}>
      <StatusBar barStyle="default" style="dark" backgroundColor="" />
      <View style={tw`bg-[#140B20] p-4 justify-between items-center flex-row`}>
        <View style={tw`flex flex-row gap-3 items-center`}>
          <Back />
          <Image
            style={[
              {
                height: 50,
                width: 50,
              },
              tw`rounded-full`,
            ]}
            source={require("../assets/dp.png")}
          />
          <View style={tw`flex flex-col gap-2`}>
            <UbuntuText weight={500} style={tw`text-white text-[18px]`}>
              THE CANDLE...
            </UbuntuText>
            <UbuntuText weight={400} style={tw`text-white text-[14px]`}>
              28 members
            </UbuntuText>
          </View>
        </View>
        <View style={tw`flex flex-row items-center ml-auto gap-4`}>
          <Down />
          <Message />
          <Vertical />
        </View>
      </View>
      <View style={tw`bg-[#FFFBE3] flex-1 `}>
        <ScrollView>
          <View style={tw`px-[6px] py-[20px] gap-2`}>
            <>
              <View
                style={tw`rounded-[16px] bg-white w-[155px] justify-center m-auto p-4 gap-[10px]`}
              >
                <UbuntuText
                  style={tw`text-[12px] text-center leading-[14.4px]`}
                >
                  You created the Group “FULL GROUP NAME”
                </UbuntuText>
                <But>Add members</But>
                <But>Invite via link</But>
              </View>
              <Info>February 10, 2023</Info>
              <Info>Group was created</Info>
              <Info>An admin updated the bio</Info>
              <Info>An admin changed the profile photo</Info>
              <Info>Emmanuel Onyema joined</Info>
              <Info>Augustine Micheal Okechukwu joined</Info>
            </>
            <View style={tw`gap-[9px] flex-row w-[70%]`}>
              <Image
                style={[
                  {
                    height: 30,
                    width: 30,
                  },
                  tw`rounded-full`,
                ]}
                source={require("../assets/dp.png")}
              />
              <View style={tw`flex-1 gap-[5px] pb-[10px]`}>
                <View
                  style={tw`bg-white border-[#00000009] border-[0.7px] p-2 rounded-[12px] rounded-tl-[4px] gap-1 self-start`}
                >
                  <View style={tw`flex-row justify-between gap-10`}>
                    <UbuntuText
                      weight={400}
                      style={tw` text-[12px] text-[#F28F8F]`}
                    >
                      Victor Davies
                    </UbuntuText>
                    <UbuntuText
                      weight={400}
                      style={tw`text-[#F28F8F] text-[12px]`}
                    >
                      Admin
                    </UbuntuText>
                  </View>
                  <View style={tw`flex-row`}>
                    <UbuntuText
                      weight={400}
                      style={tw`text-[#040009] text-[12px] leading-[18px] gap-10`}
                    >
                      Welcome
                      <View style={tw`w-15 h-3`}></View>
                    </UbuntuText>
                    <View style={tw`self-end absolute right-0`}>
                      <UbuntuText
                        weight={400}
                        style={tw`text-[#B0B0B0] text-[10px] leading-[11.49px] text-right self-end relative right-0 bottom-0 w-15`}
                      >
                        10:00 AM
                      </UbuntuText>
                    </View>
                  </View>
                </View>
                <View
                  style={tw`bg-white border-[#00000009] border-[0.7px] p-2 rounded-[12px] rounded-tl-[4px] gap-1`}
                >
                  <AudioPlayer />
                </View>
                <View
                  style={tw`bg-white border-[#00000009] border-[0.7px] rounded-[12px] rounded-tl-[4px] gap-1 overflow-hidden`}
                >
                  <Image
                    style={tw`aspect-square`}
                    source={require("../assets/Frame1.jpg")}
                  />
                  <View style={tw`absolute right-2 bottom-2`}>
                    <UbuntuText
                      weight={400}
                      style={tw`text-white text-[10px] leading-[11.49px]`}
                    >
                      10:00 AM
                    </UbuntuText>
                  </View>
                </View>
                <View
                  style={tw`bg-white border-[#00000009] border-[0.7px] p-2 rounded-[12px] rounded-tl-[4px] gap-1`}
                >
                  <AudioPlayer />
                </View>
                <View
                  style={tw`bg-[#310A50] border-[#00000009] border-[0.7px] rounded-[12px] rounded-tl-[4px] gap-[1px] p-[1px] overflow-hidden flex-row aspect-square`}
                >
                  <View style={tw`flex-1`}>
                    <Image
                      style={tw`h-full rounded-[3.5px] rounded-bl-[11px]`}
                      source={require("../assets/Frame1.jpg")}
                    />
                    <View style={tw`absolute right-2 bottom-2`}>
                      <UbuntuText
                        weight={400}
                        style={tw`text-white text-[10px] leading-[11.49px]`}
                      >
                        10:00 AM
                      </UbuntuText>
                    </View>
                  </View>
                  <View
                    style={tw`flex-1 gap-[1px] overflow-hidden rounded-r-[11px]`}
                  >
                    <View>
                      <Image
                        style={tw`aspect-square rounded-[3.5px]`}
                        source={require("../assets/Frame1.jpg")}
                      />
                      <View style={tw`absolute right-2 bottom-2`}>
                        <UbuntuText
                          weight={400}
                          style={tw`text-white text-[10px] leading-[11.49px]`}
                        >
                          10:00 AM
                        </UbuntuText>
                      </View>
                    </View>
                    <View>
                      <Image
                        style={tw`aspect-square  rounded-[3.5px]`}
                        source={require("../assets/Frame1.jpg")}
                      />
                      <View style={tw`absolute right-2 bottom-2`}>
                        <UbuntuText
                          weight={400}
                          style={tw`text-white text-[10px] leading-[11.49px]`}
                        >
                          10:00 AM
                        </UbuntuText>
                      </View>
                      <View
                        style={tw`absolute bg-[#04000999] right-0 bottom-0 top-0 left-0 justify-center items-center`}
                      >
                        <UbuntuText
                          weight={400}
                          style={tw`text-white text-[10px] leading-[11.49px]`}
                        >
                          +4
                        </UbuntuText>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function AudioPlayer() {
  const [sound, setSound] = useState();
  const [value, setValue] = useState(0); // Initial value for the slider

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // return (
  //   <View>
  //     <Text>Value: {value}</Text>
  //     <Slider
  //       style={{ width: 200 }} // Adjust width as needed
  //       minimumValue={0}
  //       maximumValue={100}
  //       value={value} // Set initial value from state
  //       onValueChange={handleChange} // Function to update state on change
  //     />
  //   </View>
  // );

  async function playSound() {
    // console.log("Loading Sound");
    // const { sound } = await Audio.Sound.createAsync(
    //   require("../assets/test.mp3")
    // );
    // setSound(sound);
    // console.log("Playing Sound");
    // await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <View style={tw`flex-row items-center`}>
        <Play />
        <Slider
          style={tw`flex-1`} // Adjust width as needed
          minimumValue={0}
          maximumValue={100}
          value={value} // Set initial value from state
          onValueChange={handleChange} // Function to update state on change
          thumbTintColor={colors.darkPurple}
        />

        {/* <View style={tw`rounded-[12px] flex-1 h-[2px] bg-[#D9D9D9]`} /> */}
        {/* <Button title="Play Sound" onPress={playSound} /> */}
        <Image
          style={[
            {
              height: 24,
              width: 24,
            },
            tw`rounded-full`,
          ]}
          source={require("../assets/dp.png")}
        />
      </View>
      <View style={tw`h-2.5]`} />
      <View
        style={tw`absolute left-0 right-0 bottom-0 flex-row justify-between pl-7 pr-10`}
      >
        <UbuntuText style={tw`text-[#9E9CA0] text-[10px]`}>0:18</UbuntuText>
        <UbuntuText style={tw`text-[#9E9CA0] text-[10px]`}>10:00 AM</UbuntuText>
      </View>
    </View>
  );
}

// <View style={tw`h-15px bg-black`}></View>
function Info({ children }) {
  return (
    <View
      style={tw`rounded-full bg-white border-[#00000009] border-[1px] justify-center m-auto px-3 py-2`}
    >
      <UbuntuText style={tw`text-[10px] leading-[11.49px]`}>
        {children}
      </UbuntuText>
    </View>
  );
}

function But({ children }) {
  return (
    <View
      style={tw`rounded-full bg-white border-[1px] justify-center m-auto p-[10px]`}
    >
      <UbuntuText style={tw`text-[12px] leading-[14.4px]`}>
        {children}
      </UbuntuText>
    </View>
  );
}
