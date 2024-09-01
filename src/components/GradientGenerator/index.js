import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  BackgroundContainer,
  Heading,
  ChooseDirectionAndPickColor,
  UnorderedList,
  ColorsContainer,
  ColorContainer,
  Color,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientValue: ` to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeColorOne = event => {
    this.setState({color1: event.target.value})
  }

  changeColorTwo = event => {
    this.setState({color2: event.target.value})
  }

  changeDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  generateColor = () => {
    const {activeGradientDirection, color1, color2} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${color1} ,${color2}`,
    })
  }

  render() {
    const {color1, color2, gradientValue, activeGradientDirection} = this.state

    return (
      <>
        <BackgroundContainer
          data-testid="gradientGenerator"
          gradientValue={gradientValue}
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <ChooseDirectionAndPickColor>
            Choose Direction
          </ChooseDirectionAndPickColor>
          <UnorderedList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                detail={each}
                key={each.directionId}
                changeDirection={this.changeDirection}
                isActive={activeGradientDirection === each.value}
              />
            ))}
          </UnorderedList>
          <ChooseDirectionAndPickColor>
            Pick the Colors
          </ChooseDirectionAndPickColor>
          <ColorsContainer>
            <ColorContainer>
              <Color>{color1}</Color>
              <ColorInput
                type="color"
                value={color1}
                onChange={this.changeColorOne}
              />
            </ColorContainer>
            <ColorContainer>
              <Color>{color2}</Color>
              <ColorInput
                type="color"
                value={color2}
                onChange={this.changeColorTwo}
              />
            </ColorContainer>
          </ColorsContainer>
          <GenerateButton type="button" onClick={this.generateColor}>
            Generate
          </GenerateButton>
        </BackgroundContainer>
      </>
    )
  }
}
export default GradientGenerator
