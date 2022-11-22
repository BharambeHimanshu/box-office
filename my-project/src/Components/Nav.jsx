import React from "react";
import {NavLink} from "react-router-dom"

const LINKS = [
    {text:"Home", path:"/"},
    {text:"Starred",path:"/starred"}
]

export default function Nav() {
    return(
        <>
        <div>
            <ul>
                {
                LINKS.map(item => (
                    <li key={item.path}>
                        <NavLink to={item.path}>{item.text}</NavLink>
                    </li>
                ))
                }
            </ul>
        </div>
        </>
    )
}