import {OnboardingNextButton} from "./on-boarding";
import tw from "twrnc";
import {Platform, ScrollView, StatusBar, View,} from "react-native";
import React, {useContext, useState} from "react";
import {appName, colors} from "../utils/constants";
import {H2, UbuntuText} from "../components/Texts";
import {router, useLocalSearchParams} from "expo-router";
import {SafeArea} from "../components/SafeArea";
import {CustomButton} from "../components/Buttons";
import {OtpInput} from "react-native-otp-entry";
import {useFonts} from "expo-font";
import {axiosInstance} from "../utils/axios-instance";
import {Back} from "../components/icons/Back";
import {AppContext} from "./_layout";
import {saveAuthToken} from "../utils/user-utils";

const codeLength = 4;

export default function () {
  const [fontsLoaded, fontError] = useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
  });
  const {updateAppState} = useContext(AppContext);

  const {email} = useLocalSearchParams();
  console.log("in verify", email);

  if (!email) return router.replace("/sign-in");

  const [otpText, setOtpText] = useState("");
  const [codeArr, setCodeArr] = useState(
    Array.from({length: codeLength}, () => "")
  );
  // const codeInputsRefs = Array.from({ length: codeLength }, () => useRef(null));

  // const handleCodeInput = (code, index) => {
  //   if (!code) return;

  //   if (code.length == 2) {
  //     if (code[0] == code[1]) {
  //       codeArr[index] = code[0];
  //     }
  //     if (code[0] != code[1]) {
  //       codeArr[index] = code[0] == codeArr[index] ? code[1] : code[0];
  //     }
  //   } else {
  //     codeArr[index] = code[code.length - 1];
  //   }
  //   setCodeArr([...codeArr]);

  //   if (index < codeLength - 1) {
  //     codeInputsRefs[index + 1].current.focus();
  //   }

  //   console.log(codeArr);

  //   handleVerify();
  // };
  const handleSubmit = () => {
    // setOtpText(otp);
    handleVerify(otpText)
  }
  const handleVerify = async (otp) => {
    // return router.navigate({
    //   pathname: "/profile-setup",
    //   // params: { emailVerificationId },
    // });
    if (otp.length < 4) return alert(`Enter the OTP sent to ${email}`);
    let res
    try {
      res = await axiosInstance.post(
        "/auth/verify-otp",
        {
          email,
          // email: "emmanuelchinazangene2001@gmail.com",
          otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if required
          },
        }
      );
      console.log("submitted");
    } catch (err) {
      // todo: specify reason
      // console.error(err);
      console.log("error", JSON.stringify(err, null, 2));
      // return alert("failed verification");
      console.log("type of error", err);
      return alert(
        err?.response?.data?.message ||
        err?.message ||
        "An error ocurred, please try again later if error persists"
      );
    }

    console.log("res", res);
    const data = await res.data;
    console.log("rec", data);
    const {emailVerificationId} = data;

    // console.log("submitted", otpId);
    console.log("received", data);

    if (data?.emailVerificationId) {
      router.navigate({
        pathname: "/profile-setup",
        params: {emailVerificationId},
      });
      updateAppState({
        emailVerificationId,
      })
      return;
      // router.
    } else if (data?.authToken && data?.user) {
      router.replace("welcome-page");
      updateAppState({
        user: data.user,
      })
      saveAuthToken(authToken);
      // SecureStore.setItemAsync("auth-token", authToken);
      // storeUser(data);
      // todo: implement sign in when token is received
      // check for community in data.user and navigate to it
      // or navigate to community creation/joining if no community
      return;
    }

    return alert("Invalid or expired code. Please try again.");
  };

  return (
    <SafeArea viewStyle={tw`px-5`}>
      <ScrollView
        style={tw`w-full`}
        contentContainerStyle={tw`items-center`}
      >
        <View
          style={{
            position: "absolute",
            left: 8,
            top: 39 - (StatusBar.currentHeight || 0),
          }}
        >
          <Back prevHref="/sign-in"/>
        </View>
        <View
          style={{
            marginBottom: 11,
            marginTop: 93 - (StatusBar.currentHeight || 0),
          }}
        >
          <H2>Confirm your email address</H2>
        </View>
        <View
          style={{
            marginBottom: 30,
          }}
        >
          <UbuntuText
            style={{
              fontSize: 16,
              lineHeight: 19.2,
              color: colors.mediumGray,
              textAlign: "center",
            }}
          >
            {appName} has sent a 4-digits confirmation code to
            {"\n" + email}
          </UbuntuText>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 60,
            gap: 12,
          }}
        >
          {fontsLoaded && (
            <OtpInput
              onFilled={handleVerify}
              numberOfDigits={codeLength}
              // focusColor={colors.purple}
              onTextChange={setOtpText}
              hideStick={true}
              theme={{
                inputsContainerStyle: {
                  justifyContent: "center",
                  flexDirection: "row",
                  gap: 12,
                },
                pinCodeContainerStyle: {
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  borderWidth: 0,
                  borderColor: colors.purple,
                  borderRightWidth: 2,
                  transform: [{rotate: "90deg"}],
                },
                pinCodeTextStyle: {
                  transform: [{rotate: "-90deg"}],
                  fontFamily: "Ubuntu-Regular",
                  color: colors.black,
                  fontSize: 20,
                },
                focusedPinCodeContainerStyle: {
                  borderColor: colors.purple4,
                  backgroundColor: colors.purple4,
                },
              }}
            />
          )}
          {/* {codeInputsRefs.map((codeInputRef, index) => {
          return (
            <CircleInput
              key={index}
              ref={codeInputRef}
              value={codes[index]}
              onChangeText={(char) => handleCodeInput(char, index)}
            />
          );
        })} */}
        </View>
        <CustomButton
          onPress={() => router.replace({pathname: "/sign-in", params: {email}})}
          style={{
            marginBottom: 60,
            padding: 8,
          }}
        >
          <View>
            <UbuntuText
              style={{
                fontSize: 12,
                lineHeight: 14.4,
                color: colors.purple4,
              }}
            >
              RESEND CODE
            </UbuntuText>
          </View>
        </CustomButton>
      </ScrollView>
      {/* <CustomButton
        style={{
          backgroundColor: colors.purple4,
          borderRadius: 15,
          paddingHorizontal: 30,
          justifyContent: "center",
          alignItems: "center",
          height: 30,
        }}
        onPress={() => handleVerify(otpText)}
      >
        <UbuntuText
          weight={500}
          style={{
            fontSize: 14,
            // lineHeight: 14.4,
            color: colors.white,
          }}
        >
          CONTINUE
        </UbuntuText>
      </CustomButton> */}
      <OnboardingNextButton
        replace
        {...(Platform.OS == "web"
          ? {href: "profile-setup"}
          : {onPress: handleSubmit})}
        text="CONFIRM"
      />
    </SafeArea>
  );
}

// const CircleInput = React.forwardRef(({ ...props }, ref) => {
//   return (
//     <View
//       style={{
//         width: 42,
//         height: 42,
//         borderRadius: 21,
//         borderColor: colors.purple2,
//         borderRightWidth: 2,
//         transform: [{ rotate: "90deg" }],
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <UbuntuTextInput
//         style={{ textAlign: "center", transform: [{ rotate: "-90deg" }] }}
//         inputMode={"numeric"}
//         keyboardType={"number-pad"}
//         // caretHidden={true}
//         maxLength={1}
//         selectTextOnFocus={true}
//         ref={ref}
//         {...props}
//       />
//     </View>
//   );
// });
