import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InnerContainer = styled.span`
    margin: 2px 8px 8px 16px;
    min-height: 32px;
    color: black;
    background-color:  #ebedef;

    display: flex;
    // align-items: center;
`
export const AvatarContainer = styled.div`
padding: 8px;
`;

export const LikeIconContainer = styled.span`
    padding: 8px;
    margin-left: auto;
`;

export const CommentPosterName = styled.span `
    font-weight: 700;
`;
export const CommentWrapper = styled.div`
    padding: 8px;
`
export const CommentDetailsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const CommentDetails = styled.div`
    font-size: 12px;
    padding: 0px 0px 16px 16px;
    color: gray;
    // background-color: gray;
`;

export const CommentDetailItem = styled.span`
    margin-right: 4px;
`;

export const ActionContainer = styled.div`
    display: flex;
`