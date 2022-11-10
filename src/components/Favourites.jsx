import { useGlobalContext } from "../context"

const Favourites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext()
  
  return (
    <section className='favorites'>
      <div className='favorites-content'>
        <h5>Favourites</h5>
        <div className='favorites-container'>
          { favorites.map( ( item ) => {
            const { idMeal, strMealThumb: image, strMeal: name } = item
            return (
              <div key={ idMeal } className='favorite-item'>
                <img src={ image } alt={ name } className='favorites-img img' onClick={() => selectMeal(idMeal, true)} />
                <button className='remove-btn' onClick={()=>removeFromFavorites(idMeal)}>
                  remove
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Favourites