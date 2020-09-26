import React, { FormEvent, useState } from 'react';

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>, input: string) => any;
  classNames: string;
};
export const Form: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const reg = RegExp(/^[a-zA-Z]+$/);
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    let dis = true;
    if (reg.test(e.currentTarget.value)) {
      dis = false;
    }
    setDisabled(dis);
    setInputValue(e.currentTarget.value);
  };
  return (
    <div className={props.classNames}>
      <form onSubmit={(e) => props.handleSubmit(e, inputValue)}>
        <label>
          Name:
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInput(e)}
          />
        </label>
        <input type="submit" value="Submit" disabled={disabled} />
      </form>
    </div>
  );
};
