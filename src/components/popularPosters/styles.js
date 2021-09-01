import styled from 'styled-components'

export const Container = styled.div`
    height: 10vh;
    border-bottom: 1px solid;
`
export const PopularPostersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightblue;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
`

export const ItemContainer = styled.div`
    margin: 12px;
`;
