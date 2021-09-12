import React from 'react';
import Element from '../Element/Element';
import './meme-grid.css';

export default function MemeGrid(props) {

    const gridData = props.memes.map(meme => {
        return (<Element key={meme.key} meme={meme} />);
    });
    
    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];

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