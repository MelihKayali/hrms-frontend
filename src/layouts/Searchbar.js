
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'


const initialState = { isLoading: false, results: [], value: '' }

export default class SearchExampleStandard extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search style ={{marginLeft : '15em'}}
            input={{ icon: 'search', iconPosition: 'right' }}
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            //onSearchChange={}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    )
  }
}