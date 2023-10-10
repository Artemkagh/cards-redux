import React from 'react';
import {Loading} from '../Components';
function Content({items, isLoaded}) {
    
    return (
    <div className="contentcontainer">
        {isLoaded 
            ? items.map((obj) => (
            <div className="elementcard" key={obj.id}>
                <p>{obj.title}</p>
                <p>Категория - {obj.category}</p>
                <p>Числовое значение - {obj.number}</p>
                <p>Значение по алфавиту - {obj.alpha}</p>
            </div>))
            : Array(10).fill(<div className="elementcard" ><Loading /></div>)
        }
    </div>
    );
  }
  
  export default Content;