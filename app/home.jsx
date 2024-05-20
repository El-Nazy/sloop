import {View} from "react-native";
import tw from "twrnc";
import {UbuntuText} from "../components/Texts";
import Notification from "../assets/basil_notification-outline.svg";
import Search from "../assets/Icon.svg";
import Horizontal from "../assets/mi_options-vertical.svg";
import {GroupDetail} from "../components/GroupDetail";
import {SafeArea} from "../components/SafeArea";

export default function () {
  return (
      <SafeArea>
        <View style={tw`flex-1 w-full bg-white`}>
          <View style={tw`flex flex-row justify-between items-center pl-[18px] pr-2 py-2`}>
            <View
                style={[tw`rounded-[12px] px-1 bg-white mx-1 flex flex-row gap-1`, {
                  shadowOpacity: 0.04,
                  shadowRadius: 12,
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowColor: "#000000aa",
                  elevation: 2,
                }]}
            >
              <View style={tw`rounded-[12px] bg-[#E2E200] h-11 w-[42px] justify-center`}>
                <UbuntuText
                    weight={500}
                    style={tw`text-center text-[20px]`}
                >
                  C
                </UbuntuText>
              </View>

              <UbuntuText weight={500} style={tw`text-[20px]`}>
                GracevilleCC
              </UbuntuText>
            </View>

            <View style={tw`flex flex-row gap-5 my-2 items-center`}>
              <Notification/>
              <Search/>
              <Horizontal/>
            </View>
          </View>
          <View
              style={tw`flex flex-row p-3 mb-3 justify-between bg-white border-b-[#30084F]`}
          >
            <UbuntuText weight={500} style={tw`font-bold text-[#040009]`}>
              Updates
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
            <GroupDetail/>
          </View>
        </View>
      </SafeArea>
  );
}
