// App.js
import React, { useEffect } from 'react';
import {Provider, useDispatch ,connect  } from 'react-redux';
import { fetchMovies } from './actions.js';

import MovieList from './component/movieList.js';


function App() {
  //const dispatch = useDispatch();

  
//  const ap = useEffect(() => {
//     dispatch(fetchMovies());
//   }, [dispatch]);

  // const ap = dispatch => ({
  //   startAction: () => dispatch(fetchMovies()),
  // });

  //console.log('ap'+ap)

  return (

      <div className="App">
        <MovieList />
        <button src='/start'>start</button>
      </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies),
 // stopAction: () => dispatch(stopAction)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
