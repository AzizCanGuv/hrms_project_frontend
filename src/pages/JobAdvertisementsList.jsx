import React, { useState, useEffect } from "react";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementsList() {
  const [JobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  });
  return (
    <div>
      <Table celled inverted selectable style={{ marginTop: "5em" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>WebSite</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>City Name</Table.HeaderCell>
            <Table.HeaderCell>Job Position Name</Table.HeaderCell>
            <Table.HeaderCell>Desription</Table.HeaderCell>
            <Table.HeaderCell>Start Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
            <Table.HeaderCell>Number Of Open Positions</Table.HeaderCell>
            <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
            <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.website}</Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.email}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              <Table.Cell>
                {jobAdvertisement.jobPosition.jobPositionName}
              </Table.Cell>
              <Table.Cell>
                {jobAdvertisement.jobPosition.description}
              </Table.Cell>
              <Table.Cell>{jobAdvertisement.startDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.endDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maximumSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minimumSalary}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="11">
              <Button color="green">Add a new Job</Button>
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a" className="disabled">
                  2
                </Menu.Item>
                <Menu.Item as="a" className="disabled">
                  3
                </Menu.Item>
                <Menu.Item as="a" className="disabled">
                  4
                </Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
