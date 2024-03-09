import styled from 'styled-components';
import { Button, Card, Image } from 'antd';

export const StyledCard = styled(Card)`
    margin-top: 10px;
    margin-left: 20px;
    padding: 5px;
    width: 350px;
    @media (max-width: 760px) {
    width: 92%;
  }
`
export const StyledImg = styled(Image)`
    max-height: 225px;
    min-height: 225px;
    border-radius: 8px;
`

export const StyledViewMoreButton = styled(Button)`
    margin-top: 20px;
    left: 43%; 
    background-color: dodgerblue;
    width: 200px;
    height: 50px;
`
export const StyledButton = styled(Button)`
    margin-left: 20px;
    height: inherit;
    border: 0;
    border-radius: 0;
    background-color: #001529;
    color: aliceblue;
`

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 400px;
  }
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${props => props.invalid ? 'red' : 'black'};
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledSearchButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`