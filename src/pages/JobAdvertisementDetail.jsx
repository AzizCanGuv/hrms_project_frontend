import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import "../App.css";
import { useParams } from "react-router";

export default function JobAdvertisementDetail() {
  
  
  let { id:id } = useParams();


  const [jobAdvertisement, setJobAdvertisement] = useState({}); 
  useEffect(() => {
      let jobAdvertisementService = new JobAdvertisementService()  
      jobAdvertisementService.getJobAdvertisementById(id).then(result=>setJobAdvertisement(result.data.data))
  },[]);


  
  return (
    <div>
      
      

        
          <Card fluid>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="/images/avatar/large/steve.jpg"
              />
              <Card.Header>
              
              </Card.Header>
              <Card.Meta>{jobAdvertisement.minimumSalary}</Card.Meta>
              <Card.Description>
              {jobAdvertisement.jobPosition?.jobPositionName}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        
 
    </div>
  );
}
