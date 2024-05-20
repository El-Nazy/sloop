import {Slot, useNavigation} from 'expo-router';
import {createContext, useCallback, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CommonActions} from "@react-navigation/native";
import * as Updates from "expo-updates";

export const AppContext = createContext();
export let updateAppData = () => {
}
// export let appData = {}
export let clearAppData = () => {
}
export let resetNavigationTo = () => {
}

export default function Layout() {
  const navigation = useNavigation();

  const [appState, setAppState] = useState(["production", "preview"].includes(Updates.channel) ? {} : {
    //todo: remove when building
    // email: "emmanuelchinazangene2001@gmail.com",
    // // verificationSent: true,
    // emailVerificationId: "66458ece64396b3174497ab2",
    // persisted: false,
    // "user": {
    //   "__v": 0,
    //   "_id": "66491f83060e2bb329a1f51e",
    //   "bio": "ME",
    //   "createdAt": "2024-05-18T21:37:07.554Z",
    //   "email": "emmanuelchinazangene2001@gmail.com",
    //   "name": "EMMA",
    //   "profileImageUrl": "https://res.cloudinary.com/duufslee0/image/upload/v1716068226/ccxqmy0iu5j41no1wwda.jpg",
    //   "updatedAt": "2024-05-18T21:37:07.554Z"
    // },
    // lastPage: "join-community",
    // "currentCommunityId": "6649de63d86061a4a2391aee",
  })

  const updateAppState = useCallback(function (stateUpdate) {
    console.log("old app state", appState)
    const updatedState = {
      ...appState,
      ...stateUpdate,
    }

    console.log("new app state", updatedState)

    setAppState(updatedState);
    AsyncStorage.setItem("app-data", JSON.stringify(stateUpdate));
  }, [])


  useEffect(() => {
    //todo: remove
    // saveAuthToken("eyJhbGciOiJIUzI1NiJ9.NjY0OTFmODMwNjBlMmJiMzI5YTFmNTFl.zjiijNruKq09icNERYZXEW37165hY5GgdxPMrV0fuTM").then(() => {
    //   getAuthToken().then(token => console.log("token save, verified", token))
    // });

    updateAppData = updateAppState;
    // appData = appState;

    resetNavigationTo = (route) => {
      try {
        const resetAction = CommonActions.reset({
          index: 0, // Index of the screen to navigate to after reset (usually 0 for the first screen)
          routes: [
            {name: route}, // Route configuration for the initial screen
            // You can add additional routes here if needed
          ],
        });

        navigation.dispatch(resetAction);
        // router.dismissAll();
        // useRouter().dismissAll();
      } catch (err) {
        console.log("dismissing err", err)
      }
    }

    clearAppData = async () => {
      console.log("clearing")
      const userEmail = appState?.user?.email
      await AsyncStorage.clear();
      setAppState({});
      console.log("cleared")
      if (userEmail) {
        updateAppState({email: userEmail})
      }
      resetNavigationTo("sign-in");
      console.log("dismissed")
    }

    // clearAppData();

    AsyncStorage.getItem("app-data").then(storedAppState => {
      console.log("stored app state", storedAppState)
      setAppState({
        ...(["production", "preview"].includes(Updates.channel) ? {
          ...
              appState,
          ...
              (JSON.parse(storedAppState) || {})
        } : {}),
        loaded: true
      });
      console.log("stored app state", storedAppState)
    })
  }, []);

  return (
      <AppContext.Provider value={{appState, updateAppState}}>
        <Slot/>
      </AppContext.Provider>
  )
}
