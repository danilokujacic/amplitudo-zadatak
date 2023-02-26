import { RouteProps } from "react-router-dom";
import Courses from "../../pages/Courses";

type Route = RouteProps & {
  label: string;
  path: string;
};

const routes: Route[] = [
  {
    label: "Pregled",
    path: "/overview",
    element: <div>Example.</div>,
  },
  {
    label: "Obuke",
    path: "/courses",
    element: <Courses />,
    index: true,
  },
  {
    label: "Predavanja",
    path: "/predavanja",
    element: <div>Example.</div>,
  },
  {
    label: "Polaznici",
    path: "/starters",
    element: <div>Example.</div>,
  },
  {
    label: "Kandidati",
    path: "/candidates",
    element: <div>Example.</div>,
  },
  {
    label: "Zadaci",
    path: "/tasks",
    element: <div>Example.</div>,
  },
];

export default routes;
