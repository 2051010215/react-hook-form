import styled from 'styled-components';
import { Button, Card, Image } from 'antd';

export const StyledCard = styled(Card)`
    margin-top: 10px;
    margin-left: 20px;
    padding: 5px;
    width: 350px;
`
export const StyledImg = styled(Image)`
    width: 230px;
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