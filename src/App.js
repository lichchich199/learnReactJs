import './App.css';
import { BrowserRouter, Routes, Route, Link , Switch} from 'react-router-dom';
import Login from './views/Login';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
function App() {
  return (
    // <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Login/>}/>
    //     </Routes>
    // </BrowserRouter>
    // <>Hi</>
    
    <BrowserRouter>
    <Link to="/">Home</Link>{' '}
      <Link to={{pathname: '/about'}}>About</Link>{' '}
      <Link to="/contact">Contact</Link>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/contact"
          render={() => <h1>Contact Us</h1>} />
        <Route path="/blog" children={({match}) => (
          <li className={match ? 'active' : ''}>
            <Link to="/blog">Blog</Link>
          </li>)} />
        <Route render={() => <h1>Page not found</h1>} />
    </BrowserRouter>
  )
}

export default App;
