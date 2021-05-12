import React, {useState} from "react";
import s from './UncontrolledOnOff.module.css';

type UncontrolledOnOffPropsType = {
    onChange: (b: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    console.log("OnOff rendered");
    const [value, setValue] = useState(false);

    const onClicked = () => {
        setValue(true)
        props.onChange(true)
    };

    const offClicked = () => {
        setValue(false)
        props.onChange(false)
    };

    return (
        <div className={s.onOff}>
            <div className={value ? s.activeOn : ""} onClick={onClicked}>On</div>
            <div className={value ? "" : s.activeOff} onClick={offClicked}>Off</div>
            <div className={s.indicator + " " + (value ? s.activeOn : s.activeOff)}></div>
        </div>
    )
}
