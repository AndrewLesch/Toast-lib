import styled, { StyledComponent } from 'styled-components';

export const PanelContainer: StyledComponent<'form', {}> = styled.form`
  width: 500px;
  height: 460px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.86);
  padding: 10px;
`;

export const TitleInput = styled.input`
  width: 470px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #E4E7EC;
  padding-left: 10px;
`;

export const DescriptionInput = styled.textarea`
  width: 470px;
  height: 120px;
  max-height: 125px;
  max-width: 470px;
  min-width: 470px;
  background: #FFFFFF;
  border: 1px solid #E4E7EC;
  border-radius: 8px;
  padding-left: 10px;
  padding-top: 5px;
`;

export const ColorSelector = styled.select`
  width: 200px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E4E7EC;
  border-radius: 8px;
`;

export const TypeSelector = styled.select`
  width: 200px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E4E7EC;
  border-radius: 8px;
  margin-left: 77px;
  margin-top: 5px;
`;

export const PositionSelector = styled.select`
  width: 200px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E4E7EC;
  border-radius: 8px;
`;

export const MarginSelector = styled.select`
  width: 200px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E4E7EC;
  border-radius: 8px;
  margin-left: 77px;
  margin-top: 5px;
`;

export const DurationSelector = styled.select`
  width: 200px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E4E7EC;
  border-radius: 8px;
`;

export const AnimationSelector = styled.select`
  width: 200px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #E4E7EC;
  border-radius: 8px;
  margin-left: 77px;
  margin-top: 5px;
`;

export const TitleItem = styled.h6`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 5px;
`;

export const DescriptionItem = styled.h6`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 5px;
`;

export const PanelButton = styled.button`
  background: #AA76FF;
  border-radius: 10px;
  width: 200px;
  height: 48px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border: none;
  margin-left: 150px;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;
