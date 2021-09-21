import styled from 'styled-components'

export const Container = styled.div`
    margin: 2px 8px 8px 16px;
    min-height: 32px;
    color: black;
    background-color: white;
    display: flex;
    flex-direction:column;
`
export const CommentWrapper = styled.div`
    padding: 8px;
`
export const CommentDetailsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const CommentDetails = styled.div`
    font-size: 8px;
    padding: 2px;
    color: lightgray;
    background-color: gray;
`;

export const CommentDetailItem = styled.span`
    margin-right: 4px;
`;

export const ActionContainer = styled.div`
    display: flex;
`