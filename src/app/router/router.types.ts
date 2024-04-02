import { createBrowserRouter } from "react-router-dom";

export interface AppRouterProviderProps {
  router: ReturnType<typeof createBrowserRouter>
}