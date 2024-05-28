import { Outlet } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export default function Layout({user, handleLogout}) {
  return (
    <>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row> 
        <main className="container">
          <Outlet />
        </main>
        <Grid.Row style={{ padding: 0 }}>
          <Grid.Column>
            <Footer user={user} />
          </Grid.Column>
        </Grid.Row> 
      </Grid>
    </>
  )
}