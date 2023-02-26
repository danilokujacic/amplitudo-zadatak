const fs = require("fs");
const path = require("path");
const addIndexToBackendData = () => {
  fs.readFile(path.join(__dirname, "../../db.json"), "utf8", (err, data) => {
    const rawData = JSON.parse(data);
    const newData = {
      ...rawData,
      courses: rawData.courses.map((course, index) => ({
        id: index,
        ...course,
      })),
    };
    fs.writeFile(
      path.join(__dirname, "../../db-new.json"),
      JSON.stringify(newData),
      (err) => console.log(err)
    );
  });
};

addIndexToBackendData();
