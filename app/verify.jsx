import {
  Button,
  Pressable,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { apiBaseUrl, appName, colors } from "../utils/constants";
import { Image } from "expo-image";
import { H2, UbuntuText } from "../components/Texts";
import { Link } from "expo-router";
import { SafeArea } from "../components/SafeArea";
import { CustomButton } from "../components/Buttons";
import { UbuntuTextInput } from "../components/UbuntuTextInput";
import BackArrowSvg from "../assets/back-arrow.svg";
import { useLocalSearchParams, router } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import { useFonts } from "expo-font";
import { axiosInstance } from "../utils/axios-instance";
import { storeUser } from "../utils/user-utils";

const codeLength = 4;

export default function () {
  const [fontsLoaded, fontError] = useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
  });

  const { email } = useLocalSearchParams();
  const [otp, setOtp] = useState("");
  const [codeArr, setCodeArr] = useState(
    Array.from({ length: codeLength }, () => "")
  );
  const codeInputsRefs = Array.from({ length: codeLength }, () => useRef(null));

  const handleCodeInput = (code, index) => {
    if (!code) return;

    if (code.length == 2) {
      if (code[0] == code[1]) {
        codeArr[index] = code[0];
      }
      if (code[0] != code[1]) {
        codeArr[index] = code[0] == codeArr[index] ? code[1] : code[0];
      }
    } else {
      codeArr[index] = code[code.length - 1];
    }
    setCodeArr([...codeArr]);

    if (index < codeLength - 1) {
      codeInputsRefs[index + 1].current.focus();
    }

    console.log(codeArr);

    handleVerify();
  };
  const handleVerify = async (otp) => {
    return router.navigate({
      pathname: "/profile-setup",
      // params: { emailVerificationId },
    });
    console.log(otp, email);
    try {
      const res = await fetch(apiBaseUrl + "/auth/verify-otp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          // email: "emmanuelchinazangene@gmail.com",
          otp,
        }),
      });

      const data = await res.json();
      console.log("rec", data);
      const { emailVerificationId } = data;

      // console.log("submitted", otpId);
      console.log("received", data);
      if (data.emailVerificationId) {
        router.navigate({
          pathname: "/profile-setup",
          params: { emailVerificationId },
        });
        return;
      } else if (data.token) {
        router.replace("welcome-page");
        storeUser(data);
        // todo: implement sign in when token is received
        // check for community in data.user and navigate to it
        // or navigate to community creation/joining if no community
        return;
      }
    } catch (err) {
      // todo: specify reason
      console.error(err);
      console.log(err);
      return alert("failed verification");
    }
    return alert("failed verification");
  };

  return (
    <SafeArea>
      <View
        style={{
          position: "absolute",
          left: 16,
          top: 39 - (StatusBar.currentHeight || 0),
        }}
      >
        <Link href={"/sign-up"} asChild>
          <BackArrowSvg />
        </Link>
      </View>
      <View
        style={{
          marginBottom: 11,
          marginTop: 93 - (StatusBar.currentHeight || 0),
        }}
      >
        <H2>Confirm your mobile number</H2>
      </View>
      <View
        style={{
          marginBottom: 30,
          width: 226,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 10,
            lineHeight: 11.49,
            color: colors.mediumGray,
            textAlign: "center",
          }}
        >
          {appName} has sent a 4-digits confirmation code to {email}
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
            onTextChange={setOtp}
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
                borderColor: colors.purple2,
                borderRightWidth: 2,
                transform: [{ rotate: "90deg" }],
              },
              pinCodeTextStyle: {
                transform: [{ rotate: "-90deg" }],
                fontFamily: "Ubuntu-Regular",
                color: colors.black,
                fontSize: 20,
              },
              focusedPinCodeContainerStyle: {
                borderColor: colors.purple,
                backgroundColor: colors.purple,
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
      <View
        style={{
          marginBottom: 60,
        }}
      >
        <UbuntuText
          style={{
            fontSize: 12,
            lineHeight: 14.4,
            color: colors.purple,
          }}
        >
          RESEND CODE
        </UbuntuText>
      </View>
      <CustomButton
        style={{
          backgroundColor: colors.purple,
          borderRadius: 15,
          paddingHorizontal: 30,
          justifyContent: "center",
          alignItems: "center",
          height: 30,
        }}
        onPress={() => handleVerify(otp)}
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
      </CustomButton>
    </SafeArea>
  );
}

const CircleInput = React.forwardRef(({ ...props }, ref) => {
  return (
    <View
      style={{
        width: 42,
        height: 42,
        borderRadius: 21,
        borderColor: colors.purple2,
        borderRightWidth: 2,
        transform: [{ rotate: "90deg" }],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UbuntuTextInput
        style={{ textAlign: "center", transform: [{ rotate: "-90deg" }] }}
        inputMode={"numeric"}
        keyboardType={"number-pad"}
        // caretHidden={true}
        maxLength={1}
        selectTextOnFocus={true}
        ref={ref}
        {...props}
      />
    </View>
  );
});
