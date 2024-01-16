import { EventEmitter } from "../controller/eventEmitter";
import { LayoutView } from "./layoutView";
import { cssEditorView } from "./cssEditorView";
import { HtmlEditorView } from "./htmlEditorView";
import { SidebarView } from "./sidebarView";
import { GameFieldView } from "./gameFieldView";
import { FooterView } from "./footerView";
import { gameState } from "../model/state";
import { levelsList } from "../model/levels";

export class AppView extends EventEmitter {
  view: LayoutView;
  gameField: GameFieldView;
  cssView: cssEditorView;
  HtmlView: HtmlEditorView;
  sidebar: SidebarView;
  currentLevel: number;
  footer: FooterView;

  constructor() {
    super();
    this.view = new LayoutView();
    this.gameField = new GameFieldView();
    this.cssView = new cssEditorView();
    this.HtmlView = new HtmlEditorView();
    this.sidebar = new SidebarView();
    this.footer = new FooterView();
    this.currentLevel = 0;
  }
  checkState(): void {
    this.sidebar.on("event:level-changed", (data): void => {
      this.currentLevel = Number(JSON.stringify(data.name).replace(/\D/g, ""));
      gameState.currentLevel = this.currentLevel;
      localStorage.setItem("currentLevel", gameState.currentLevel.toString());
      this.HtmlView.updateView(gameState.currentLevel);
      this.gameField.updateView(gameState.currentLevel - 1);
      this.sidebar.highlightCurrentLevel(gameState.currentLevel);
      this.sidebar.showLevelTask(gameState.currentLevel);
    });
  }
  drawGameField(): void {
    this.view.draw();
    this.cssView.draw();
    const localStorageLevel: string =
      localStorage.getItem("currentLevel") || ("1" as string);
    gameState.currentLevel = +localStorageLevel;
    this.gameField.draw(gameState.currentLevel - 1);
    this.HtmlView.drawEditor(gameState.currentLevel);
    this.sidebar.draw();
    this.sidebar.highlightCurrentLevel(gameState.currentLevel);
    this.sidebar.showLevelTask(gameState.currentLevel);
    this.footer.draw();
    this.checkState();
  }
  controlUserInput(): void {
    const input: HTMLElement = document.querySelector(
      ".css-code",
    ) as HTMLElement;
    const button: HTMLElement = document.querySelector(".btn") as HTMLElement;

    const checkInput = (): void => {
      const inputValue = { name: input.innerText };
      this.emit("event:name-changed", inputValue);
    };
    if (button) {
      button.addEventListener("click", checkInput);
    }
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        checkInput();
      }
    });
    this.on("event:name-changed", (data) => {
      gameState.userAnswer = data.name.replace(/\n/g, "");
      if (
        gameState.userAnswer == levelsList[gameState.currentLevel - 1].solution
      ) {
        this.gameField.animationOnWin();
        gameState.isWon = true;
        gameState.currentLevel = gameState.currentLevel + 1;
        if (gameState.currentLevel > levelsList.length) {
          gameState.currentLevel = levelsList.length;
          alert("You won!");
        }
        localStorage.setItem("currentLevel", gameState.currentLevel.toString());
        this.emit("event:level-changed", {
          name: gameState.currentLevel.toString(),
        });
        this.HtmlView.updateView(gameState.currentLevel);
        this.cssView.updateView();
        this.gameField.updateView(gameState.currentLevel - 1);
        this.sidebar.highlightCurrentLevel(gameState.currentLevel);
        this.sidebar.showLevelTask(gameState.currentLevel);
      } else {
        this.view.animationOnLose();
        gameState.isWon = false;
      }
    });
  }
}
