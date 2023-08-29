import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

import { App } from "..";
import { ErrorPage, SignInPage, PassRecoveryPage, ForgotPassPage } from "../../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route
        path="signin"
        element={<SignInPage />}
      />
      <Route
        path="passrecovery"
        element={<PassRecoveryPage />}
      />
      <Route
        path="forgotpass"
        element={<ForgotPassPage />}
      />
    </Route>
  )
);
