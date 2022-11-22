import React from "react";
import Nav from "./Nav";
import Title from "./Title";

export default function MainPageLayout({ children}){
    return(
        <>
        <div>
            <Title  title="Box Office" subtitle="are you looking for a movie or an actor?"/>
            <Nav />
            {children}
        </div>
        </>
    )
}