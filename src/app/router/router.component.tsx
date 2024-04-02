import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouterProviderProps } from "./router.types";

const AppRouterProvider: FC<AppRouterProviderProps> = (props) => (
  <RouterProvider {...props} />
);

export default AppRouterProvider;