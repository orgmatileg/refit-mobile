import React from "react";
import AppNavigator from "./src/modules";
import { createAppContainer } from "react-navigation";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light } from "@eva-design/eva";
import { createStore, StoreProvider } from "easy-peasy";
import storeModels from "./src/models";

const store = createStore(storeModels);

const AppContainer = createAppContainer(AppNavigator);

const App: React.FC = props => {
  const handleNavigationChange = nav => {
    // console.log(props);
  };

  return (
    <React.Fragment>
      <StoreProvider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={light}>
          <AppContainer
            onNavigationStateChange={handleNavigationChange}
            uriPrefix="/app"
          />
        </ApplicationProvider>
      </StoreProvider>
    </React.Fragment>
  );
};

export default App;
