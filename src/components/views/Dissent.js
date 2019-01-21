import React, { Component }from 'react';
import PDFViewer from '../PDFViewer/PDFViewer'
import PDFJSBackend from '../../api/pdfbackend/pdfjs'
import { Typography } from '@smooth-ui/core-sc';




class Dissent extends Component {
    render() {
        return (
            <div className="pdfapp" style={ {height: "75vh"} }>
                <Typography variant="h5">
                    Below is the dissent report by the members who resigned from the Special Committee on
                    Event Spaces.  We welcome other thoughtful input on the subject.
                </Typography>
                <PDFViewer backend={PDFJSBackend}
                    src="Rebuttal_January2019.pdf"
                />
            </div>
        );
    }

}

export default Dissent