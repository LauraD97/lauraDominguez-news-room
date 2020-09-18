import React from 'react';

const New = ({data}) => {
    return (
        <div className="new-card">
            <img src={data.img_url}></img>
            <div className="info">
                <p >{data.title}</p>
                <h3>{data.source_name}</h3>
              
                <button onClick={() => window.open(data.url)} className="button">Ver mas</button>
            </div>
        </div>
    )
}

export default New;