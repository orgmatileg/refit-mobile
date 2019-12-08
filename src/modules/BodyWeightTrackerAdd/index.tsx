import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, Image } from "react-native";

// UI
import { Button, Layout, Datepicker, Text, Icon } from "@ui-kitten/components";

// Constant
import colors from "../../constants/colors";

// Export
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF"
  },
  submitBtn: {
    marginTop: 10,
    backgroundColor: colors.SECONDARY,
    borderColor: colors.SECONDARY
  },
  containerField: {
    marginBottom: 5,
    backgroundColor: colors.PRIMARY_LIGHTER
  },
  TextInputStyle: {
    backgroundColor: "#f4f4f4",
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 17,
    // borderColor: "#000000",
    marginBottom: 10
  },
  btnUpload: {
    height: 120,
    width: 120
  }
});

const Screen = props => {
  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState("");
  const [hideBtnChooseImage, setHideBtnChooseImage] = useState(true);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const _pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
      setHideBtnChooseImage(false);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, [getPermissionAsync]);

  return (
    <Layout
      style={{
        padding: 20,
        backgroundColor: colors.PRIMARY_LIGHTER,
        height: "100%"
      }}
    >
      <Layout style={styles.containerField}>
        <Text style={styles.text}>Weight</Text>
        <TextInput
          style={styles.TextInputStyle}
          keyboardType="numeric"
          value={weight.toString()}
          onChangeText={value => setWeight(Number(value))}
        />
      </Layout>

      <Layout style={styles.containerField}>
        <Text style={styles.text}>Date</Text>
        <Datepicker placeholder="Pick Date" date={date} onSelect={setDate} />
      </Layout>
      <Layout style={styles.containerField}>
        <Text style={styles.text}>Progress Photo</Text>

        {hideBtnChooseImage && (
          <Button
            onPress={_pickImage}
            style={styles.btnUpload}
            icon={() => <Icon name="plus-outline" />}
          />
        )}

        {image != "" && (
          <Image
            source={{ uri: image, width: 120, height: 120 }}
            style={{ width: 120, height: 120 }}
          />
        )}
      </Layout>

      <Button style={styles.submitBtn}>Submit</Button>
    </Layout>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Bodyweight Tracker Add"
});

export default Screen;
