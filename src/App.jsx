import "./App.css";
import { Route, Routes } from "react-router";
import { routers } from "./routes";
import React from "react";
function App() {

  return (
    <>
      <Routes>
        {routers.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout ?? React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
