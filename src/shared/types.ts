export type User = {
  name: string;
  email: string;
};

export type courseFilters = {
  searchValue: string | null;
  selectedYear: string | null;
  selectedCategory: string | null;
};

export type SelectOption = { key: string | number; label: string } | string;

export type AsyncSelectOption = {
  queryKey: string;
  queryFn: () => Promise<SelectOption[]>;
};

export type CourseData = {
  course: string;
  mentor: string;
  startDate: string;
  endDate: string;
  schedule: string[];
  workingPlan: string | null;
};
