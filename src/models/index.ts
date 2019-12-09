import todoModel, { TodoModel } from "./Todo.model";
import bodyWeightTrackerModel, {
  BodyWeightTrackerModel
} from "./BodyWeightTracker.model";

// The interface representing our entire store model
export interface StoreModel {
  todo: TodoModel;
  bodyWeightTracker: BodyWeightTrackerModel;
}

const storeModel: StoreModel = {
  todo: todoModel,
  bodyWeightTracker: bodyWeightTrackerModel
};

export default storeModel;
