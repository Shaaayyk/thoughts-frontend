import { Outlet } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import Header from "../components/Header";

export default function Layout({user, handleLogout}) {
  return (
    <>
      <Header user={user} handleLogout={handleLogout}/>
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}
