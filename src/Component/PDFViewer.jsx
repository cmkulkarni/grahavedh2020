import react from 'react';
import classes from './mystyle.module.css';

const PDFViewer = props => {
    var pdfPath = '/2019.pdf#toolbar=0&view=fit&scrollbar=1';
    var h = window.innerHeight*0.65;
    var scrollBool = '&scrollbar=0';
    //pdfPath = pdfPath + scrollBool;
    return(
        <>
            <div style={{height: h}} className={classes.pdfViewer}>
                
                <object id="myPdf" type="application/pdf" data={pdfPath} width="90%" height="700px">
                    Unable to open the PDF file.
                </object>
            </div>
        </>
    );
}

export default PDFViewer;