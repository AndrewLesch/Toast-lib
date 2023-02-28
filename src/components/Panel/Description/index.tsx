import * as React from 'react';
import { DescriptionContainer, DescriptionInput, NameInput } from './styled';

function Description() {
  return (
    <DescriptionContainer>
      <NameInput placeholder="Название" />
      <DescriptionInput placeholder="Описание" />
    </DescriptionContainer>
  );
}

export default Description;
