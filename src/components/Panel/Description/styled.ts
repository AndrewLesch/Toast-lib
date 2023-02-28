import styled, { StyledComponent } from 'styled-components';

export const DescriptionContainer: StyledComponent<'div', {}> = styled.div`
  margin: 0 auto;
  background-color: black;
  border-radius: 10px;
`;

export const NameInput : StyledComponent<'input', {}> = styled.input`
  width: 250px;
  margin-left: 375px;
  height: 40px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const DescriptionInput : StyledComponent<'input', {}> = styled.input`
  width: 500px;
  margin-left: 250px;
  height: 100px;
  border-radius: 10px;
  margin-top: 20px;
`;
