// Style your elements here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  font-family: 'Roboto';
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 36px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const ChooseDirectionAndPickColor = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
`

export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: space-between;
  list-style-type: none;
`

export const ColorsContainer = styled.div`
  display: flex;
  min-width: 320px;
  justify-content: space-around;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Color = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  outline: none;
  cursor: pointer;
  margin-top: 22px;
`
