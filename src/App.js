import logo from './logo.svg';
import './App.css';
import AddQuotes from './components/AddQuotes';
import NavBar from './components/NavBar';
import DeleteQuotes from './components/DeleteQuotes';
import SearchQuotes from './components/SearchQuotes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddQuotes/>}/>
  <Route path='/search' element={<SearchQuotes/>}/>
  <Route path='/delete' element={<DeleteQuotes/>}/>
  <Route path='/viewAll' element={<ViewAll/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
