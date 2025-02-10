import React, {useState} from 'react';
import './Tabs.css';

const Tabs = (props) => {
  console.log("props:", props.children[0].props.label);
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const changeTab = (tab) => {
    console.log("changeTab:", tab);
    if (props.onTabChange) {
      props.onTabChange(tab);
    }

    setActiveTab(tab);
  };

  let content;
  let buttons = [];

  return (
    <div>
    {React.Children.map(props.children, child => {
      buttons.push(child.props.label)
      if (child.props.label === activeTab) content = child.props.children
    })}

    <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab}/>
    <div className="tab-content">{content}</div>

  </div>
  );
}


const TabButtons = ({buttons, changeTab, activeTab}) =>{

  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = (props) => {
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
};

export {Tabs, Tab};