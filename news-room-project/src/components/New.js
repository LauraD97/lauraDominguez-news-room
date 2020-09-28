import React from 'react';
import alter_photo from '../utils/no-image.png';
import site from '../utils/icons/newspaper.svg';
import see from '../utils/icons/go.svg';


const New = ({ data }) => {
    return (
        <div className="new-container col-md-12">
            <div className="new-card">
                <img className="new-photo col-md-4" src={(data.img_url===null)? alter_photo: data.img_url} alt="new"></img>

                <div className="new-info col-md-8">
                    <h2 className="new-title col-md-12">{data.title}</h2>
                   
                    <div className="col-md-12 f npr">
                        <img className="new-icon" src={site} alt="site"/>
                        <p className="margin info"><b>Por:</b> {data.source_name}</p>  
                    </div>         
                    
                    <div className="col-md-3 offset-md-9">
                        <button onClick={() => window.open(data.url)} className="button">Ver más
                            <span><img className="new-icon margin" src={see} alt="see"/></span>
                        </button>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default New;