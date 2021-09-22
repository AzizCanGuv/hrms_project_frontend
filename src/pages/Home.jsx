import React from "react";
import { Container, Grid, Image, Button } from "semantic-ui-react";
import MainPicture from "../images/mainpageimg.jpg";

export default function Home() {
  return (
    <div>
      <Grid.Column columns={8} style={{ marginTop: "1em" }}>
        <Image src={MainPicture} fluid />
      </Grid.Column>

      <Container text style={{ marginTop: "1em" }}>
        <Button size="massive" positive>
          See Avalible Jobs
        </Button>
      </Container>
    </div>
  );
}
