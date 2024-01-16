export type Level = {
  title: string;
  task: string;
  monstersShown: number[];
  monstersSelected: number[];
  solution: string;
  markup: string;
};
export const levelsList: Level[] = [
  {
    title: "Choose a monster",
    task: "Choose a monster by it's tag",
    monstersShown: [3],
    monstersSelected: [3],
    solution: "monster",
    markup: `
<div class="space">
  <monster />
</div>
    `,
  },
  {
    title: "Choose all",
    task: "Choose all monsters",
    monstersShown: [1, 2, 3, 4, 5, 6, 7, 8],
    monstersSelected: [1, 2, 3, 4, 5, 6, 7, 8],
    solution: "*",
    markup: `
<div class="space">
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
</div>
    `,
  },
  {
    title: "Upper Row",
    task: "Choose all monsters in the upper row",
    monstersShown: [1, 2, 3, 4, 5, 6, 7, 8],
    monstersSelected: [1, 2, 3, 4],
    solution: "upper > monster",
    markup: `
<div class="space">
  <upper>
    <monster />
    <monster />
    <monster />
    <monster />
  </upper>
  <lower>
    <monster />
    <monster />
    <monster />
    <monster />
  </lower>
</div>
    `,
  },
  {
    title: "Three-eyed",
    task: "Choose all three-eyed monsters",
    monstersShown: [1, 2, 3, 4, 5, 6, 7, 8],
    monstersSelected: [1, 4, 6, 8],
    solution: ".three-eyed",
    markup: `
<div class="space">
  <monster class="three-eyed"/>
  <monster />
  <monster />
  <monster class="three-eyed"/>
  <monster />
  <monster class="three-eyed"/>
  <monster />
  <monster class="three-eyed"/>
</div>
    `,
  },
  {
    title: "Odd ones",
    task: "Choose all odd monsters",
    monstersShown: [1, 2, 3, 4, 5, 6, 7, 8],
    monstersSelected: [2, 4, 6, 8],
    solution: "monster:nth-child(odd)",
    markup: `
<div class="space">
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
</div>
    `,
  },
  {
    title: "Red Monster",
    task: "Choose red monster",
    monstersShown: [1, 2, 3, 4, 5, 6, 7, 8],
    monstersSelected: [2],
    solution: "#red",
    markup: `
<div class="space">
  <monster />
  <monster id="red"/>
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
</div>
    `,
  },
  {
    title: "Choose first",
    task: "Choose first Monster in the Space",
    monstersShown: [1, 2, 3, 4, 5, 6, 7, 8],
    monstersSelected: [1],
    solution: "*",
    markup: `
<div class="space">
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
</div>
    `,
  },
  {
    title: "Choose nearest",
    task: "Choose a monster near the pink one",
    monstersShown: [6, 7],
    monstersSelected: [7],
    solution: "pink ~ monster",
    markup: `
<div class="space">
<monster class="pink"/>
<monster />
</div>
    `,
  },
  {
    title: "Choose all nearest",
    task: "Choose all monsters that are near the pink one",
    monstersShown: [5, 6, 7],
    monstersSelected: [5, 7],
    solution: "pink + monster",
    markup: `
<div class="space">
  <monster />
  <monster />
  <monster />
  <monster />
  <monster />
  <monster class="pink"/>
  <monster />
  <monster />
</div>
    `,
  },
  {
    title: "Choose all not two-eyed",
    task: "Choose all monsters that are not two-eyed",
    monstersShown: [1, 2, 3, 4, 5, 6, 7, 8],
    monstersSelected: [1, 4, 6, 8],
    solution: "monster:not(.two-eyed)",
    markup: `
    <div class="space">
<div>
<monster />
<monster class="two-eyed"/>
<monster class="two-eyed"/>
<monster />
<monster class="two-eyed"/>
<monster />
<monster class="two-eyed"/>
<monster />
</div>
</div>
    `,
  },
];
