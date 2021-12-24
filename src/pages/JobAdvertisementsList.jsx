import React, { useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import "../App.css";
import HiringPicture from "../images/Hiring-photo3.png";
import { Link, NavLink } from "react-router-dom";

export default function JobAdvertisementsList() {
  const [JobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);
  return (
    <div>
      {JobAdvertisements.map((jobAdvertisement) => (
        <Card
          fluid
          style={{
            fontFamily: "'Nerko One', cursive",
            letterSpacing: "0.05em",
            marginTop: "3em",
            color: "#42466e",
          }}
        >
          <Card.Content>
            <Card.Header style={{ fontSize: "1.5em" }}>
              <Image
                floated="left"
                size="tiny"
                src={HiringPicture}
                wrapped
                ui={false}
              />
              {jobAdvertisement.jobPosition.jobPositionName}
            </Card.Header>

            <Card.Description style={{ fontSize: "1.25em", color: "black" }}>
              {jobAdvertisement.employer.companyName}
            </Card.Description>
            <Card.Meta style={{ fontSize: "1.5em", color: "black" }}>
              {jobAdvertisement.city.cityName}
            </Card.Meta>

            <Card.Description
              style={{ fontSize: "1.25em", color: "black" }}
              textAlign="left"
            >
              Minimum Salary: {jobAdvertisement.minimumSalary}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              as={Link}
              to={`/jobadvertisements/${jobAdvertisement.id}`}
              color="teal"
              fluid
            >
              See Details
            </Button>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
