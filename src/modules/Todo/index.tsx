import React, { useState } from "react";
import { TextInput, View, ScrollView } from "react-native";
import {
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
  const handleAddTodo = useStoreActions(actions => actions.todo.add);

  const [isEditOrAdd, setIsEditOrAdd] = useState(false);
  const [todo, setTodo] = useState("");

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
    <View>
      <ScrollView>
        <Layout>
          <Layout
            style={{
              backgroundColor: "#F0F0F0",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <Layout
              style={{
                backgroundColor: "#F0F0F0"
              }}
            >
              <Text style={{ margin: 15 }}>List</Text>
            </Layout>
            {!isEditOrAdd ? (
              <Layout
                onTouchStart={() => setIsEditOrAdd(true)}
                style={{
                  backgroundColor: "#F0F0F0",
                  alignSelf: "center"
                }}
              >
                <Icon
                  style={{ marginRight: 15 }}
                  name="plus-outline"
                  width={25}
                  height={25}
                  fill={colors.SECONDARY}
                />
              </Layout>
            ) : null}
          </Layout>
          <TodoList />
          {!isEditOrAdd ? null : (
            <Layout
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <Layout style={{ flex: 5 }}>
                <TextInput
                  value={todo}
                  onChangeText={text => setTodo(text)}
                  placeholder="Write your todo here!"
                  style={{
                    paddingLeft: 10,
                    margin: 5,
                    backgroundColor: "#f4f4f4"
                  }}
                />
              </Layout>
              <Layout
                onTouchStart={() => {
                  handleAddTodo({ title: todo });
                  setIsEditOrAdd(false);
                  setTodo("");
                }}
                style={{
                  marginLeft: "auto",
                  marginRight: 15,
                  alignSelf: "center",
                  backgroundColor: "#f4f4f4"
                }}
              >
                <Icon
                  style={{ width: 25, height: 25 }}
                  name="checkmark-outline"
                  fill={colors.SECONDARY}
                />
              </Layout>
            </Layout>
          )}
        </Layout>
        <Layout style={{ backgroundColor: "#F0F0F0" }}>
          <Text style={{ margin: 15 }}>Done</Text>
          <TodoDone />
        </Layout>
      </ScrollView>
    </View>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Todo"
});

Screen.params = {
  wew: "ggwp"
};

export default Screen;
