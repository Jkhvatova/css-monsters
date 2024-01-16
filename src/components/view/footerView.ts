import { createElement } from "../model/element";

export class FooterView {
  draw(): void {
    const main: HTMLElement = document.querySelector(".main") as HTMLElement;
    const footer: HTMLElement = createElement(main, "footer", {
      className: "footer",
    });
    const footerRow: HTMLElement = createElement(footer, "div", {
      className: "footer-row row",
    });
    createElement(footerRow, "div", {
      className: "github col-md-4",
      innerHTML: `<a href="https://github.com/Jkhvatova/">github</a>`,
    });
    createElement(footerRow, "div", {
      className: "credits col-md-4",
      textContent: "2023",
    });
    createElement(footerRow, "a", {
      className: "school col-md-4",
      href: `https://rs.school/js/`,
    });
  }
}
