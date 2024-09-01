// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {detail, changeDirection, isActive} = props
  const {value, displayText} = detail

  const onClickGradientDirection = () => changeDirection(value)

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
