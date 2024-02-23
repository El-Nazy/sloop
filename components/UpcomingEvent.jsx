import { View, Text, ScrollView } from "react-native";
import { UbuntuText } from "../components/Texts";
import tw from "twrnc";
import Picture from "../assets/picture.svg";
import Circle from "../assets/Circle.svg";
export function UpcomingEvent() {
  return (
    <View style={tw`flex-1`}>
      <ScrollView style={tw`mx-2 p-2 `}>
        <View>
          <UbuntuText weight={700} style={tw`text-[16px]`}>
            Upcoming events
          </UbuntuText>
          <View style={tw`flex flex-col gap-3 my-4`}>
            <View style={tw`flex flex-row gap-1 `}>
              <Picture />
              <View style={tw`flex flex-col gap-2`}>
                <UbuntuText weight={700} style={tw`text-[#040009] text-[14px]`}>
                  Extravagant praise
                </UbuntuText>
                <UbuntuText
                  weight={400}
                  style={tw`text-[#B0B0B0] text-[12px] leading-[14px]`}
                >
                  Brief bio of the group here...
                </UbuntuText>
              </View>
            </View>
            <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          </View>

          <View style={tw`flex flex-col gap-3`}>
            <View style={tw`flex flex-row gap-1 `}>
              <Picture />
              <View style={tw`flex flex-col gap-2`}>
                <UbuntuText weight={700} style={tw`text-[#040009] text-[14px]`}>
                  Sales and makrketing
                </UbuntuText>
                <UbuntuText
                  weight={400}
                  style={tw`text-[#B0B0B0] text-[12px] leading-[14px]`}
                >
                  Brief bio of the group here...
                </UbuntuText>
              </View>
            </View>
            <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          </View>
          <View style={tw`my-6`}>
            <UbuntuText weight={700} style={tw`text-[16px]`}>
              Groups You Joined
            </UbuntuText>
          </View>
          <View>
            <View style={tw`flex flex-row gap-1 my-0.5`}>
              <Picture />
              <View style={tw`flex flex-col gap-2`}>
                <UbuntuText weight={700} style={tw`text-[#040009]`}>
                  The candles
                </UbuntuText>
                <UbuntuText style={tw`text-[#0A090C]`}>
                  Ade John: Let’s all meet by 8:pm...
                </UbuntuText>
              </View>
              <View style={tw`flex flex-col gap-1  `}>
                <UbuntuText style={tw`text-[#0A090C] relative right-5`}>
                  Today, 8:11 PM
                </UbuntuText>
                <View
                  style={tw`bg-[#7A1EF7] rounded-full  h-4 w-4 relative left-15 my-1`}
                >
                  <UbuntuText
                    style={tw`text-[#FEFEFE] text-[10px] my-0.5 text-center `}
                  >
                    2
                  </UbuntuText>
                </View>
              </View>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          <View>
            <View style={tw`flex flex-row gap-1 my-3`}>
              <Picture />
              <View style={tw`flex flex-col gap-2`}>
                <UbuntuText weight={700} style={tw`text-[#040009]`}>
                  The candles
                </UbuntuText>
                <UbuntuText style={tw`text-[#0A090C]`}>
                  Ade John: Let’s all meet by 8:pm...
                </UbuntuText>
              </View>
              <View style={tw`flex flex-col gap-1  `}>
                <UbuntuText style={tw`text-[#0A090C] relative right-5`}>
                  Today, 8:11 PM
                </UbuntuText>
                <View
                  style={tw`bg-[#7A1EF7] rounded-full  h-4 w-4 relative left-15 my-1`}
                >
                  <UbuntuText
                    style={tw`text-[#FEFEFE] text-[10px] my-0.5 text-center `}
                  >
                    2
                  </UbuntuText>
                </View>
              </View>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          <View>
            <View style={tw`flex flex-row gap-1 my-3`}>
              <Picture />
              <View style={tw`flex flex-col gap-2`}>
                <UbuntuText weight={700} style={tw`text-[#040009]`}>
                  The candles
                </UbuntuText>
                <UbuntuText style={tw`text-[#0A090C]`}>
                  Ade John: Let’s all meet by 8:pm...
                </UbuntuText>
              </View>
              <View style={tw`flex flex-col gap-1  `}>
                <UbuntuText style={tw`text-[#0A090C] relative right-5`}>
                  Today, 8:11 PM
                </UbuntuText>
                <View
                  style={tw`bg-[#7A1EF7] rounded-full  h-4 w-4 relative left-15 my-1`}
                >
                  <UbuntuText
                    style={tw`text-[#FEFEFE] text-[10px] my-0.5 text-center `}
                  >
                    2
                  </UbuntuText>
                </View>
              </View>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
          <View>
            <View style={tw`flex flex-row gap-1 my-3`}>
              <Picture />
              <View style={tw`flex flex-col gap-2`}>
                <UbuntuText weight={700} style={tw`text-[#040009]`}>
                  The candles
                </UbuntuText>
                <UbuntuText style={tw`text-[#0A090C]`}>
                  Ade John: Let’s all meet by 8:pm...
                </UbuntuText>
              </View>
              <View style={tw`flex flex-col gap-1  `}>
                <UbuntuText style={tw`text-[#0A090C] relative right-5`}>
                  Today, 8:11 PM
                </UbuntuText>
                <View
                  style={tw`bg-[#7A1EF7] rounded-full  h-4 w-4 relative left-15 my-1`}
                >
                  <UbuntuText
                    style={tw`text-[#FEFEFE] text-[10px] my-0.5 text-center `}
                  >
                    2
                  </UbuntuText>
                </View>
              </View>
            </View>
          </View>
          <View style={tw`h-px bg-[#B0B0B0]  w-full `}></View>
        </View>
      </ScrollView>
      <Circle style={tw`absolute right-0 bottom-0`} />
    </View>
  );
}
