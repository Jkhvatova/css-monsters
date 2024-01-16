type Tooltip = { [key: number]: string };
export type Monster = {
  id: number;
  class: string;
  img: string;
  tooltip: Tooltip;
};
export const monsters: Monster[] = [
  {
    id: 1,
    class: "monster01",
    img: "./assets/img/monster01.png",
    tooltip: {
      2: "&lt;monster&gt;&lt;monster/&gt;",
      3: "&lt;monster&gt;&lt;monster/&gt;",
      4: `&lt;monster class="three-eyed"/&gt;`,
      7: "&lt;monster&gt;&lt;monster/&gt;",
      10: `&lt;monster class="two-eyed"&gt;&lt;monster/&gt;`,
    },
  },
  {
    id: 2,
    class: "monster02",
    img: "./assets/img/monster02.png",
    tooltip: {
      2: "&lt;monster&gt;&lt;monster/&gt;",
      3: "&lt;monster&gt;&lt;monster/&gt;",
      5: "&lt;monster&gt;&lt;monster/&gt;",
      6: "&lt;monster id='red'&gt;&lt;monster/&gt;",
      10: "&lt;monster&gt;&lt;monster/&gt;",
    },
  },
  {
    id: 3,
    class: "monster03",
    img: "./assets/img/monster03.png",
    tooltip: {
      1: "&lt;monster&gt;&lt;monster/&gt;",
      2: "&lt;monster&gt;&lt;monster/&gt;",
      3: "&lt;monster&gt;&lt;monster/&gt;",
      10: "&lt;monster&gt;&lt;monster/&gt;",
    },
  },
  {
    id: 4,
    class: "monster04",
    img: "./assets/img/monster04.png",
    tooltip: {
      2: "&lt;monster&gt;&lt;monster/&gt;",
      3: "&lt;monster&gt;&lt;monster/&gt;",
      4: `&lt;monster class="three-eyed"/&gt;`,
      5: "&lt;monster&gt;&lt;monster/&gt;",
      10: "&lt;monster&gt;&lt;monster/&gt;",
    },
  },
  {
    id: 5,
    class: "monster05",
    img: "./assets/img/monster05.png",
    tooltip: {
      2: "&lt;monster&gt;&lt;monster/&gt;",
      9: "&lt;monster&gt;&lt;monster/&gt;",
      10: `&lt;monster class="two-eyed"&gt;&lt;monster/&gt;`,
    },
  },
  {
    id: 6,
    class: "monster06",
    img: "./assets/img/monster06.png",
    tooltip: {
      2: "&lt;monster&gt;&lt;monster/&gt;",
      4: `&lt;monster class="three-eyed"/&gt;`,
      5: "&lt;monster&gt;&lt;monster/&gt;",
      8: `&lt;monster class="pink"&gt;&lt;monster/&gt;`,
      9: "&lt;monster&gt;&lt;monster/&gt;",
      10: "&lt;monster&gt;&lt;monster/&gt;",
    },
  },
  {
    id: 7,
    class: "monster07",
    img: "./assets/img/monster07.png",
    tooltip: {
      2: "&lt;monster&gt;&lt;monster/&gt;",
      8: "&lt;monster&gt;&lt;monster/&gt;",
      9: "&lt;monster&gt;&lt;monster/&gt;",
      10: `&lt;monster class="two-eyed"&gt;&lt;monster/&gt;`,
    },
  },
  {
    id: 8,
    class: "monster08",
    img: "./assets/img/monster08.png",
    tooltip: {
      2: "&lt;monster&gt;&lt;monster/&gt;",
      4: `&lt;monster class="three-eyed"/&gt;`,
      5: "&lt;monster&gt;&lt;monster/&gt;",
      10: `&lt;monster class="two-eyed"&gt;&lt;monster/&gt;`,
    },
  },
];
