import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { Select } from 'semantic-ui-react'


const LevelOptions = [{text : '1'},{text : '2'},{text : '3'},{text :'4'},{text : '5'}]

const TextAreaExampleRows = () => (
  <Form>
    <TextArea rows={2} placeholder='Bildiğiniz dilleri yazınız' />
    <Select placeholder='Yabancı Dil Seviyenizi Belirtiniz' options={LevelOptions} />
  </Form>
)
export default TextAreaExampleRows

