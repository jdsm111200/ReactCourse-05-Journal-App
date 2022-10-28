import { RouterProvider } from "react-router-dom";
import {router} from "./router/AppRouter";
import { AppTheme } from "./themes";

function App() {
  return (
    <div id="app">
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </div>
  );
}

export default App;
