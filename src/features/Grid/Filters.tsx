//Library modules
import { FunctionComponent } from "react";

//Utils
import debounceValue from "../../utils/debounceValue";

//Components
import SearchInput from "../../components/FilterInputs/SearchInput";
import SelectInput from "../../components/FilterInputs/SelectInput";
import { DownOutlined } from "@ant-design/icons";

interface IGridFiltersProps {
  handleFiltersChange: (key: string, value: string) => void;
}

const GridFilters: FunctionComponent<IGridFiltersProps> = ({
  handleFiltersChange,
}) => {
  return (
    <div className="flex justify-start w-1/2 xl:space-x-[14px] flex-col xl:flex-row">
      <div className="flex w-full items-center justify-between xl:justify-start xl:order-1  order-2 ">
        <div className="w-1/2 mr-[14px] xl:w-[178px]">
          <SelectInput
            placeholder="Izaberi godinu"
            bordered={false}
            className="border-[1px] text-ltgray border-border rounded-[20px] w-full "
            suffixIcon={<DownOutlined className="text-selectText" />}
            onChange={(value) => {
              handleFiltersChange("selectedYear", value);
            }}
            options={["2023", "2022"]}
          />
        </div>
        <div className="w-1/2 xl:max-w-[233px] xl:w-[40%] xl:min-w-[180px] ">
          <SelectInput
            placeholder="Izaberi kategoriju"
            bordered={false}
            className="border-[1px] border-border rounded-[20px] w-full"
            suffixIcon={<DownOutlined className="text-selectText" />}
            onChange={(value) => {
              handleFiltersChange("selectedCategory", value);
            }}
            options={[
              "Android development",
              "Frontend",
              "Backend",
              "Fullstack",
            ]}
          />
        </div>
      </div>
      <div className="w-full flex-shrink-0 xl:max-w-[233px] min-w-[180px] xl:w-[40%]   order-1 xl:order-2 mb-2 xl:mb-0">
        <SearchInput
          placeholder="Pretraga.."
          onChange={(event) =>
            debounceValue(() => {
              handleFiltersChange("searchValue", (event.target as any).value);
            })
          }
        />
      </div>
    </div>
  );
};

export default GridFilters;
