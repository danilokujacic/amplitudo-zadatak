import { useQuery } from "react-query";
import { AsyncSelectOption, SelectOption } from "../shared/types";
import { useEffect } from "react";

type SelectHookConfig = {
  enableReset: boolean;
  resetOption: string;
};
const isAsyncOptions = (
  options: SelectOption[] | AsyncSelectOption
): options is AsyncSelectOption => !Array.isArray(options);

const formatOptions = (
  opts: SelectOption[] | undefined,
  config?: SelectHookConfig
) => {
  if (opts) {
    if (config && config.enableReset) {
      return [{ key: null, label: config.resetOption }, ...opts];
    }
    return opts;
  }
  return undefined;
};

const useSelectOptions = (
  options: SelectOption[] | AsyncSelectOption,
  config?: SelectHookConfig
) => {
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

  return checkOptionsAsync
    ? {
        options: formatOptions(asyncOpts, config),
        isLoading,
      }
    : { options: formatOptions(options, config) };
};

export default useSelectOptions;
