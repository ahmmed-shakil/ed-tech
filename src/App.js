import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Courses from './components/Courses/Courses';
// import Course from './components/Course/Course';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>
            <PrivateRoute path="/courses/:id">
              <Details />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
