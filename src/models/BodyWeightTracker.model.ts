import { Action, action } from "easy-peasy";

interface BodyWeightTrackerItem {
  title: string;
  description: string;
}

export interface BodyWeightTrackerModel {
  datas: BodyWeightTrackerItem[];
  add: Action<BodyWeightTrackerModel, BodyWeightTrackerItem>;
}

const bodyWeightTrackerModel: BodyWeightTrackerModel = {
  datas: new Array(8).fill({
    title: "2 December 2019",
    description: "50 kg"
  }),
  add: action((state: any, payload) => {
    state.datas.push(payload);
  })
};

export default bodyWeightTrackerModel;
