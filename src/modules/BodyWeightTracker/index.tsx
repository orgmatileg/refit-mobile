import React from "react";
import { Button, Icon, List, ListItem, Layout } from "@ui-kitten/components";
import colors from "../../constants/colors";
import { useStoreState, useStoreActions } from "easy-peasy";

const Screen = props => {
  const datas = useStoreState(state => state.bodyWeightTracker.datas);
  const renderItemAccessory = style => (
    <Layout style={{ flex: 1, flexDirection: "row-reverse" }}>
      <Icon
        style={{ marginRight: 5 }}
        width={28}
        height={28}
        fill="red"
        name="trash-2-outline"
      />
      <Icon
        style={{ marginRight: 5 }}
        width={28}
        height={28}
        fill="blue"
        name="edit-outline"
      />
    </Layout>
  );
  const renderItemIcon = style => <Icon {...style} name="person" />;
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      icon={renderItemIcon}
      accessory={renderItemAccessory}
    />
  );

  return (
    <Layout>
      <Layout></Layout>
      <Layout>
        <List data={datas} renderItem={renderItem} />
      </Layout>
    </Layout>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Bodyweight Tracker",
  headerRight: () => {
    return (
      <Button
        appearance="ghost"
        onPress={() => navigation.navigate("BodyWeightTrackerScreenAdd")}
        icon={props => <Icon name="plus-outline" fill={colors.SECONDARY} />}
      />
    );
  }
});

Screen.params = {
  wew: "ggwp"
};

export default Screen;
