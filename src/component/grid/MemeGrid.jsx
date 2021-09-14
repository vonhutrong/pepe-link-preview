import React from 'react';
import Element from '../Element/Element';
import './meme-grid.css';

export default function MemeGrid(props) {

    const gridData = props.memes.map(meme => {
        return (<Element key={meme.key} meme={meme} />);
    });

    return(
    <div className="container">
        <div className="instruction">
            <div className="alert alert-primary" role="alert">
                Click on a picture to copy the link
            </div>
            <div className="panel">
                <label for="txtKey">Key</label>
                <span><input name="txtKey" id="txtKey" /></span>
                <label for="txtURL">URL</label>
                <span><input name="txtURL" id="txtURL" /></span>
                <button type="submit">Create</button>
            </div>
            
        </div>
        <div id="grid">
            { gridData }
        </div>
    </div>
    );
}