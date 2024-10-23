//Kanban Board Constants
export const taskList = [
  {
    taskName: "Task 1",
    id: 1,
    stage: 3,
  },
  {
    taskName: "Task 2",
    id: 2,
    stage: 2,
  },
  {
    taskName: "Task 3",
    id: 3,
    stage: 4,
  },
  {
    taskName: "Task 4",
    id: 4,
    stage: 1,
  },
  {
    taskName: "Task 5",
    id: 5,
    stage: 1,
  },
  {
    taskName: "Task 6",
    id: 6,
    stage: 2,
  },
  {
    taskName: "Task 7",
    id: 7,
    stage: 4,
  },
];

//NextPrevSlice constants
export const slides = [
  {
    id: 1,
    title: "Hello World!",
  },
  {
    id: 2,
    title: "Hello Earth!",
  },
  {
    id: 3,
    title: "Hello Universe!",
  },
  {
    id: 4,
    title: "Hello Karma!",
  },
  {
    id: 5,
    title: "Hello God!",
  },
  {
    id: 6,
    title: "Hello Baby Jesus!",
  },
];

//sorted artices constanst
export const votes = [
  {
    partName: "Party 1",
    votes: 5238,
    entry: "2024/02/14",
  },
  {
    partName: "Party 7",
    votes: 8721,
    entry: "2024/03/29",
  },
  {
    partName: "Party 4",
    votes: 3195,
    entry: "2024/01/27",
  },
  {
    partName: "Party 9",
    votes: 9842,
    entry: "2024/04/11",
  },
  {
    partName: "Party 3",
    votes: 2514,
    entry: "2024/02/09",
  },
  {
    partName: "Party 5",
    votes: 1037,
    entry: "2024/03/01",
  },
  {
    partName: "Party 2",
    votes: 6482,
    entry: "2024/01/12",
  },
  {
    partName: "Party 8",
    votes: 4917,
    entry: "2024/04/20",
  },
  {
    partName: "Party 6",
    votes: 7123,
    entry: "2024/03/18",
  },
  {
    partName: "Party 10",
    votes: 1298,
    entry: "2024/04/05",
  },
];

//file explore constants
export const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};
