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
        path="signup/:token"
        element={<SignUpSuccessPage />}
      />
      <Route
        path="signin"
        element={<SignInPage />}
      />
      <Route
        path="passrecovery/:token"
        element={<PassRecoveryPage />}
      />
      <Route
        path="forgotpass"
        element={<ForgotPassPage />}
      />
    </Route>
  )
);
