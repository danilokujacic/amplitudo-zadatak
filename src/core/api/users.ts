export const getMe = async () =>
  await (await fetch("http://localhost:3001/me")).json();

export const getMentors = async () =>
  await (await fetch("http://localhost:3001/mentors")).json();
