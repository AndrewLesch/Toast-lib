import * as React from 'react';

type PanelButtonProps = {
  type: string
}

function PanelButton({ type }: PanelButtonProps) {
  return (
    <div>
      {type === 'submit' ? <button type="submit">Show toast</button> : <button type="button">Delete last toast</button>}

    </div>

  );
}

export default PanelButton;
