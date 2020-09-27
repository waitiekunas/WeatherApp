import React, { FormEvent } from 'react';

import { City } from '../../Types/WeatherResponse';
import { Form } from '../Form/Form';

type Props = {
  city?: City;
  handleSubmit: (e: FormEvent<HTMLFormElement>, input: string) => any;
};
export const WeatherTableHeader: React.FC<Props> = (props) => (
  <div className="spaceBetween">
    <div>
      <p>{`${props.city?.name}, ${props.city?.country}`}</p>
    </div>
    <div>
      <Form handleSubmit={props.handleSubmit} classNames="formRow" />
    </div>
  </div>
);
