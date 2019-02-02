import React from 'react'
import { Button } from 'semantic-ui-react'

const PatternButton = ({ handleClick, hiddenContent, visibleContent }) => {
  return (
    <Button onClick={handleClick} animated='fade' inverted >
      <Button.Content visible>{visibleContent}</Button.Content>
      <Button.Content hidden>{hiddenContent}</Button.Content>
    </Button>
  )
}

export default PatternButton
