import {Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Content from "./Components/utils/Content";


function App() {
  return (
      <div className="App">

      <Routes>
        <Route element={<Content />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favs />} />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
