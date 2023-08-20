import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/roger",
    element: <div>Roger e Célia</div>,
  },
  {
    path: "*",
    element: <div>Página não encontrada!</div>,
  },
]);

function App() {
  return (
    <div className="h-full px-9 lg:px-28">
      <Header />
      <div className="h-full pb-12 pt-24 xxs:flex xxs:justify-center">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
