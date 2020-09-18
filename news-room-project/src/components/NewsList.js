import React, { useEffect, useState } from "react";
import New from './New';

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
        return (
            <div>Cargando...</div>
        );
    }

    if(loadingError){
        return (
            <div>Error :( </div>
        );
    }

    if (news.length===0) {
        return (
          <div className="message">
            <h1>No hay nada</h1>
          </div>
        );
    }

    return (
        <div>
            <div>
                {news.slice(/*0 + index * 10, 10 + index * 10*/).map((n) => (
                    <New key={n.news_id} data={n} />
                ))}
            </div>
        </div>
    )
}

export default NewsList;