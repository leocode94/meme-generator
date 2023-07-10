import React from "react"
import troll from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll} 
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}