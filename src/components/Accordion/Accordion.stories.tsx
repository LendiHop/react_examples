import React, {useState} from 'react';
import {Accordion} from "./Accordion";

export default {
  title: 'Accordion',
  component: Accordion,
};

export const Collapsed = () => <Accordion title={"CollapsedAcc"} collapsed={true} onClick={x=>x}/>
export const Uncollapsed = () => <Accordion title={"UncollapsedAcc"} collapsed={false} onClick={x=>x}/>;


export const ChangeableMode = () => {
  const [value, setValue] = useState<boolean>(false);
  return <Accordion title={"ChangeableAcc"} collapsed={value} onClick={()=>setValue(!value)}/>
};

