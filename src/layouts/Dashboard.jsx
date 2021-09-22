import React from "react";
import { GridColumn } from "semantic-ui-react";
import JobAdvertisementsList from "../pages/JobAdvertisementsList";
import JobPositionsList from "../pages/JobPositionsList";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <JobPositionsList />
          </GridColumn>
          <GridColumn width={12}>
            <JobAdvertisementsList />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
