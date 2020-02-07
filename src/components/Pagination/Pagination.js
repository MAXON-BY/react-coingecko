import React from 'react';
import './Pagination.css'
import {Link} from "react-router-dom";

const Pagination = (props) => {
    const pageLinks = [];

    for (let i = 1 ; i <= props.pages +1; i++){
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(
            <li key={i} className={`page-item ${active}`} onClick={()=> props.nextPage(i)}>
                <Link to={`/page/${i}`}  className={'page-link'}>
                    {i}
                </Link>
            </li>
        )
    }

    return (
        <nav>
            <ul className={'pagination'}>
                {pageLinks}
            </ul>
        </nav>
    );
};

export default Pagination;