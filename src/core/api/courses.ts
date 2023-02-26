import { formatFilters } from "../../helpers/formatFilter";
import { courseFilters } from "../../shared/types";

export const getCourse = async (id: string) =>
  await (await fetch("http://localhost:3001/courses/" + id)).json();

export const getCourses = async ({
  searchValue,
  selectedYear,
  selectedCategory,
}: courseFilters) => {
  const filter = formatFilters([
    {
      key: "q",
      value: searchValue && searchValue !== "" ? searchValue : null,
    },
    {
      key: "name",
      value:
        selectedCategory && selectedCategory !== "0" ? selectedCategory : null,
    },
    {
      key: "year",
      value: selectedYear && selectedYear !== "0" ? selectedYear : null,
    },
  ]);

  const courses = await (
    await fetch(`http://localhost:3001/courses${filter}`)
  ).json();

  return courses;
};
