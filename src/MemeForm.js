
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Button, FormGroup, Label,Form} from 'reactstrap'
import Canvas from './Canvas'


const MemeForm=()=>{

    const form = useSelector(state=>state.formData)
    const dispatch = useDispatch()

    const updateForm=(e)=>{
        const payload={
            [e.target.name]:e.target.value
        }
        const action ={type:'UPDATE_FORM', payload};
        dispatch(action)
    }
    const submit=(e)=>{
        e.preventDefault()
        
        dispatch({type:'ADD_MEME',payload:form})
        dispatch({type:'CLEAR_FORM'})
    }


    return(
        <div className='meme-form'>
            <Form onSubmit={submit} className='meme-form-form'>
                <FormGroup>
                    <Label for='image'>Image URL:</Label>
                    <input required type='URL' onChange={updateForm} className='form-control m-3' name='image' id='image' value={form.image} placeholder='www.crackers-and-milk.com/milk'></input>
                </FormGroup>
                <FormGroup>
                    <Label for='top'>Top Text:</Label>
                    <input required onChange={updateForm} className='form-control m-3' name='top' id='top' value={form.top} placeholder='Top Text'></input>
                </FormGroup>
                
                <FormGroup>
                    <Label for='bottom'>Bottom Text</Label>
                    <input required onChange={updateForm} className='form-control m-3' name='bottom' id='bottom' value={form.bottom} placeholder='Bottom text'></input>
                </FormGroup>
                <FormGroup>
                    <Label for='size'>font size (px)</Label><br/>
                    <input required onChange={updateForm} type='range' min={10} max={40} className='border-0 m-3' name='size' id='size' value={form.size} placeholder='Top Text'>
                    </input>
                    <span className="font-weight-bold text-primary ml-2 mt-1 valueSpan">{form.size}</span>
                </FormGroup>
                <Button color='primary'>Add Meme</Button>
            </Form>
            <Canvas 
            image={form.image}
            top={form.top}
            bottom={form.bottom}
            size={form.size}/>
        </div>
    )

}

export default MemeForm;