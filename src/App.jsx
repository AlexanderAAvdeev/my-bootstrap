import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/favorites/Favorites'
import Basket from './components/basket/Basket'
import Form from './components/Form'
import {Description} from './components/Description'

export const AppContext = React.createContext({})

function App() {
//хранения данных туров
const [resorts, setResorts] = useState([])
//для избранных туров
const [favorites, setFavorites] = useState([])
//для корзины
const [overlayItems, setOverlayItems] = useState([])
useEffect (()=>{
  async function axiosData(){
    const resortsData = await axios.get('http://localhost:8000/resorts')
    const favoritesData = await axios.get('http://localhost:8000/favorites')
    const cartData = await axios.get('http://localhost:8000/cart')

    setResorts(resortsData.data)
    setFavorites(favoritesData.data)
    setOverlayItems(cartData.data)
  }
  axiosData();
},[])


const deleteItems=(id)=>{
  axios.delete(`http://localhost:8000/cart/${id}`)
  setOverlayItems((objDelete)=> objDelete.filter(item=> item.id !==id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId)=>{
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}

return (
    
  <AppContext.Provider
  value={
    {
      resorts,
      setResorts,
      overlayItems,
      setOverlayItems,
      favorites,
      setFavorites,
      isAdded,
      isFav
    }
  }>

    <div>
     
     <Router>
     <Header/> 
      <Routes>
        <Route path='/favorites'
                    element={
                        <Favorites
                        favorites={favorites}
                        setFavorites={setFavorites}
                        item={resorts}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        />
                    }
                /> 
    

    <Route path='/'
                    element={
                        <Home
                        item={resorts}
                        overlayItems={overlayItems}
                        setOverlayItems={setOverlayItems}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        />
                    }
                />

    <Route path='/form'
                element={
                        <Form/>
                    }
                />

    <Route path='/description'element={
            <Description />
          }/>

        <Route path='/cart'
                element={
                        <Basket
                        totalPrice={
                          overlayItems.reduce((element = overlayItems.length, obj)=>
                          element+obj.price, 0 
                          )
                        }
                        overlayProp={overlayItems}
                        deleteItems={deleteItems}
                        />
                    }
                />


      </Routes>
      </Router> 
   
    
      <Footer/>
     </div>

    </AppContext.Provider>
  );
}

export default App;
