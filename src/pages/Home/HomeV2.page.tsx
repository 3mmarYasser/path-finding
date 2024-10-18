import React, { FunctionComponent } from 'react';
import Hero from "./components/Hero/Hero.home.tsx";
import Info from "./components/Info/Info.home.tsx";
import Contact from "./components/Contact/Contact.home.tsx";
import InfoHomeV2 from "./components/Info/Info.homeV2.tsx";

interface OwnProps {}

type Props = OwnProps;

const HomeV2: FunctionComponent<Props> = (props) => {

  return (<>
      <div className="h-screen relative overflow-y-auto hide-scrollbar glow-container">
          <InfoHomeV2/>
      </div>
  </>);

};

export default HomeV2;
