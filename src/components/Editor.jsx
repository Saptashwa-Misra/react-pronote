import React from 'react';
import '../index.css';

class Editor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_text: ''
        }
    }

    changeText = (event) =>{
        this.setState({user_text: event.target.value})
    }

    render () {
        return <>
            <div className='Editor'>
                <div className='Input'>
                    <label>Input</label>
                    <textarea className="user_Input"  onChange={this.changeText}/>
                </div>
                <div className='Pro_Notes'>
                    <label>Pro Note</label>
                    <textarea className='display_Pronotes' value={this.state.user_text} readOnly></textarea>
                </div>
            </div>
        </>
    }
}

export {Editor}