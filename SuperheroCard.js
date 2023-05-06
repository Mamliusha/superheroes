
import './Card.css';
import React from 'react'
class SuperheroCard extends React.Component {
  render() {
    const { name, universe, ego, occupation, friends, powers, more, image } = this.props;
    return (
      <div className="superhero">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className='uni'>Вселенная: {universe}</p>
          <p className='ego'>Альтер эго: {ego}</p>
          <p className='occupation'>Род деятельности: {occupation}</p>
          <p className='friends'>Друзья: {friends}</p>
          <p className='powers'>Суперсилы: {powers}</p>
          <p><b>Подробнее:</b>{more}</p>
          <img src={image} alt={name} />
        </div>
        <div className="rating-area"> Поставьте оценку супергерою
                    <input type="radio" id="${superhero.id}star-5" name="${superhero.id}rating" className="r-inputs" value="5"></input>
                    <label for="${superhero.id}star-5" title="Оценка «5»"></label>	
                    <input type="radio" id="${superhero.id}star-4" name="${superhero.id}rating" className="r-inputs" value="4"></input>
                    <label for="${superhero.id}star-4" title="Оценка «4»"></label>    
                    <input type="radio" id="${superhero.id}star-3" name="${superhero.id}rating" className="r-inputs" value="3"></input>
                    <label for="${superhero.id}star-3" title="Оценка «3»"></label>  
                    <input type="radio" id="${superhero.id}star-2" name="${superhero.id}rating" className="r-inputs" value="2"></input>
                    <label for="${superhero.id}star-2" title="Оценка «2»"></label>    
                    <input type="radio" id="${superhero.id}star-1" name="${superhero.id}rating" className="r-inputs" value="1"></input>
                    <label for="${superhero.id}star-1" title="Оценка «1»"></label>
                </div>
      </div>
    );
  }
}


export default SuperheroCard;
