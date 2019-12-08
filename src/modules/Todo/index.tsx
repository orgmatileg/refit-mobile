import React from "react";
import {
  Button,
  Icon,
  List,
  ListItem,
  Layout,
  Text,
  CheckBox
} from "@ui-kitten/components";
import colors from "../../constants/colors";
import { useStoreState, useStoreActions } from "../../helpers/easyPeasyHook";

// TODO: Create add button right side on Text List
// FIX: List not show with flex

const Screen = props => {
  const datas = useStoreState(state => state.todo.datas);
  const datasDone = useStoreState(state => state.todo.datasDone);
  const handleCheckBoxToDone = useStoreActions(
    actions => actions.todo.addToDone
  );
  const handleCheckBoxToUnDone = useStoreActions(
    actions => actions.todo.addToUnDone
  );

  const renderItemList = ({ item, index }) => (
    <ListItem
      title={`${item.title}`}
      accessory={() => (
        <CheckBox onChange={() => handleCheckBoxToDone(item)} checked={false} />
      )}
    />
  );

  const renderItemDone = ({ item, index }) => (
    <ListItem
      titleStyle={{
        textDecorationLine: "line-through",
        textDecorationStyle: "solid"
      }}
      title={`${item.title}`}
      accessory={() => (
        <CheckBox
          onChange={() => handleCheckBoxToUnDone(item)}
          checked={true}
        />
      )}
    />
  );

  const TodoList = () => {
    return <List data={datas} renderItem={renderItemList} />;
  };

  const TodoDone = () => {
    return <List data={datasDone} renderItem={renderItemDone} />;
  };

  return (
    <Layout>
      <Layout>
        <Layout
          style={{ backgroundColor: "#F0F0F0", flex: 1, flexDirection: "row" }}
        >
          <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ margin: 15 }}>List</Text>
          </Layout>
          <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Icon
              name="plus-outline"
              width={25}
              height={25}
              fill={colors.SECONDARY}
            />
          </Layout>
        </Layout>
        <TodoList />
      </Layout>
      <Layout style={{ backgroundColor: "#F0F0F0" }}>
        <Text style={{ margin: 15 }}>Done</Text>
        <TodoDone />
      </Layout>
    </Layout>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Todo"
});

Screen.params = {
  wew: "ggwp"
};

export default Screen;
