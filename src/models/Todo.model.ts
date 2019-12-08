import { Action, action } from "easy-peasy";

interface TodoItem {
  title: string;
}

export interface TodoModel {
  datas: TodoItem[];
  datasDone: TodoItem[];
  add: Action<TodoModel, TodoItem>;
  addToDone: Action<TodoModel, TodoItem>;
  addToUnDone: Action<TodoModel, TodoItem>;
}

const todoModel: TodoModel = {
  datas: [
    { title: "Deploy to kubernetes" },
    { title: "Create Disaster recovery" },
    { title: "Migrate VPS to DO" },
    { title: "Write Wiki" },
    { title: "Create store" },
    { title: "Wrap application" }
  ],
  datasDone: [],
  add: action((state, payload) => {
    // state.items.push(payload);
  }),
  addToDone: action((state, payload) => {
    state.datas = state.datas.filter(data => data.title != payload.title);
    state.datasDone.push(payload);
  }),
  addToUnDone: action((state, payload) => {
    state.datasDone = state.datasDone.filter(
      data => data.title != payload.title
    );
    state.datas.push(payload);
  })
};

export default todoModel;
