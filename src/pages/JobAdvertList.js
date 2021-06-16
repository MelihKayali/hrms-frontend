import React from 'react'
import { Button, Image, List } from 'semantic-ui-react'
import { useState } from 'react'
import { useEffect } from 'react';
import JobAdvertService from '../services/JobAdvertService';

export default function JobAdvert() {
    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result=>setJobAdverts(result.data.data))
       
    },[])

    return(
    <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Firma adı </Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lena.png' />
      <List.Content>İş ilanı 1</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Firma adı</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/lindsay.png' />
      <List.Content>İş ilanı 2</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Firma adı</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/mark.png' />
      <List.Content>İş ilanı 3</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Firma adı</Button>
      </List.Content>
      <Image avatar src='/images/avatar/small/molly.png' />
      <List.Content>İş ilanı 4</List.Content>
    </List.Item>
  </List>
    )
}
