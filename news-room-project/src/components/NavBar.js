import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../scripts/data';

const NavBar = () => {
    return (
        <div className="col-md-9 np">
            <nav>
                <ul className="nav-bar">
                    {categories.map( c => (
                        <li key={c.id}>
                            <Link className="nav-option" to={`/categories/${c.id}`}>{c.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;