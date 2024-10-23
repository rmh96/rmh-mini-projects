import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//constants
import { explorer } from "./constants";
import BackToHome from "../components/BackToHome";
import { Suspense, lazy } from "react";
import Testing from "../components/Testing";

const TestSuspense = lazy(() => import("../components/TestingSuspense"));
const KanbanBoard = lazy(() => import("../components/KanbanBoard"));
const NextPrevSlide = lazy(() => import("../components/NextPrevSlides"));
const SortedArticles = lazy(() => import("../components/SortedArticles"));
const ProductList = lazy(() => import("../components/ProductList"));
const ButtonPagination = lazy(() => import("../components/ButtonPagination"));
const GridActivateAndDeActivate = lazy(() =>
  import("../components/GridActivateAndDeActivate")
);
const FileExplorer = lazy(() => import("../components/FileExplorer"));
const AutoCounterStopButton = lazy(() =>
  import("../components/AutoCounterStopButton")
);
const Accordion = lazy(() => import("../components/Accordion"));

export const appRouter = createBrowserRouter([
  {
    path: "testing",
    name: "Test platform",
    element: <Testing />,
  },
  { path: "/", element: <App /> },
  {
    name: "Testing Suspense",
    path: "/suspense",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <TestSuspense />
      </Suspense>
    ),
  },
  {
    name: "Kanban",
    path: "/kanban",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <KanbanBoard />
      </Suspense>
    ),
  },
  {
    name: "Next Prev Slides",
    path: "/nextprev",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <NextPrevSlide />
      </Suspense>
    ),
  },
  {
    name: "Sorted Articles",
    path: "/sorted-articles",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <SortedArticles />
      </Suspense>
    ),
  },
  {
    name: "Product List (Trying Intersection Observer... yet)",
    path: "/products",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <ProductList />
      </Suspense>
    ),
    stillWorking: true,
  },
  {
    name: "Feeds Loading based on Button Click",
    path: "/button-pagination",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <ButtonPagination />
      </Suspense>
    ),
  },
  {
    name: "3 * 3 Grid Select and Deselect",
    path: "/grid-activate-and-deactivate",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <GridActivateAndDeActivate />
      </Suspense>
    ),
  },
  {
    path: "/file-explorer",
    element: (
      <div className="ml-10 mt-20">
        <BackToHome />
        <Suspense fallback={<>Loading...</>}>
          <FileExplorer explorer={explorer} />
        </Suspense>
      </div>
    ),
  },
  {
    path: "auto-counter-stop-button",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <AutoCounterStopButton />
      </Suspense>
    ),
  },
  {
    name: "Accordion",
    path: "/accordion",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Accordion />
      </Suspense>
    ),
  },
]);

export const miniProjectNamesAndLinks = [
  {
    path: "testing",
    name: "Test platform",
  },
  { name: "Testing Suspense", path: "/suspense" },
  { name: "Kanban", path: "/kanban" },
  { name: "Next Prev Slides", path: "/nextprev" },
  { name: "Sorted Articles", path: "/sorted-articles" },
  {
    name: "Product List (Trying Intersection Observer... yet)",
    path: "/products",
    stillWorking: true,
  },
  {
    name: "Feeds Loading based on Button Click",
    path: "/button-pagination",
  },
  {
    name: "3 * 3 Grid Select and Deselect",
    path: "/grid-activate-and-deactivate",
  },
  {
    name: "File Explorer (Nested)",
    path: "/file-explorer",
  },
  {
    name: "Auto Counter & Stop button",
    path: "auto-counter-stop-button",
  },
  {
    name: "Tic Tac Toe",
    path: "/tic-tac-toe",
  },
];
