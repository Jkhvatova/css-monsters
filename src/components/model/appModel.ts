import { levelsList } from "./levels";
import { State } from "./state";

export class AppModel {
  levels: typeof levelsList;
  state: State;
  constructor() {
    this.levels = levelsList;
    this.state = new State();
  }
  loadModel() {
    this.state.loadInitState();
  }
}
