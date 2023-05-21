import React from 'react'
import Item from './Item'
import axios from 'axios'

const CartItem = (props) => {

 const onAddOverlay = async (obj) => {
  try {
    const findOverlay = props.overlayItems.find(objOver=> objOver.myId === objOver.myId)
    if (findOverlay) {
      axios.delete(`http://localhost:8000/cart/${findOverlay.id}`)
      props.setOverlayItems((over)=> over.filter(o => o.myId !== obj.myId))
    }
    else{
      const{data} = await axios.post('http://localhost:8000/cart', obj)
      props.setOverlayItems([...props.overlayItems, data])
    }
  }
  catch{
    alert('Error')
  }
 }

 const onAddFav = async (obj) => {
  try {
    const findFavorites = props.favorites.find(objFav=> objFav.myId === obj.myId)
    if (findFavorites) {
      axios.delete(`http://localhost:8000/favorites/${findFavorites.id}`)
      props.setFavorites((over)=> over.filter(o => o.myId !== obj.myId))
    }
    else{
      const{data} = await axios.post('http://localhost:8000/favorites', obj)
      props.setFavorites([...props.favorites, data])
    }
  }
  catch{
    alert('Error')
  }
 }

  return (
    <div className='conteiner py-3'>
      {
    props.item.map(obj=>{
      return(
        <Item
        key={obj.id}
        id={obj.id}
        myId={obj.myId}
        title={obj.title}
        description={obj.description}
        price={obj.price}
        img={obj.img}

        favBtn={
          (favObj)=>{
            onAddFav(favObj)
          }
        }

        onPlus={(cartObj)=>{
          onAddOverlay(cartObj)
        }}
        />
      )
    })
  }
</div>
  )
}

export default CartItem