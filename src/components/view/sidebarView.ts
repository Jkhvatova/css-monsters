import { createElement } from "../model/element";
import { levelsList } from "../model/levels";
import { LayoutView } from "./layoutView";
export class SidebarView extends LayoutView {
  levels: typeof levelsList;
  public currentLevel: number;
  constructor() {
    super();
    this.levels = levelsList;
    this.currentLevel = 0;
  }
  draw() {
    const sidebar: HTMLDivElement = document.querySelector(
      ".sidebar",
    ) as HTMLDivElement;
    const sidebarHeader = createElement(sidebar, "h2", {
      className: "levels-title",
      textContent: "Choose Level",
    });
    const sidebarTask = createElement(sidebar, "p", {
      className: "task",
    });
    sidebarTask.style.border = "1px solid blue";
    const sidebarLevels = createElement(sidebar, "ul", {
      className: "levels-list",
    });
    levelsList.forEach((level, i: number) => {
      const li: HTMLLIElement = document.createElement("li");
      const levelNumber = `${i + 1}`;
      li.className = "level";
      li.dataset.level = levelNumber;
      li.innerHTML = `${levelNumber} ${level.title}`;
      li.addEventListener("click", () => {
        this.emit("event:level-changed", { name: levelNumber });
      });
      sidebarLevels.appendChild(li);
    });
    if (sidebar) {
      sidebar.append(sidebarLevels);
    }
  }
  highlightCurrentLevel(currentLevel: number) {
    const levels: NodeListOf<HTMLLIElement> =
      document.querySelectorAll(".level");
    levels.forEach((level: HTMLLIElement) => {
      if (
        level.getAttribute("data-level") &&
        Number(level.getAttribute("data-level")) == currentLevel
      ) {
        level.classList.add("level-active");
      } else {
        level.classList.remove("level-active");
      }
    });
  }
  showLevelTask(currentLevel: number) {
    const sidebarTask: HTMLElement = document.querySelector(
      ".task",
    ) as HTMLElement;
    sidebarTask.innerHTML = `Task: ${levelsList[currentLevel - 1].task}`;
  }
}
