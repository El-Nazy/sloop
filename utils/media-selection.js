import * as ImagePicker from "expo-image-picker";

const handleMediaLibPerm = async () => {
  let { granted, canAskAgain } =
    await ImagePicker.getMediaLibraryPermissionsAsync();

  if (granted) return;

  if (canAskAgain) {
    granted = (await ImagePicker.requestMediaLibraryPermissionsAsync()).granted;
  }

  // todo: insist and direct to settings app to set the perm
};

export const handleImageSelection = async () => {
  await handleMediaLibPerm();

  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [1, 1],
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0,
    cameraType: ImagePicker.CameraType.front,
  });
  console.log("pres", pickerResult);
  if (pickerResult.canceled) {
    return alert("no image was selected");
  }

  // Prepare the image for upload (e.g., resize, compress)
  console.log(pickerResult.assets[0]);

  return pickerResult.assets[0].uri;

  // const preparedImage = await // Your image preparation logic
};
