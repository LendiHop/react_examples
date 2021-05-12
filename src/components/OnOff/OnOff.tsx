import React, {useState} from "react";
import s from './OnOff.module.css';

type OnOffPropsType = {
    value: boolean
    setValue: (b: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    console.log("OnOff rendered");
    return (
        <div className={s.onOff}>
            <div className={props.value ? s.activeOn : ""} onClick={ () => {props.setValue(true)}}>On</div>
            <div className={props.value ? "" : s.activeOff} onClick={ () => {props.setValue(false)}}>Off</div>
            <div className={s.indicator + " " + (props.value ? s.activeOn : s.activeOff)}></div>
        </div>
    )
}
