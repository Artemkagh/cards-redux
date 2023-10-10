import React from 'react';
import {useDispatch } from "react-redux";
import {setCategory, setSortBy} from '../redux/actions/filters'

const categoryButton = [
  {id: 0, name: "Все", type: 0},
  {id: 1, name: "Категория 1", type: 1},
  {id: 2, name: "Категория 2", type: 2},
  {id: 3, name: "Категория 3", type: 3},
  {id: 4, name: "Категория 4", type: 4}]

  const sortButton = [
  {id: 0, name: "По порядку", type: "id"},
  {id: 1, name: "По числовому значению", type: "number"},
  {id: 2, name: "По алфавиту", type: "alpha"}]

  const Buttons = React.memo(function Buttons({activeCategory, activeSort}) {
    const dispatch = useDispatch();
    
    const OnSelectCategory = (obj) => {
      dispatch(setCategory(obj.type));
    }
    const OnSelectSort = (obj) => {
      dispatch(setSortBy(obj.type));
    }

    return (
    <div className="buttoncontainer">
        {categoryButton.map((obj, index) => (
          <div onClick={()=>OnSelectCategory(obj)} className={obj.type === activeCategory ? "buttonsort_active" : "buttonsort"} key={obj.id}>
            {obj.name}
          </div>
        ))}
        {sortButton.map((obj, index) => (
          <div onClick={()=>OnSelectSort(obj)} className={obj.type === activeSort ? "buttonsort_active" : "buttonsort"} key={obj.id}>
            {obj.name}
          </div>
        ))}
    </div>
    );
  });
  
  export default Buttons;