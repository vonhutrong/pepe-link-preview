import './toastr.min.css';
import './element.css';
import React from 'react';
var toastr = require("toastr")

export default function Element(props) {

    function copyLinkToClipboard() {
        navigator.clipboard.writeText(props.meme.url);
        toastr.info('Copied "' + props.meme.key + '" to clipboard!')
    }

    return (
        <div className="element">
            <div className="img-wrap">
                <img className="image" src={props.meme.url} onClick={copyLinkToClipboard} alt="meme"/>
            </div>
            <span>blood</span>
        </div>
    );
}