import React, {Component} from 'react';
import  Navbarf from './components/Navbar';
import  Bannerf from './components/Banner';
import  Whycusf from './components/Whycus';
import  Exploref from './components/Explore';
import  Bestf from './components/Bestflowers';
import  Delinpayf from './components/Delinpay';
import  Thankcusf from './components/Thankcustsec';
import  Followusf from './components/Followus';
import  Footerf from './components/Footer';
import Guru from './components/guruji';
import { Route,Routes } from 'react-router-dom';
import Signin from './components/Signin';
class App extends Component {
  render() {
    return (
      <div >

        <Navbarf />
        
        <Bannerf />
        <Whycusf/>
        <Guru/> 
        <Exploref/>
        <Bestf/>
        <Delinpayf/>
        <Routes>
          <Route path="/Signin" element={<Signin/>}/>
        </Routes>
        <Thankcusf/>
        <Followusf/>
        <Footerf/>
      </div>
    );
  }
}

export default App;