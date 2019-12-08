import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import colors from "../constants/colors";

// Screen
import HomeScreen from "./Home";
import BodyWeightTrackerScreen from "./BodyWeightTracker";
import BodyWeightTrackerScreenAdd from "./BodyWeightTrackerAdd";
import TodoScreen from "./Todo";

// Stack Navigation
const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Home"
      }
    }
  },
  {
    initialRouteName: "HomeScreen",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: colors.PRIMARY },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: colors.SECONDARY
    }
  }
);

const BodyWeightTrackerStack = createStackNavigator(
  {
    // Body Weight Screen
    BodyWeightTrackerScreen: BodyWeightTrackerScreen,
    BodyWeightTrackerScreenAdd: BodyWeightTrackerScreenAdd
  },
  {
    initialRouteName: "BodyWeightTrackerScreen",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: colors.PRIMARY },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: colors.SECONDARY
    }
  }
);

const TodoStack = createStackNavigator(
  {
    TodoScreen: TodoScreen
  },
  {
    initialRouteName: "TodoScreen",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: colors.PRIMARY },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: colors.SECONDARY
    }
  }
);

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: (
          <MaterialIcons
            name="home"
            size={32}
            color={colors.SECONDARY}
          ></MaterialIcons>
        )
      }
    },
    BodyWeightTracker: {
      screen: BodyWeightTrackerStack,
      navigationOptions: {
        tabBarIcon: (
          <FontAwesome5
            name="weight"
            size={22}
            color={colors.SECONDARY}
          ></FontAwesome5>
        )
      }
    },
    Friends: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: (
          <FontAwesome5
            name="dumbbell"
            size={25}
            color={colors.SECONDARY}
          ></FontAwesome5>
        )
      }
    },
    Messages: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: (
          <FontAwesome5
            name="stopwatch"
            size={25}
            color={colors.SECONDARY}
          ></FontAwesome5>
        )
      }
    },
    Todo: {
      screen: TodoStack,
      navigationOptions: {
        tabBarIcon: (
          <FontAwesome5
            name="check-square"
            size={25}
            color={colors.SECONDARY}
          ></FontAwesome5>
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: { backgroundColor: colors.PRIMARY }
    }
  }
);
