import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page/error-page";
import ShowNote from "./show-note/show-note";
import AddNote from "./add-note/add-note";
import EditNote from "./edit-note/edit-note";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notes/:id",
    element: <ShowNote />,
  },
  {
    path: "/add-note",
    element: <AddNote />,
  },
  {
    path: "/edit-note/:id",
    element: <EditNote />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
