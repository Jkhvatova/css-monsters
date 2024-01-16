import { EventEmitter } from "../controller/eventEmitter";
import { LayoutView } from "./layoutView";
import { Level, levelsList } from "../model/levels";
import { Monster, monsters } from "../model/monsters";
import { createElement } from "../model/element";
import { gameState } from "../model/state";

export class GameFieldView extends EventEmitter {
  view: LayoutView;
  main: HTMLElement | null;
  gameScreen: HTMLElement | null;
  currentLevel: number;
  constructor() {
    super();
    this.view = new LayoutView();
    this.gameScreen = null;
    this.main = null;
    this.currentLevel = gameState.currentLevel;
  }
  renderMonsters(
    monsters: Monster[],
    levels: Level[],
    currentLevel: number
  ): string[] {
    const content: string[] = [];
    const monstersToShow: number[] = levelsList[currentLevel].monstersShown;
    const monstersToSelect: number[] =
      levelsList[currentLevel].monstersSelected;

    monsters.forEach((monster): void => {
      let currentMonsterTooltip = "";
      let monsterSelectClass = "";
      if (monstersToShow.includes(monster.id)) {
        if (monstersToSelect.includes(monster.id)) {
          monsterSelectClass = " monster-selected";
        }
        if (monster.tooltip) {
          currentMonsterTooltip = monster.tooltip[currentLevel + 1];
        }
        content.push(
          `<div class="monster monster0${monster.id}${monsterSelectClass}"><div class="tooltip">${currentMonsterTooltip}</div></div>`
        );
      } else {
        content.push(
          `<div class="monster monster0${monster.id} monster-inv"></div>`
        );
      }
    });
    return content;
  }
  updateView(currentLevel: number): void {
    this.gameScreen = document.querySelector(".game-screen") as HTMLDivElement;
    if (this.gameScreen) {
      this.gameScreen.innerHTML = "";
      const upperRow: HTMLElement = createElement(this.gameScreen, "div", {
        className: "monsters-row upper-row",
      });
      const lowerRow: HTMLElement = createElement(this.gameScreen, "div", {
        className: "monsters-row lower-row",
      });
      upperRow.innerHTML = "";
      lowerRow.innerHTML = "";
      const renderedMosters: string[] = this.renderMonsters(
        monsters,
        levelsList,
        currentLevel
      );
      renderedMosters.forEach((monster, i): void => {
        i < renderedMosters.length / 2
          ? (upperRow.innerHTML += monster)
          : (lowerRow.innerHTML += monster);
      });
    }
    this.renterTooltips();
  }

  //tooltips
  renterTooltips(): void {
    const monsters = document.querySelectorAll(".monster-selected");
    monsters.forEach((monster) => {
      const tooltip: HTMLElement = monster.querySelector(
        ".tooltip"
      ) as HTMLElement;

      monster.addEventListener("mouseover", () => {
        if (tooltip) {
          tooltip.style.opacity = "1";
        }
      });
      monster.addEventListener("mouseleave", () => {
        if (tooltip) {
          tooltip.style.opacity = "0";
        }
      });
    });
  }
  animationOnWin(): void {
    const monsters = document.querySelectorAll(".monster-selected");
    monsters.forEach((monster) => {
      monster.classList.add("monster-deleted");
    });
  }
  draw(level: number): void {
    const game: HTMLDivElement = document.querySelector(
      ".game"
    ) as HTMLDivElement;
    const gameScreen: HTMLDivElement = document.createElement("div");
    gameScreen.classList.add("game-screen");
    game.appendChild(gameScreen);
    this.updateView(level);
  }
}
