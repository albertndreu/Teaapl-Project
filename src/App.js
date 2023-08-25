import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tameio from './Tameio/Tameio';
import Antiprosopoi from './Tameio/Antiprosopoi-ana-nomo';
import Skopos from './Tameio/Skopos-kladoi-asfalisis';
import Dioikisoi from './Tameio/dioikisoi';
import Nomothesia from './Tameio/Nomothesia';
import Katastatiko from './Tameio/Katastatiko';
import Enimerotika from './Tameio/Enimerotika-fylladia';
import Pleonekthmata from './Summetoxh/Pleonekthmata';
import Eggrafh from './Summetoxh/Eggrafh';
import Eisfores from './Summetoxh/Eisfores';
import Paroxes from './Summetoxh/Paroxes';
import Diagrafh from './Summetoxh/Diagrafh';
import Ependytiki from './Oikonomika-stoixeia/Ependytiki-epitropi';
import Analogistikes from './Oikonomika-stoixeia/Analogistikes-meletes';
import Oikonomika from './Oikonomika-stoixeia/Oikonomika-stoixeia';
import Isologismoi from './Oikonomika-stoixeia/Isologismoi';
import Ergo from './Enimerosh/To-ergo-tou-tameiou';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/"
      element={<Tameio/>}
      />
      <Route path="Antiprosopoi" element={<Antiprosopoi/>}/>
      <Route path="Skopos" element={<Skopos/>}/>
      <Route path="Dioikisoi" element={<Dioikisoi/>}/>
      <Route path="Nomothesia" element={<Nomothesia/>}/>
      <Route path="Katastatiko" element={<Katastatiko/>}/>
      <Route path="Enimerotika-fylladia" element={<Enimerotika/>}/>
      <Route path="Pleonekthmata" element={<Pleonekthmata/>}/>
      <Route path="Eggrafh" element={<Eggrafh/>}/>
      <Route path="Eisfores" element={<Eisfores/>}/>
      <Route path="Paroxes" element={<Paroxes/>}/>
      <Route path="Diagrafh" element={<Diagrafh/>}/>
      <Route path="Ependytiki" element={<Ependytiki/>}/>
      <Route path="Analogistikes" element={<Analogistikes/>}/>
      <Route path="Oikonomika" element={<Oikonomika/>}/>
      <Route path="Isologismoi" element={<Isologismoi/>}/>
      <Route path="Ergo" element={<Ergo/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
