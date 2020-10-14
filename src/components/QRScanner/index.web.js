import React, { Component } from "react";
import largeScanner from "./placeholder.png";

class QRScanner extends Component {
    render() {
        let height = '100%';
        let width = '100%';
        let image = largeScanner;
        let realStyle = {
            resize: {
                height: height,
                width: width
            }
        }
        return(
            <div style={realStyle.resize}>
                <img style={realStyle.resize} src={image} />
            </div>
        )
    }
}

export default QRScanner