import React, {useState} from "react";
import Data from "./Data";

export default function Meme() {

    const [formData, setFormData] = useState({top: "", bottom: ""})
    const [img, setImg] = useState(Data.data.memes[Math.floor(Math.random()*Data.data.memes.length)].url)

    function handleClick() {
        setImg(Data.data.memes[Math.floor(Math.random()*Data.data.memes.length)].url)
        setFormData({top: "", bottom: ""})
    }

    function text(event) {
        const {name, value} = event.target
        setFormData(x => {
            return {
                ...x,
                [name]: value
            }
        })
    }

    return (

        <div>
            <form>

                <input type="text" placeholder="Top Text" className="leftin in" name="top" value={formData.top} onChange={text}/>
                <input type="text" placeholder="Bottom Text" className="rightin in" name="bottom" value={formData.bottom} onChange={text}/>
                <div className="break"></div>

            </form>
            <button className="button" onClick={handleClick}/>

            <div className="image">
                <p className="element" style={{position: "absolute", left: "40.5%", top: "2%", maxWidth: "22vw", fontSize: "2rem", color: "white"}}>{formData.top.toUpperCase()}</p>
                <img src={img} key={img} style={{marginLeft: "auto", display: "block", marginRight: "auto", maxHeight: "47.5vh"}} alt="idk"/>
                <p className="element" style={{position: "absolute", left: "40.5%", bottom: "2%", maxWidth: "22vw", fontSize: "2rem", color: "white"}}>{formData.bottom.toUpperCase()}</p>
            </div>
        </div>
    )
}