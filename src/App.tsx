import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log("App rendering");
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchValue, setSwitchValue] = useState(false);
  return (
    <div className="App">

        <Rating value={ratingValue} onClick={setRatingValue}/>
        <Accordion title="This is accordion title" collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        {/*<OnOff value={switchValue} setValue={setSwitchValue}/>*/}
        <UncontrolledOnOff onChange={setSwitchValue}/>
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendered");
    return <h1>{props.title}</h1>
}

export default App;
