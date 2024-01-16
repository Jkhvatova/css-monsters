import { AppView } from "../view/appView";
import { AppModel } from "../model/appModel";
export class AppController {
  model: AppModel;
  view: AppView;
  constructor() {
    this.model = new AppModel();
    this.view = new AppView();
  }
  start() {
    this.model.loadModel();
    this.view.drawGameField();
    this.view.controlUserInput();
  }
}
