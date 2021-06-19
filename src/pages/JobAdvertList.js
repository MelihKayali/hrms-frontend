import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { useState } from 'react'
import { useEffect } from 'react';
import JobAdvertService from '../services/JobAdvertService';
import { Container } from 'semantic-ui-react';



export default function JobAdvertList() {

  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
  }, [])



  return (
    <div>
      <Container>

        <Table celled>
          <Table.Header>
            <Table.Row>
              {/* <Table.HeaderCell>İş açıklaması</Table.HeaderCell> */}
               <Table.HeaderCell>En alçak maaş</Table.HeaderCell> 
              <Table.HeaderCell>En yüksek Maaş</Table.HeaderCell>
              <Table.HeaderCell>Açık Pozisyonu</Table.HeaderCell>
              {/* <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell> */}
              <Table.HeaderCell>Oluşturma Tarihi</Table.HeaderCell>
              {/* <Table.HeaderCell>Aktif Mi</Table.HeaderCell> */}
              {/* <Table.HeaderCell>İş veren</Table.HeaderCell> */}
              <Table.HeaderCell>Meslek Grubu</Table.HeaderCell>
              <Table.HeaderCell>Şehir</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>

            {
              jobAdverts.map(jobAdvert => (
                <Table.Row key={jobAdvert.id}>
                  {/* <Table.Cell>{jobAdvert.jobDescrition}</Table.Cell> */}
                   <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
                  <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>                
                  <Table.Cell>{jobAdvert.openPosition}</Table.Cell>
                  {/* <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell> */}
                  <Table.Cell>{jobAdvert.createdDate}</Table.Cell>
                  {/* <Table.Cell>{jobAdvert.isActive}</Table.Cell> */}
                  {/* <Table.Cell>{jobAdvert.employerUser}</Table.Cell> */}
                  <Table.Cell>{jobAdvert.jobPosition.position}</Table.Cell>
                  <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                </Table.Row>
              ))
            }

          </Table.Body>

          <Table.Footer>
            <Table.Row>
              {/* <Table.HeaderCell>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell> */}
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </div>
  )
}
