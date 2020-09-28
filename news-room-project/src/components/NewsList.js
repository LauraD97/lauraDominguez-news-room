import React, { useEffect, useState } from "react";
import New from './New';
import Pagination from './Pagination';
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
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
        fetchNewsList(path);
    }, [path, fetchNewsList]);

    if(loadingError){
        return (
            <div className="info-container col-md-12">
                <img className="img" src={error} alt="cargando"/>
                <p className="img-text">Sorry! There was an error loading the news <span role="img" aria-label="no results"> 🤯 </span></p>                  
            </div> 
        );
    }

    if(loading){
        return (
            <div className="info-container col-md-12">
                <img className="load-i" src={loadi} alt="cargando"/>
                <img className="load-g" src={loadg} alt="cargando"/>
                <p className="load-text">Cargando...</p>                  
            </div>  
        );
    }    

    if (news.length===0) {
        return (
            <div className="info-container col-md-12">
                <img className="img" src={nresult} alt="cargando"/>
                <p className="img-text">No results <span role="img" aria-label="no results">🙁</span></p>                  
            </div>
        );
    }

    return (        
        <>
            <Pagination
                index = {index}
                length={news.length}
                setIndex={(n) => setIndex(n)}
            />

            <div className="news-container">
                {news.slice(0 + index * 10, 10 + index * 10).map((n) => (
                    <New key={n.news_id} data={n} />
                ))}
            </div> 

            <Pagination
                index = {index}
                length={news.length}
                setIndex={(n) => setIndex(n)}
            />
        </>       
    )
}

export default NewsList;