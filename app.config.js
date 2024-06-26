module.exports = ({ config }) => {
  // console.log(config.name);
  if (process?.env?.GOOGLE_SERVICES_JSON)
    config.android.googleServicesFile = process.env.GOOGLE_SERVICES_JSON;
  return {
    ...config,
    updates: {
      url: "https://u.expo.dev/9ad0ff2f-39c5-4ce8-a759-a49bbfb8a9f4",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  };
};
// export default {
//   name: "jovya",
//   slug: "jovya",
//   version: "1.0.0",
//   orientation: "portrait",
//   icon: "./assets/icon.png",
//   userInterfaceStyle: "light",
//   splash: {
//     backgroundColor: "#FEFEFE",
//     image: "./assets/splash-screen.png",
//   },
//   assetBundlePatterns: ["**/*"],
//   ios: {
//     supportsTablet: true,
//   },
//   android: {
//     adaptiveIcon: {
//       foregroundImage: "./assets/icon.png",
//       backgroundColor: "#FEFEFE",
//     },
//     permissions: [
//       "android.permission.RECORD_AUDIO",
//       "android.permission.MODIFY_AUDIO_SETTINGS",
//     ],
//     package: "com.jovya.jovya",
//     versionCode: 1,
//     googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
//   },
//   web: {
//     favicon: "./assets/icon.png",
//     bundler: "metro",
//     output: "static",
//   },
//   plugins: [
//     "expo-router",
//     [
//       "expo-image-picker",
//       {
//         photosPermission:
//           "The app accesses your photos to let you share them with your friends.",
//         cameraPermission:
//           "The app accesses your camera to let you take photos to share with your friends.",
//       },
//     ],
//     "expo-secure-store",
//     [
//       "expo-av",
//       {
//         microphonePermission:
//           "Allow $(PRODUCT_NAME) to access your microphone.",
//       },
//     ],
//     "expo-font",
//   ],
//   scheme: "jovya",
//   extra: {
//     router: {
//       origin: false,
//     },
//     eas: {
//       projectId: "9ad0ff2f-39c5-4ce8-a759-a49bbfb8a9f4",
//     },
//   },
//   owner: "el-nazy",
// };
