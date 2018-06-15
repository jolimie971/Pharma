import React from 'react';
import './mainContainer.css';
import Dashboard from '../dashboard/dashboard';
import Messages from '../messages/messages';
import Payment from '../payment/payment';

const MainContainer = ({routes}) =>{
    return(
        <div className="mainContainer">
        { routes === "dashboard"?
            <Dashboard/>:
            <Payment/>
        }
        </div>
    );
}

export default MainContainer;