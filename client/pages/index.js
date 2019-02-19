import React, { useState } from 'react'
import Head from 'next/head'
import { Card, Input, Button } from 'semantic-ui-react'
import * as axios from 'axios'
import { ENDPOINT, ADD_PORT, SUB_PORT } from '../_constants/endpoints'

const style = {
  height: '100vh',
  width: '100vw',
  backgroundColor: 'gray',
  justifyContent: 'center',
}

const App = () => {

  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState('0')
  const [result, setResult] = useState('0')

  const handleAdd = async () => {
    try {
      const { data: { sum } } = await axios.post('/api/add', { num1, num2 })
      setResult(sum.toString())
      setNum1(0)
      setNum2(0)
    } catch (err) {
      console.error(err)
      setResult('-1')
    }
  }

  const handleSub = async () => {
    try {
      const { data: { diff } } = await axios.post('/api/sub', { num1, num2 })
      setResult(diff.toString())
      setNum1(0)
      setNum2(0)
    } catch (err) {
      console.error(err)
      setResult(-1)
    }
  }

  return (
    <>
      <Head>
        <title>Calc-Micro</title>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
      </Head>
      <Card style={style}>
        <Input
          placeholder='Enter first number'
          onChange={(e) => setNum1(e.target.value)}
          value={num1}
        />
        <Input
          placeholder='Enter second number'
          onChange={(e) => setNum2(e.target.value)}
          value={num2}
        />
        <Button
          content='Add'
          onClick={handleAdd}
        />
        <Button
          content='Subtract'
          onClick={handleSub}
        />
        <Input
          placeholder='Results'
          value={result}
        />
      </Card>
    </>
  )
}

export default App
