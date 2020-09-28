import React, { useEffect, useState } from "react";
import New from './New';
import '../styles/news.css';
import loadi from '../utils/icons/loading.svg';
import loadg from '../utils/loading.gif';
import error from '../utils/icons/error.svg'
import nresult from '../utils/icons/no_result.svg'


const NewsList = ({
    category: {path, name},
    news = [],
    loading,
    loadingError,
    fetchNewsList
}) => {

    //const [index, setIndex] = useState(0);

    useEffect(() => {
        //setIndex(0);
        fetchNewsList(path);
    }, [path, fetchNewsList]);

    if(loading){
        debugger;
        return (
            <div className="info-container col-md-12">
                <img className="load-i" src={loadi} alt="cargando"/>
                <img className="load-g" src={loadg} alt="cargando"/>
                <p className="load-text">Cargando...</p>                  
            </div>  
        );
    }

    if(loadingError){
        return (
            <div className="info-container col-md-12">
                <img className="img" src={error} alt="cargando"/>
                <p className="img-text">Sorry! There was an error loading the news.</p>                  
            </div> 
        );
    }

    if (news.length===0) {
        return (
            <div className="info-container col-md-12">
                <img className="img" src={nresult} alt="cargando"/>
                <p className="img-text">No results.</p>                  
            </div>
        );
    }

    return (        
        <div className="news-container">
            {news.slice(/*0 + index * 10, 10 + index * 10*/).map((n) => (
                <New key={n.news_id} data={n} />
            ))}
        </div>        
    )
}

export default NewsList;