export const getSelectCourses = async () =>
  await (await fetch("http://localhost:3001/select-courses")).json();
