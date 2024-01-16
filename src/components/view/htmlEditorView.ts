import { LayoutView } from "./layoutView";
import Prism from "prismjs";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { levelsList } from "../model/levels";
import { createElement } from "../model/element";

export class HtmlEditorView extends LayoutView {
  area: HTMLElement | null;
  constructor() {
    super();
    this.area = null;
  }
  usePrismHighlighter(currentLevel: number): string {
    const levelCode: string = levelsList[currentLevel].markup;
    const html: string = Prism.highlight(
      levelCode,
      Prism.languages.markup,
      "markup"
    );
    return html;
  }
  drawEditor(currentLevel: number): void {
    this.area = document.querySelector(".html-editor > .editor-area");
    if (this.area) {
      const pre: HTMLElement = createElement(this.area, "pre", {
        className: "line-numbers",
      });
      const htmlCode: HTMLElement = createElement(pre, "code", {
        className: "language-markup html-code",
        contentEditable: "true",
      });
      htmlCode.innerHTML = this.usePrismHighlighter(currentLevel - 1);
    }
  }
  updateView(currentLevel: number) {
    const code: HTMLDivElement = document.querySelector(
      ".html-code"
    ) as HTMLDivElement;

    if (code) {
      code.innerHTML = "";
      code.innerHTML = this.usePrismHighlighter(currentLevel - 1);
    }
  }
}
