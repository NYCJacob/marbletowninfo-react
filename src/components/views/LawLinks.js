import React from 'react';
import {NavLink} from "react-router-dom";

const LawLinks = () => (
    <div className="proposed-laws">
        <ul className="subDropDown" >
        <li style={ {paddingBottom: "0.5rem"}}>
        <NavLink to="/proposedlaws/events" >
        Event Law
        </NavLink>
        </li>
        <li>
        <NavLink to="/proposedlaws/accaptsup">
            Accessory Apartment
        </NavLink>
        </li>
        </ul>
    </div>
);

export default LawLinks;