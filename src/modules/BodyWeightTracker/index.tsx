import React from "react";
import { Button, Icon, List, ListItem, Layout } from "@ui-kitten/components";
import colors from "../../constants/colors";

export const BodyWeightTrackerNavigation = {
  screen: Screen,
  navigationOptions: {
    headerTitle: "Bodyweight Tracker",
    headerRight: (
      <Button
        appearance="ghost"
        icon={() => <Icon name="plus-outline" fill={colors.SECONDARY} />}
      />
    )
  }
};

const data = new Array(8).fill({
  title: "Title for Item",
  description: "Description for Item"
});

export default function Screen() {
  const renderItemAccessory = style => <Button style={style}>FOLLOW</Button>;

  const renderItemIcon = style => <Icon {...style} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      icon={renderItemIcon}
      accessory={renderItemAccessory}
    />
  );

  return (
    <Layout>
      <Layout></Layout>
      <Layout>
        <List data={data} renderItem={renderItem} />
      </Layout>
    </Layout>
  );
}
