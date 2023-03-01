// Library modules
import { useQuery } from "react-query";
import { useCallback, useState } from "react";

// Components
import { AgGridReact } from "ag-grid-react";
import GridFilters from "./Filters";

// Grid styles
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./gridStyles.css";

// Api
import { getCourses } from "../../core/api/courses";

// Types
import { FilterValues } from "./types";
import GridActions from "./Actions";
import { colDefs } from "./config";

const Grid = () => {
  // Hooks
  const [filterValues, setFilterValues] = useState<FilterValues>({
    selectedYear: null,
    selectedCategory: null,
    searchValue: null,
  });
  const [columnDefs] = useState(colDefs);
  const { data } = useQuery(["courses", filterValues], () =>
    getCourses(filterValues)
  );

  // Utilities
  const handleFiltersChange = useCallback((data: FilterValues) => {
    setFilterValues(data);
  }, []);

  return (
    <div className="h-full">
      <div className="flex justify-between items-center pb-10 relative z-20">
        <GridFilters handleFiltersChange={handleFiltersChange} />
        <GridActions />
      </div>
      <div className="ag-theme-alpine w-full h-[65vh] text-secondary relative z-10">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          rowHeight={62}
          className="rounded-[20px] overflow-hidden border-[1px] border-border"
          animateRows
          paginationPageSize={10}
          pagination
        />
      </div>
    </div>
  );
};

export default Grid;
