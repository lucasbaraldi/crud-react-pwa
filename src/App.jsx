import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'
import Menu from './Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Animal from './componentes/Animal'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/animais" element={<Animal />} />
      </Routes>
    </Router>
  );
}

export default App;
