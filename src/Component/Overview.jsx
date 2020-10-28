import react from 'react';
import classes from './mystyle.module.css';
import overviewJson from './Overview.json';

const Overview = (props) => {
    var OverviewContents = [];
    var title = <h1 className={classes.contentTilte}>{overviewJson.title}</h1>;
    var h = window.innerHeight*0.80;

    overviewJson.content.forEach(function(v, i){
        OverviewContents.push(<p  key= {i} className={classes.contents}>{v}</p>);
    });
    return(
        <div style={{height: h}} className={classes.overview}>
            {title}
            {OverviewContents}
        </div>
    );
}

export default Overview;