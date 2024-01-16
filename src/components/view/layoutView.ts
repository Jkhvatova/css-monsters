import { EventEmitter } from "../controller/eventEmitter";
import { createElement } from "../model/element";

export class LayoutView extends EventEmitter {
  container: HTMLElement | null;
  row: HTMLElement | null;
  main: HTMLElement | null;
  sidebar: HTMLElement | null;

  constructor() {
    super();
    this.container = null;
    this.row = null;
    this.main = null;
    this.sidebar = null;
  }
  draw(): void | HTMLElement {
    //create app container
    this.container = createElement(document.body, "div", {
      className: "app-container container-fluid",
    });
    this.row = createElement(this.container, "div", {
      className: "row",
    });

    // create main and sidebar
    this.main = createElement(this.row, "div", {
      className: "main col-sm-12 col-md-9",
    });
    this.sidebar = createElement(this.row, "div", {
      className: "sidebar col-sm-12 col-md-3",
    });
    //create header
    createElement(this.main, "h1", {
      textContent: "Monsters Selector game",
    });

    //create game field
    createElement(this.main, "div", {
      className: "game",
    });
    // create editors
    const editorsRow: HTMLElement = createElement(this.main, "div", {
      className: "row editors-row",
    });
    // create css-editor
    const cssEditor: HTMLElement = createElement(editorsRow, "div", {
      className: "col-sm-12 col-md-6 css-editor",
    });
    createElement(cssEditor, "h3", {
      className: "editor-header",
      textContent: "CSS",
    });
    const cssArea = createElement(cssEditor, "div", {
      className: "editor-area",
    });
    // create html-editor
    const htmlEditor: HTMLElement = createElement(editorsRow, "div", {
      className: "col-sm-12 col-md-6 html-editor",
    });
    createElement(htmlEditor, "h3", {
      className: "editor-header",
      textContent: "HTML",
    });
    const htmlArea = createElement(htmlEditor, "div", {
      className: "editor-area",
    });
    return htmlArea;
  }
  animationOnLose() {
    const editorsRow: HTMLElement = document.querySelector(
      ".editors-row"
    ) as HTMLElement;
    editorsRow.classList.add("wrong");
    editorsRow.addEventListener("animationend", () => {
      editorsRow.classList.remove("wrong");
    });
  }
}
