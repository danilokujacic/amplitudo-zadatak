import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getMe } from "../core/api/users";
import { User } from "../shared/types";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [hasError, setHasErorr] = useState<boolean>(false);
  const { data, isSuccess, isError } = useQuery("user", getMe);

  useEffect(() => {
    if (isError) {
      setHasErorr(true);
    } else if (isSuccess) {
      setUser(data);
    }
  }, [isSuccess, isError, data]);

  return { me: user, hasError };
};

export default useUser;
