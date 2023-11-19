import React, { Fragment, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routingdata } from "./common/routingdata";
import "./index.scss";

const App = lazy(() => import("./layouts/App"));
const Authenticationlayout = lazy(() =>
  import("./layouts/Authenticationlayout")
);
const Loaderimage = lazy(() => import("./layouts/loader/loader"));
const Underconstruction = lazy(() =>
  import("./components/pages/extension/underconstruction/underconstruction")
);
const Auth = lazy(() => import("./layouts/firebase/firebaseauth/auth"));
const Authlogin = lazy(() =>
  import("./layouts/firebase/firebaseauth/authlogin")
);
const Signup = lazy(() => import("./layouts/firebase/firebaseauth/signup"));
const Switcherpage = lazy(() => import("./layouts/Switcherpage"));
const Customswitcher = lazy(() =>
  import("./components/pages/switcherpage/switcherpage")
);
const ScrollToTop = lazy(() => import("./layouts/scrollTop/scrollTop"));

// Authentication

const Login = lazy(() => import("./components/authentication/login/login"));
const Register = lazy(() =>
  import("./components/authentication/register/register")
);
const ForgotPassword = lazy(() =>
  import("./components/authentication/forgotpassword/forgotpassword")
);
const Lockscreen = lazy(() =>
  import("./components/authentication/lockscreen/lockscreen")
);
const Error400 = lazy(() =>
  import("./components/authentication/errorpages/error400/error400")
);
const Error401 = lazy(() =>
  import("./components/authentication/errorpages/error401/error401")
);
const Error403 = lazy(() =>
  import("./components/authentication/errorpages/error403/error403")
);
const Error404 = lazy(() =>
  import("./components/authentication/errorpages/error404/error404")
);
const Error500 = lazy(() =>
  import("./components/authentication/errorpages/error500/Error500")
);
const Error503 = lazy(() =>
  import("./components/authentication/errorpages/error503/Error503")
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <BrowserRouter>
      <Suspense fallback={<Loaderimage />}>
        <ScrollToTop />
        <Routes>
          {Routingdata.map((idx) => (
            <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
              <Route path={idx.path} element={idx.element} />
            </Route>
          ))}

          <Route
            path={`${import.meta.env.BASE_URL}`}
            element={<Switcherpage />}
          >
            <Route
              path={`${import.meta.env.BASE_URL}pages/switcherpage`}
              element={<Customswitcher />}
            />
          </Route>

          <Route
            path={`${import.meta.env.BASE_URL}`}
            element={<Authenticationlayout />}
          >
            <Route
              path={`${import.meta.env.BASE_URL}authentication/login`}
              element={<Login />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}authentication/register`}
              element={<Register />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}authentication/forgotpassword`}
              element={<ForgotPassword />}
            />
            <Route
              path={`${import.meta.env.BASE_URL}authentication/lockscreen`}
              element={<Lockscreen />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpages/error400`}
              element={<Error400 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpages/error401`}
              element={<Error401 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpages/error403`}
              element={<Error403 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpages/error404`}
              element={<Error404 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpages/error500`}
              element={<Error500 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }authentication/errorpages/error503`}
              element={<Error503 />}
            />
            <Route
              path={`${
                import.meta.env.BASE_URL
              }pages/extension/underconstruction`}
              element={<Underconstruction />}
            />
            <Route path={"*"} element={<Error400 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Fragment>
);
