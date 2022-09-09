// import logo from './logo.svg';
import './App.css';
import Mensaje from './components/Mensaje';

function App() {
  return (
    <div className="App">
      
      <button className="btn btn-primary">Botón</button>

      <div className="container mt-3">
        <div className="bg-opacity-25 bg-primary mt-4 rounded-3 p-4">
          <h1>Hola mundo desde src/App.js</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque placeat voluptatibus quia eius aspernatur nisi odio, ab voluptatem facere laudantium dolore nostrum earum exercitationem eligendi voluptates id dolorem tenetur maxime!
          </p>

          <hr />
          {/* <Mensaje /> */}

          <div className="row">
            <div className="col-4"> 
              <Mensaje 
                mensaje="Mensaje nro. 1" 
                parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eligendi."
                color="crimson"
              />
            </div>
            <div className="col-4"> 
              <Mensaje 
                mensaje="Mensaje nro. 2" 
                parrafo="Lorem ipsum"
                color="violet"
              />
            </div>
            <div className="col-4"> 
              <Mensaje 
                mensaje="Mensaje nro. 3" 
                parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eligendi.Lorem ipsum dolor sit amet consectetur adipisicing elit."
                color="pink"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
