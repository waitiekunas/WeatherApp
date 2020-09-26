import React from 'react';

type Props = {
  handleClick: (clicked: boolean) => void;
};
export const NoCityError: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1>No city found</h1>
        </div>
        <div>
          <button onClick={() => props.handleClick(false)}>OK</button>
        </div>
      </div>
    </div>
  );
};
