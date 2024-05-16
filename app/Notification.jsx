import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../components/SafeArea";
import tw, { style } from "twrnc";
import HomeBanner from "../components/HomeBanner";
import { colors } from "../utils/constants";
import Like from "../assets/RedLike.svg";
import Chat from "../assets/Chat.svg";
import Dot from "../assets/dot.svg";
import { UbuntuText } from "../components/Texts";
import NotificationCard from "../components/NotificationCard";

export default function Notification() {
  return (
    <SafeArea>
      <View style={tw`flex-1 w-full  gap-[14px]`}>
        <HomeBanner />
        <UbuntuText weight={500} style={tw`text-[20px] text-black px-[12px] `}>
          Notifications
        </UbuntuText>
        <View style={tw`bg-white  shadow-lg h-[40px]  w-full`}>
          <UbuntuText
            weight={700}
            style={tw`text-[16px] text-[${colors.darkPurple}] text-center py-2`}
          >
            Mark all as read
          </UbuntuText>
        </View>
        <UbuntuText weight={500} style={tw`text-[20px] text-black px-[12px] `}>
          Today
        </UbuntuText>
        <NotificationCard
          Dot={<Dot />}
          title="Emma commented on an update you posted"
          time="Today at 4:50 AM"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
          Icon={<Chat />}
        />
        <NotificationCard
          Dot={<Dot />}
          title="Emma commented on an update you posted"
          time="Today at 4:50 AM"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
          Icon={<Chat />}
        />
        <NotificationCard
          Dot={<Dot />}
          title="Emma commented on an update you posted"
          time="Today at 4:50 AM"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt..."
          Icon={<Like />}
        />
      </View>
    </SafeArea>
  );
}
