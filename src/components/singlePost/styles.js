import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`
export const FullScreenImage = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    background: rgba(0,0,0,0.9);
`;