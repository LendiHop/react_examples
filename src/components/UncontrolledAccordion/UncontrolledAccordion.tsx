import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log("Accordion rendered");
    const [collapsed, setCollapsed] = useState<boolean>(false);
        return (
            <div>
                <AccordionTitle title={props.title} onClick={ () => setCollapsed(!collapsed) }/>
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered");
    return (
        <h3 onClick={ () => props.onClick() }>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendered");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}