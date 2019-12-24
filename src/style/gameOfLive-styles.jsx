import styled from "styled-components";
import Dropdown from 'react-dropdown'

export const GameOfLive = styled.section`
  text-align: center;
`;

export const BoardStyle = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  background-color: black;
  padding: 10px;
  flex-direction: column;
`;

export const CellStyle = styled.div`
  background-color: ${props => (props.value ? "green" : "pink")};
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 8px;
  font-size: 8px;
  text-align: center;
`;

export const GameTitle = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

export const HeaderWrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

export const BoardBody = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

export const Title = styled.h2`
  text-align: left;
  color: palevioletred;
  background-color: #ffffff;
`;

export const Paragraph = styled.p`
  text-align: left;
  color: palevioletred;
  background-color: #ffffff;
`

export const BorderParagraph = styled(Paragraph)`
  font-weight: bold;
`

export const Body = styled.div`
  text-align: center;
  background-color: #ffffff;
`

export const Format = styled.div`
  text-align: center;
  background-color: #ffffff;
`
export const Gutter = styled(Format)`
  color: palevioletred;
`
export const Content = styled(Format)`
  color: palevioletred;
  grid-template-columns: 1fr 5fr 1fr;
  display: grid;
  flex-direction: column;
`

export const Button = styled.button`
  display: inline;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const DropdownType = styled(Dropdown)`
  margin: 0.5em;
`
export const Input = styled.input`
  margin: 1em;
`
export const Label = styled.label`
  margin-top: 10px;
  padding: 10px
`