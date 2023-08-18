import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

import { App } from "..";
import { ErrorPage, SignUpSuccessPage, SignUpPage, SignInPage, PassRecoveryPage, ForgotPassPage } from "../../pages";

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
      <Route
        path="signin"
        element={<SignInPage />}
      />
      <Route
        path="passrecovery"
        element={<PassRecoveryPage />}
      />
      <Route
        path="passforgot"
        element={<ForgotPassPage />}
      />
    </Route>
  )
);
