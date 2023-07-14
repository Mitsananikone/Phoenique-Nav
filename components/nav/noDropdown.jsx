import { useState, useEffect } from "react";
import  NavLink  from "./NavLink";
import { userService } from "services";


export default function NoDropDown(props) {

    return (
<div className="group inline-block">
        <button className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center w-40">
          <span className="pr-1 font-semibold flex-1">{props.buttonText}</span>
  
        </button>
        </div>
        );
    }