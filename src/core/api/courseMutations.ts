import { CourseData } from "../../shared/types";

export const addCourse = async (data: CourseData) => {
  const response = await fetch("http://localhost:3001/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
export const editCourse = async (data: CourseData & { id: string }) => {
  const response = await fetch("http://localhost:3001/courses/" + data.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
