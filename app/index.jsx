import React, {useContext} from "react";
import {Redirect, router, useRootNavigationState} from "expo-router";
import {AppContext} from "./_layout";

export default function () {
  // router.replace("/on-boarding");
  const rootNavigationState = useRootNavigationState();
  // const [appState, setAppState] = useState(null)
  // return <Redirect href={"/new-community2"} />;

  const {appState} = useContext(AppContext);

  console.log("second", appState)
  if (!rootNavigationState?.key) return null;

  // keep loading until app state is loaded
  // if (!appState?.loaded) return null;

  if (appState?.lastPage) {
    return router.replace({pathname: appState.lastPage, params: appState});
  }

  if (
      appState?.user &&
      (appState?.communityMemberships || appState?.currentCommunityId)
  ) {
    console.log("has community")
    return router.replace({pathname: "/home", params: appState});
  }

  if (appState?.user) {
    return router.replace({pathname: "/welcome-page", params: appState});
  }

  if (appState?.emailVerificationId) {
    return router.replace({pathname: "/profile-setup", params: appState});
  }

  if (appState?.email && appState?.verificationSent) {
    return router.replace({pathname: "/verify", params: appState});
  }

  if (appState?.email) {
    return router.replace({pathname: "/sign-in", params: appState});
  }

  // console.log("\n\n\nhere\n\n\n");
  return <Redirect href={"/on-boarding"}/>;
  // return <Redirect href={"/verify"} />;
  // return <Redirect href={"/profile-setup"} />;
  // return <Redirect href={"/initializing"} />;
  // return <Redirect href={"/welcome-page"} />;
  // return <Redirect href={"/new-community"} />;
  // return <Redirect href={"/join-community"} />;
  // return <Redirect href={"/request-sent"} />;
  // return <Redirect href={"/home"} />;
  // return <Redirect href={"/welcome-group"} />;
  // return <Redirect href={"/event"} />;
  // return <Redirect href={"/create-event"} />;
  // return <Redirect href={"/createdevent"} />;
  // return <Redirect href={"/notifs"} />;
  // return <Redirect href={"/fire"} />;
  // return <Redirect href={"/chats"} />;
  // return <Redirect href={"/Eventroll"} />;
  // return <Redirect href={"/shecdulecontent"} />;
  // return <Redirect href={"/communityname"} />;
  // return <Redirect href={"/communitysafe"} />;
  // return <Redirect href={"/community-report"} />;
  // return <Redirect href={"/communitydone"} />;
  // return <Redirect href={"/communityblock"} />;
  // return <Redirect href={"/communityblock"} />;
  // return <Redirect href={"/homeschecdule"} />;
  // return <Redirect href={"/viewschecduled"} />;
  // return <Redirect href={"/schecduledcontent"} />;
  // return <Redirect href={"/chats"} />;
  // return <Redirect href={"/Eventroll"} />;
  // storeUser(
  //   JSON.parse(
  //     `{"authToken": "eyJhbGciOiJIUzI1NiJ9.NjVkZTA4OTVhYWMyZmNhNzFiMDRhZDZj.Q_CiDOEaX1pPmRyilHGVnKe_geB3FeiNHLvy-7UoBE4", "user": {"__v": 0, "_id": "65de0895aac2fca71b04ad6c", "bio": "bio", "createdAt": "2024-02-27T16:06:45.974Z", "email": "emmanuelchinazangene@gmail.com", "name": "Emma", "profileImageUrl": "https://res.cloudinary.com/duufslee0/image/upload/v1709050004/kilzgc5uex6fzp6whf6o.jpg", "updatedAt": "2024-02-27T16:06:45.974Z"}}`,
  //   ),
  // );
  // return <Redirect href={"/sign-up"} />;
  // return (
  //   <Redirect
  //     href={{
  //       pathname: "/verify",
  //       params: { email: "emmanuel.ngene@jovya.ng" },
  //     }}
  //   />
  // );
  // return <Redirect href={"/verify"} />;
  // return (
  //   <Redirect
  //     href={{
  //       pathname: "/profile-setup",
  //       params: { emailVerificationId: "65dda1798fcd64800fe50cbc" },
  //     }}
  //   />
  // );
  // return <Redirect href={"/profile-setup"} />;
  // return <Redirect href={"/initializing"} />;
  // storeUser({
  //   authToken:
  //     "eyJhbGciOiJIUzI1NiJ9.NjVkYTkyMWYyMWM5YTI4YTlmNGZmMzBj.zi7ZVzmeh1IMYccGigLUagX7Wr3RXoeDL8xyM-gwwGk",
  //   user: JSON.parse(
  //     `{"__v": 0, "_id": "65da921f21c9a28a9f4ff30c", "bio": "bio", "createdAt": "2024-02-25T01:04:31.389Z", "email": "emmanuel.ngene@jovya.ng", "name": "Emmanuel", "updatedAt": "2024-02-25T01:04:31.389Z"}`,
  //   ),
  // });
  // AsyncStorage.setItem(
  //   "user",
  //   `{"__v": 0, "_id": "65da921f21c9a28a9f4ff30c", "bio": "bio", "createdAt": "2024-02-25T01:04:31.389Z", "email": "emmanuel.ngene@jovya.ng", "name": "Emmanuel", "updatedAt": "2024-02-25T01:04:31.389Z"}`,
  // );
  // return <Redirect href={"/welcome-page"} />;
  // return <Redirect href={"/new-community"} />;
  // return <Redirect href={"/new-community2"} />;
  // return <Redirect href={"/join-community"} />;
  // return <Redirect href={"/request-sent"} />;
}
