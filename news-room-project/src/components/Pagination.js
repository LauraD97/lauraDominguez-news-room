import React from "react";
import '../styles/pagination.css';
import start from '../utils/icons/first.svg';
import prev from '../utils/icons/previous.svg';
import next from '../utils/icons/next.svg';
import end from '../utils/icons/last.svg';


const Pagination = ({index, setIndex, length}) => {

    const indexArr = [...Array(Math.ceil(length / 10)).keys()];

    return(
        <div className="pagination-container col-md-3 offset-md-9 np">
            <button className="pg-btn p" onClick={() => setIndex(0)}>
                <span><img className="pg-icon" src={start} alt='start'/></span>
            </button>
            
            <button className="pg-btn p" onClick={() => (index > 0) ? setIndex(index-1) : null}>
                <span><img className="pg-icon2" src={prev} alt='previous'/></span>
            </button>

            <span>{0 + index * 10} - {10 + index * 10} of {length} news</span>
            
            <button className="pg-btn p" onClick={() => (index + 1 < indexArr.length) ? setIndex(index+1) : null}>
                <span><img className="pg-icon2" src={next} alt='next'/></span>
            </button>

            <button className="pg-btn p" onClick={() => setIndex(indexArr.length-1)}>
                <span><img className="pg-icon" src={end} alt='end'/></span>
            </button>
        </div>
    );
}

export default Pagination;