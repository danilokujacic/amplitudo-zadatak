type Filter = {
  key: string;
  value: string | number | null;
};

export const formatFilters = (filters: Filter[]) => {
  return filters.reduce((acc, filter) => {
    if (filter.value) {
      if (!acc.includes("?")) {
        return `?${filter.key}=${filter.value}`;
      }
      return `${acc}&${filter.key}=${filter.value}`;
    }
    return acc;
  }, "");
};
