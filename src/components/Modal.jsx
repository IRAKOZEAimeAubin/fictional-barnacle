import { useGlobalContext } from '../context';

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const { strMealThumb: image, strMeal: name, strInstructions: instructions, strSource: source } = selectedMeal;

  return (
    <aside className='modal-overlay'>
      <div className='modal-container'>
        <img src={ image } alt={ name } className='img modal-img' />
        <div className='modal-content'>
          <h4>{ name }</h4>
          <p>Cooking Instructions </p>
          <p>{ instructions }</p>
          <a href={source} target='_blank' >Original Source</a>
          <button className='btn btn-hipster close-btn' onClick={closeModal} >Close</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal