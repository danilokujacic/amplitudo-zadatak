import { Spin } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CourseForm from "../features/CourseForm";
import { getCourse } from "../core/api/courses";

const Course = () => {
  const data = useParams();
  const {
    data: course,
    isLoading,
    refetch,
  } = useQuery(
    ["course", data.id],
    async () => await getCourse(data.id || ""),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (data.id) {
      refetch();
    }
  }, [data, refetch]);

  if (isLoading) {
    return <Spin size="large" />;
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-secondary text-2xl text-center font-bold uppercase">
        {data.id ? "Izmijeni obuku" : "Nova obuka"}
      </h1>
      <div className="w-full h-full flex justify-center">
        <div className="w-[310px]">
          <CourseForm data={course} id={data.id} />
        </div>
      </div>
    </div>
  );
};

export default Course;
