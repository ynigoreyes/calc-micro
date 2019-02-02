import React from 'react'
import Head from 'next/head'

import { Card } from 'semantic-ui-react'
import { Content } from '../components'

const style = {
  height: '100vh',
  width: '100vw',
  backgroundColor: 'gray',
  justifyContent: 'center',
}
export default class App extends React.Component {
  render () {
    return (
      <>
        <Head>
          <title>The Drunk Game</title>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
        </Head>
        <Card style={style}>
          <Content />
        </Card>
      </>
    )
  }
}
