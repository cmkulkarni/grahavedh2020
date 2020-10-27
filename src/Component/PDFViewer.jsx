import react from 'react';
import classes from './mystyle.module.css';
import pdf from '../doc/2019.pdf';

const PDFViewer = props => {
    var pdfPath = 'https://github.com/cmkulkarni/grahavedh2020/blob/master/src/doc/2019.pdf';
    var h = window.innerHeight*0.65;
    var scrollBool = '&scrollbar=0';
    //pdfPath = pdfPath + scrollBool;
    return(
        <>
            <div style={{height: h}} className={classes.pdfViewer}>
                <iframe frameborder="0" scrolling="no"
                        src={pdfPath} width="90%" height="700px">
                </iframe>
                
            </div>
        </>
    );
}
/*<object id="myPdf" type="application/pdf" data={pdfPath} width="90%" height="700px">
                    Unable to open the PDF file.
                </object>*/
export default PDFViewer;