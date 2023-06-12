import './Card.css';
import logoGuitarGibson from '../../_assets/images/logoGuitarGibson.jpg';
import { FaStar } from 'react-icons/fa';


function Card () {
  return (
    <div className='card-principal'>
      <div className='card-image'>
        <figure>
        <img src={logoGuitarGibson} width="100%" alt="Guitarra Gibson Les Paul"/>
        </figure>



      </div>

      <div className='card-description'>
        <div className='card-description-info'>
          <h3 className='title-product'>GUITARRA</h3>
          <p>A guitarra Gibson Les Paul tem um dos timbres mais clássicos. O som que define o rock em toda a sua diversidade e riqueza de timbres</p>
            
          
          <div className='card-description-topics'>
          
          <ul class='icon'>
            <li><FaStar class='icon'  /> Corpo/braço em mogno (mahogany)</li>
            <li><FaStar class='icon' /> 02 Humbuckers</li>
            <li><FaStar class='icon' /> Escala em pau-ferro </li>
            <li><FaStar class='icon' /> Cor 'gold special'</li>
           
          </ul>
          </div>
          <button className='button'>SAIBA MAIS</button>
         
        </div>
      
      </div>
     
    </div>
       
  )
};

export default Card;