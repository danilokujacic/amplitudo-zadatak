import { useQuery } from "react-query";
import { AsyncSelectOption, SelectOption } from "../shared/types";
import { useEffect } from "react";

const isAsyncOptions = (
  options: SelectOption[] | AsyncSelectOption
): options is AsyncSelectOption => !Array.isArray(options);

const useSelectOptions = (options: SelectOption[] | AsyncSelectOption) => {
  const checkOptionsAsync = isAsyncOptions(options);
  const {
    data: asyncOpts,
    isLoading,
    refetch,
  } = useQuery(
    checkOptionsAsync ? options.queryKey : "",
    async () =>
      checkOptionsAsync ? await options.queryFn() : await Promise.resolve([]),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (checkOptionsAsync) {
      refetch();
    }
  }, [options, refetch, checkOptionsAsync]);

  return checkOptionsAsync ? { options: asyncOpts, isLoading } : { options };
};

export default useSelectOptions;
