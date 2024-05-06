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
import { PostDetail } from "../components/PostDetail";
import { GroupDetail } from "../components/GroupDetail";
import { UpcomingEvent } from "../components/UpcomingEvent";

export default function () {
  return (
    <>
      <View style={tw`flex-1 bg-white`}>
        <View style={tw`flex flex-row `}>
          <View
            style={tw`px-5 bg-white  my-3 mx-1 rounded-lg flex flex-row gap-3  shadow-md`}
          >
            <View style={tw` rounded bg-[#E2E200] h-7 w-6 -mx-4`}>
              <UbuntuText
                weight={500}
                style={tw`font-bold text-center   text-2xl -my-0.5`}
              >
                C
              </UbuntuText>
            </View>

            <UbuntuText style={tw`font-bold my-1 mx-2 text-[15px]`}>
              GracevilleCC
            </UbuntuText>
          </View>

          <View style={tw`flex flex-row relative left-24 gap-5 my-2`}>
            <Notification />
            <Search />
            <Horizontal />
          </View>
        </View>
        <View
          style={tw`flex flex-row p-3 my-3 gap-20 bg-white shadow border-b-[#30084F]`}
        >
          <UbuntuText weight={500} style={tw`font-bold text-[#040009]`}>
            UPdates
          </UbuntuText>
          <UbuntuText style={tw`border-b border-[#]`}>
            Groups
            <View style={tw`bg-[#30084F] rounded-full mx-0.5 `}>
              <UbuntuText
                style={tw`text-[#FEFEFE] text-[10px] mx-0.5 text-center`}
              >
                99+
              </UbuntuText>
            </View>
          </UbuntuText>

          <UbuntuText>People</UbuntuText>
        </View>
        <View style={tw`flex-1`}>
          <GroupDetail />
        </View>
      </View>
    </>
  );
}
