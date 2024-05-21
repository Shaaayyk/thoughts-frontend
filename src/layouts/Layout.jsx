import { Outlet } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}
