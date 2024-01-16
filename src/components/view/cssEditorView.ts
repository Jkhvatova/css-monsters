import { createElement } from "../model/element";
import { HtmlEditorView } from "./htmlEditorView";
import { LayoutView } from "./layoutView";

export class cssEditorView extends LayoutView {
  area: HTMLElement | null;
  constructor() {
    super();
    this.area = null;
  }
  draw(): void {
    this.area = document.querySelector(".css-editor > .editor-area");
    if (this.area) {
      const pre: HTMLElement = createElement(this.area, "pre", {
        className: "line-numbers",
      });
      const cssCode: HTMLElement = createElement(pre, "code", {
        className: "language-css css-code",
        contentEditable: "true",
      });
    }
    const editorsRow: HTMLElement = document.querySelector(
      ".editors-row"
    ) as HTMLElement;
    const enterBtn: HTMLElement = createElement(editorsRow, "button", {
      className: "btn btn-primary",
      textContent: "enter",
    });
  }
  updateView(): void {
    const cssCode: HTMLElement = document.querySelector(
      ".css-code"
    ) as HTMLElement;
    cssCode.innerHTML = "";
  }
}
