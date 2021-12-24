import React, { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionsList() {
  const [JobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  },[]);
  return (
    <div>
      <Menu inverted pointing vertical>
        <Menu.Item style={{ marginTop: "5em" }}>
          <Menu.Header style={{ fontSize: "20px" }} color="white">
            Job Positions
          </Menu.Header>
          {JobPositions.map((jobPosition) => (
            <Menu.Menu key={jobPosition.ID}>
              <Menu.Item style={{ fontSize: "17px" }}>
                {jobPosition.jobPositionName}
              </Menu.Item>
            </Menu.Menu>
          ))}
        </Menu.Item>
      </Menu>
    </div>
  );
}
