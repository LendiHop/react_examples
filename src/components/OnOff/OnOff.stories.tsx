import React, {useState} from 'react';
import {OnOff} from "./OnOff";

export default {
  title: 'OnOff',
  component: OnOff,
};

export const OnMode = () => <OnOff value={true} setValue={x=>x}/>;
export const OffMode = () => <OnOff value={false} setValue={x=>x}/>;


export const ChangeableMode = () => {
  const [value, setValue] = useState<boolean>(false);
  return <OnOff value={value} setValue={setValue}/>
};

