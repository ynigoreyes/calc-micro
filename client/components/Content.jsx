import React from 'react'
import { PatternButton } from '../components'
import { Grid } from 'semantic-ui-react'
import * as axios from 'axios'

export default class Content extends React.Component {
  handleClick = (name) => () => {
    axios.post('http://104.197.134.202:30081/api/v1/game', { button: name})
      .then(({ data }) => {
        console.log(`${data} button was pressed`)
      }).catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <>
      <Grid textAlign='center' columns={2} container divided='vertically' stackable>
          <Grid.Row>
              {
                [1, 2].map((num) => (
                  <Grid.Column color='red' key={`Button ${num}`}>
                    <PatternButton
                      handleClick={this.handleClick(num)}
                      hiddenContent='Click!'
                      visibleContent={`Button ${num}`}
                    />
                  </Grid.Column>
                ))
              }
          </Grid.Row>
          <Grid.Row>
              {
                [3, 4].map((num) => (
                  <Grid.Column color='black' key={`Button ${num}`}>
                    <PatternButton
                      handleClick={this.handleClick(num)}
                      hiddenContent='Click!'
                      visibleContent={`Button ${num}`}
                    />
                  </Grid.Column>
                ))
              }
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

