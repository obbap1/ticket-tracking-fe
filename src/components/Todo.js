import { useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Wrapper from './Wrapper'

const cards = [
  {title: 'clean room'},
  {title: 'clean house'},
  {title: 'clean life'},
  {title: 'eat food'},
  {title: 'Build Application'},
]

const SendBtn = styled.button`
  background-color: dodgerblue;
`
function Todo() {
  const [todoItems, setTodoItems] = useState(cards)
  const [inputValue, setInputValue] = useState("")

  const handleType = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = () => {
    const tempTodos = [...todoItems]
    tempTodos.push({title: inputValue})
    setTodoItems(tempTodos)
  }

  return <Wrapper heading="TODO">
    <input value={inputValue} onChange={handleType}/>
    <SendBtn onClick={handleSubmit}>SUBMIT</SendBtn>
    {todoItems.length && todoItems.map((card, index) => <Card key={index} title={card.title} heading='todo'/>)}
  </Wrapper>
}

export default Todo