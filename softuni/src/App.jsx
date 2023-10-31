import { useState } from 'react'
import './App.css'
import ServiceBtn from './components/ServiceBtn'
import MovieList from './components/MovieList'
import MovieList1 from './components/MovieList1'
import movies from './assets/movies'
import Dice from './components/Dice'
import Heading from './components/Heading'
import productsArray from './assets/productsArray'
import ProductsList from './components/ProductsList'


function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
          <div className="fullscreen nopadding">
            <div id="header">
              <img src="\Users\d77co\Pictures\calendar\image.png" width="50px " />
              <ul>
                <li>Home</li>
                <li>About</li>
              </ul>
            </div>
            <div className="header">
             <Heading color='Red'text="Kaka Pepa"/>
            </div>
          </div>
    
          <div className="white nopadding more">
            <Heading color="pink" text="Good Day" />
            <a id="more">&#x25BC; More &#x25BC;</a>

          </div>
    
        
            <div className="section">
             
              <button onClick= {Dice.Roll }>Play New game</button> 
              <Dice.DoubleDice />
            </div>
            <MovieList1 />
            

    
            <div className="section">
              <button onClick={() => setCount(count + 1)}>Click me + </button>
              <button onClick={() => setCount(count - 1)}>Click me - </button>
              <button onClick={() => setCount(0)}>Reset</button>
            <p>You clicked {count} times</p>  
              <h1>Make an Appointment</h1>
              <p>Instructions for making an appointment.</p>
            </div>
          <ServiceBtn />
    
          <div className="white">
            <a id="test"></a>
            <h1>Dolor Sit Amet</h1>
            <img className="floatleft" src="http://formoexpress.com/wp-content/uploads/2016/06/cropped-Capture.png" alt="Image 1" />
            <p><a href="">Lorem ipsum</a> dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>
            <img className="floatright" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ilex-aquifolium_%28Europaeische_Stechpalme-1.jpg/220px-Ilex-aquifolium_%28Europaeische_Stechpalme-1.jpg" alt="Image 2" />
            <p>Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.</p>
          </div>

          <div className="semitrans">
          <h2>Separator</h2>
          </div>

          <div className='white' >
            <h1>PRODUCTS</h1>
            <p>Check out our products.</p>
            <ProductsList products={productsArray} />
       
          </div>
    
          <div className="semitrans">
           <MovieList movies={movies} headingText="Movie list" />
          </div>
    
          <div className="dark">
            <p>This is made by <a href="https://artmillennium.co.uk">ArtMillennium.co.uk</a>. Check out my <a href="https://clickandgrab.co.uk">website</a>!</p>
          </div>
        </div> 
  )
}

export default App
