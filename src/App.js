// App.js
import React, { useEffect } from 'react';
import {Provider, useDispatch ,connect  } from 'react-redux';
import { fetchMovies } from './actions.js';

import MovieList from './component/movieList.js';


function App() {
  return (

      <div className="App">
        <MovieList />
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
