import React, { Component }from 'react';
import dissent from "../../api/SEVcritiquedraft.pdf"
import PDFViewer from '../PDFViewer/PDFViewer'
import PDFJSBackend from '../../api/pdfbackend/pdfjs'




class Dissent extends Component {
    render() {
        return (
            <div className="pdfapp" style={ {height: "75vh"} }>
                <PDFViewer backend={PDFJSBackend}
                    src="SEVcritiquedraft.pdf"
                />
            </div>
        );
    }

}

export default Dissent