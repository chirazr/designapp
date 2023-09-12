import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='form'>
    
   <form>
             <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
			<input type="radio" name="fancy" value="hearts" id="hearts" />
			<input type="radio" name="fancy" value="spades" id="spades" />
			<input type="radio" name="fancy" value="diamonds" id="diamonds" />			
			<label for="clubs"> <img src='./images/img2.jpg'/> </label>
            <label for="hearts"><img src='./images/logo.png'/></label>
            <label for="spades"><img src='./images/img1.jpg'/></label>
            <label for="diamonds"><img src='./images/logo.png'/></label>
            </form> 
    </div>
  )
}

export default Home
                                