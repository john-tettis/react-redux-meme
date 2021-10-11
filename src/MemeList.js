import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Canvas from './Canvas'



const MemeList=()=>{
    const memes = useSelector(state=>state.memes)



    return(
        <div className='meme-list'>
        <h2>Your Memes</h2>
        <hr/>
            <div className='meme-list-container'>
                {memes.map(m=>
                <Canvas 
                image={m.image}
                top={m.top}
                bottom={m.bottom}
                size={m.size}
                id={m.id}
                key={m.id}
                />)}
            </div>
        </div>
    )
}

export default MemeList