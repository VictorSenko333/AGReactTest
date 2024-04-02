import "./App.css"
import {FC} from 'react';
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { createBrowserRouter } from "react-router-dom";
import AppRouterProvider from './app/router/router.component'
import { TodosModule } from './modules/todos/todos.router'



const router = createBrowserRouter([TodosModule]);

const App: FC = () => (
  <Provider store={store}>
    <AppRouterProvider router={router} />
  </Provider>
);

export default App
