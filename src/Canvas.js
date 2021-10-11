import React,{useState} from 'react';
import { useDispatch } from 'react-redux';

const Canvas=({top,bottom,size,image, id})=>{
    let [overlay, setOverlay] = useState(false)
    let dispatch=useDispatch();


    let styles={
        fontSize:`${size}px`
    }
    let hide= overlay ? '':'hide'
    const deleteMeme=()=>{
        dispatch({type:'DELETE_MEME',payload:{id}})

    }


    return(
    <div style={styles} 
    onMouseEnter={()=>setOverlay(true)}
    onMouseLeave={()=>setOverlay(false)}
    className='canvas'
    >
        <img className='canvas-img' src={image}></img>
        <p className='canvas-text top'>{top}</p>
        <p className='canvas-text bottom'>{bottom}</p>
        {id && <div onClick={deleteMeme}className={`canvas-delete ${hide}`}>
            Delete
        </div>}
        
    </div>)



}

export default Canvas