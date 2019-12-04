import React from "react";
import AppNavigator from "./src/modules";
import { createAppContainer } from "react-navigation";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light } from "@eva-design/eva";

const AppContainer = createAppContainer(AppNavigator);

const App: React.FC = props => {
  const handleNavigationChange = nav => {
    // console.log(props);
  };
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={light}>
        <AppContainer
          onNavigationStateChange={handleNavigationChange}
          uriPrefix="/app"
        />
      </ApplicationProvider>
    </React.Fragment>
  );
};

export default App;
