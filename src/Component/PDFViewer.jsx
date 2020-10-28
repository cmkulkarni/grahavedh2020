import react from 'react';
import classes from './mystyle.module.css';
import pdf from '../doc/2019.pdf';
import one from '../doc/2019/20191024_1.jpg';
import two from '../doc/2019/20191024_2.jpg';
import three from '../doc/2019/20191024_3.jpg';
import paths from './MagzinPath.json'

const PDFViewer = props => {
    var pdfPath = 'https://github.com/cmkulkarni/grahavedh2020/raw/master/src/doc/2019.pdf';
    var h = window.innerHeight*0.90;
    var imgArr = [
        <img key={1} src={one} alt="Image not loaded" width="90%" ></img>,
        <img key={2} src={two} alt="Image not loaded" width="90%"></img>,
        <img key={3} src={three} alt="Image not loaded" width="90%"></img>,
    ];

    return(
        <>
            <div style={{height: h}} className={classes.pdfViewer}>                
                {imgArr}              
            </div>
        </>
    );
}

export default PDFViewer;

/*<object id="myPdf" type="application/pdf" data={pdfPath} width="90%" height="700px">
                    Unable to open the PDF file.
                </object>
                <iframe frameborder="0" scrolling="no"
                        src={pdfPath} width="90%" height="700px">
                </iframe>
                
                */
