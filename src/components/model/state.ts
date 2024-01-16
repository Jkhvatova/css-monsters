import { EventEmitter } from "../controller/eventEmitter";
import { levelsList } from "./levels";
import { SidebarView } from "../view/sidebarView";

export const gameState = {
  currentLevel: 1,
  userAnswer: "",
  isWon: false,
};

export class State extends EventEmitter {
  currentState: Record<string, unknown>;
  levels: typeof levelsList;
  sidebar: SidebarView;
  constructor() {
    super();
    this.currentState = {};
    this.levels = levelsList;
    this.sidebar = new SidebarView();
  }
  loadInitState() {
    this.currentState = {
      level: levelsList[0],
    };
    return this.currentState;
  }
}
