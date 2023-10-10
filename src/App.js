import React from 'react';
import {Buttons, Content} from './Components'
import {fetchCards} from './redux/actions/cards'
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const content = useSelector(({cards}) => cards.items);
  const isLoaded = useSelector(({cards}) => cards.isLoaded);
  const {category, sortBy} = useSelector (({filters}) => filters);
  
  React.useEffect(() => {
    dispatch(fetchCards(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="maincontainer">
      <p className='apptitle'>Это приложение-тест react + axios + redux-react + redux-thunk + json server + content loader + scss</p>
      <Buttons activeCategory = {category} activeSort = {sortBy}/>
      <Content items = {content} isLoaded = {isLoaded} />
    </div>
  );
}

export default App;
