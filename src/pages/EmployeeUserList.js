import { useEffect, useState } from "react";
import EmployeeUserService from "../services/EmployeeUserService";
import { Image, List } from 'semantic-ui-react'


export default function EmployeeUser() {
   const [employeeUsers, setEmployeeUsers] =  useState([])

   useEffect(()=>{
       let employeeUserService = new EmployeeUserService()
       employeeUserService.getEmployeeUsers().then(result=>setEmployeeUsers(result.data.data))
   })

   return(
   <List animated verticalAlign='middle'>
    <List.Item>
      <Image avatar src='/images/avatar/small/helen.jpg' />
      <List.Content>
        <List.Header>Helen</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/christian.jpg' />
      <List.Content>
        <List.Header>Christian</List.Header>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>Daniel</List.Header>
      </List.Content>
    </List.Item>
  </List>
   )
}