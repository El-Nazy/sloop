import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import { Frame } from "../assets/Frame.svg";
import { colors } from "../utils/constants";
import { Image } from "expo-image";
import { UbuntuText } from "../components/Texts";
import Notification from "../assets/basil_notification-outline.svg";
import Search from "../assets/Icon.svg";
import Horizontal from "../assets/mi_options-vertical.svg";
import Picture from "../assets/picture.svg";
import Dotted from "../assets/dotted.svg";
import Comment from "../assets/comment.svg";
import Like from "../assets/like.svg";

export function PostDetail() {
  return (
    <ScrollView style={tw`mx-2 p-2 `}>
      <View style={tw`flex flex-row gap-2`}>
        <Picture />
        <View style={tw`flex flex-col gap-2`}>
          <UbuntuText weight={500} style={tw`text-[#040009]`}>
            Graceville Community
          </UbuntuText>
          <UbuntuText style={tw`text-[#9E9CA0]`}>
            23rd Jan, 2024 | 9:09 PM
          </UbuntuText>
        </View>
        <View style={tw`flex flex-row gap-2 p-2 mx-3`}>
          <Dotted style={tw`my-1`} />
          <UbuntuText style={tw`text-[#9E9CA0] mx-2`}>Moderator</UbuntuText>
        </View>
      </View>
      <View style={tw`flex flex-col py-5 gap-2`}>
        <UbuntuText weight={500} style={tw`text-[#040009] font-bold`}>
          Lorem ipsum dolor sit amet consectetur.{" "}
        </UbuntuText>
        <UbuntuText weight={400} style={tw`text-[#040009]`}>
          Scelerisque nunc sed dictum eleifend mollis. Elementum id vitae
          malesuada enim consectetur hac curabitur diam scelerisque. Pharetra
          nulla id malesuada in aliquet aliquet{" "}
        </UbuntuText>
        <View style={tw`my-3`}>
          <UbuntuText weight={500} style={tw`font-bold `}>
            tempor venenatis quis aenean amet dignissim.
          </UbuntuText>
          <UbuntuText weight={400} style={tw`text-[#040009] my-2`}>
            Vitae et sem lobortis odio ornare sed. Rhoncus hendrerit tincidunt
            sit iaculis commodo vitae suscipit nibh. Sit sit sed celerisque nunc
            sed dictum eleifend mollis. Elementum id vitae malesuada enim
            consectetur hac curabitur diam scelerisque. Pharetra nulla id
            malesuada in aliquet a celerisque nunc sed dictum eleifend mollis.
            Elementum id vitae malesuada enim consectetur hac curabitur diam
            scelerisque. Pharetra nulla id malesuada in aliquet a
          </UbuntuText>
        </View>
        <UbuntuText style={tw`text-[#30084F]`}>Read more</UbuntuText>
        <Image
          style={{
            width: 328,
            height: 260,
            borderRadius: 8,
          }}
          source={require("../assets/Frame1.jpg")}
        />
        <View style={tw`flex flex-row gap-8`}>
          <View style={tw`flex flex-row gap-1`}>
            <Like />
            <UbuntuText weight={500} style={tw`my-1`}>
              200
            </UbuntuText>
          </View>
          <View style={tw`flex flex-row gap-1`}>
            <Comment />
            <UbuntuText style={tw`my-1`}>80</UbuntuText>
          </View>
          <View style={tw`relative left-35`}>
            <Horizontal />
          </View>
        </View>
        <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
      </View>
    </ScrollView>
  );
}
