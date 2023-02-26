import { createContext } from "react";
import { User } from "./types";

const userContext = createContext<User | null>(null);

export default userContext;
