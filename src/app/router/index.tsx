import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

import { App } from "..";
import { ErrorPage, SignUpSuccessPage, SignUpPage } from "../../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route
        path="signup"
        element={<SignUpPage />}
      />
      <Route
        path="signup/:uuid"
        element={<SignUpSuccessPage />}
      />
    </Route>
  )
);
