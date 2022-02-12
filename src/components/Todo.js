import Card from './Card'
import Wrapper from './Wrapper'

const cards = [
  {title: 'clean room'},
  {title: 'clean house'},
  {title: 'clean life'},
  {title: 'eat food'},
]
function Todo() {
  return <Wrapper heading="TODO">
    {cards.length && cards.map((card, index) => <Card key={index} title={card.title}/>)}
  </Wrapper>
}

export default Todo