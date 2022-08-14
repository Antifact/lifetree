// imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import NewPost from './components/NewPost';
import AdminDash from './components/AdminDash';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewPost from './components/ViewPost';
import BadLink from './pages/BadLink';
import AdminPosts from './pages/AdminPosts';
import AdminUsers from './pages/AdminUsers';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <div className='App'>
      <Router>
        {/* Navigation bar */}
        <Navigation />

        {/* Routes that will be rendered under the nav bar for seamless browsing */}
        <div className='content-wrapper'>
          <Routes>
            <Route 
            path='/'
            element= { <Home /> } />

            <Route 
            path='/about'
            element= { <About /> } />

            <Route 
            path='/login'
            element= { <Login /> } />

            <Route 
            path='/register'
            element= { <Register /> } />

            <Route 
            path='/new'
            element= { <NewPost /> } />

            <Route 
            path='/admin'
            element= { <AdminDash /> } />

            <Route 
            path='/admin/posts'
            element= { <AdminPosts /> } />

            <Route 
            path='/admin/users'
            element= { <AdminUsers /> } />

            <Route 
            path='/posts/:id'
            element= { <ViewPost /> } />

            <Route 
            path='*'
            element= { <BadLink /> } />
          </Routes>
        </div>
      </Router>

      <Footer /> 
    </div>
  );
}

export default App;
