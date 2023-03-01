// Library modules
import moment from "moment";

// Components
import RowActions from "./RowActions";

export const colDefs = [
  {
    field: "name",
    headerName: "Naziv obuke",
    flex: 2,
    minWidth: 150,
    cellClass: "first-cell  font-bold text-md box-border py-2",
    headerClass: "w-full uppercase first-cell  font-bold text-md flex-1",
  },
  {
    field: "mentor",
    flex: 2,
    minWidth: 150,
    cellClass: "  text-md box-border py-2",
    headerClass: "w-full uppercase font-bold text-md flex-1",
  },
  {
    field: "startDate",
    headerName: "Pocetak",
    minWidth: 120,
    flex: 1,
    cellClass:
      "w-full min-w-auto  min-w-[100px] text-md flex-1 box-border py-2",
    headerClass: "w-full uppercase min-w-[100px] font-bold text-md flex-1",
    valueGetter: (params: any) =>
      moment(params.data.startDate).format("DD.MM.yyyy"),
  },
  {
    field: "endDate",
    minWidth: 120,
    flex: 1,
    headerName: "Zavrsetak",
    cellClass: "w-full min-w-[100px]   text-md flex-1 box-border py-2",
    headerClass: "w-full uppercase min-w-[100px] font-bold text-md flex-1",
    valueGetter: (params: any) =>
      moment(params.data.endDate).format("DD.MM.yyyy"),
  },
  {
    field: "schedule",
    headerName: "Raspored",
    minWidth: 150,
    flex: 1,
    cellClass: "w-full   text-md flex-1 box-border py-2",
    headerClass: "w-full uppercase  font-bold text-md flex-1",
    valueGetter: (params: any) => params.data.schedule.join(" · "),
  },
  {
    field: "actions",
    flex: 2,
    minWidth: 150,
    headerClass: "header-hidden",
    cellRenderer: RowActions,
  },
];
