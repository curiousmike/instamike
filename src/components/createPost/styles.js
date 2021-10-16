import styled from 'styled-components'

  
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px black;
  background-color: white;
`;

export const UploadButton = styled.div`
  display: flex;
  align-items: center;
`;
export const UploadImageText = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10vh;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin: 16px;
`;

export const FileSizeTooBigContainer = styled.div`
  color: red;
  margin: 8px;
  font-weight: 600;
  font-size: 12px;
`;

export const Banner = styled.div`
  display: flex;
  height: 10vh;
  background-color: #fae1dd;
  align-items: center;
`;

export const BannerText = styled.div`
  margin-left: 16px;
  font-weight: 600;
  font-size: 20px;
`;