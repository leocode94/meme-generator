import React from "react"
/* import memesData from "../memesData.js" */

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])

    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = (allMemeImages[randomNumber].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {

        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img
                    src={meme.randomImage}
                    className="meme--image"
                    alt=""
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>


        </main>
    )
}