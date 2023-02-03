import API from "../components/API";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Home = () => {

  const [livros, setLivros] = useState([]);

  const getLivros = async() => {

    try {

      const response = await axios.get(`https://api-livro.onrender.com/livros`);
      

      const data = response.data;

      setLivros(data);

      console.log(data);
      
    } catch (error) {
      console.log(error);
    }

  }
  

  useEffect(() => {

    getLivros();

  }, [])

  function deletelivro(id) {
    axios.delete(`https://api-livro.onrender.com/livros/${id}`)
   setLivros( livros.filter(livro => livro.id !== id))
  }

  
    
      

  if(!livros || !livros.length) return <div className='loading'>carregando</div>

  // '/livro/${livro.id}'



  return (

    <div className='estante'>
      {livros.map((livro, key) => {
        const { id, nome, capa, autor, prefacio, preco, genero} = livro;

        return(
          <div className="card">
            <p>{nome}</p>
            <p>|---------//---------|</p>

            <div className="btns">
              <button><Link to={`/edit/${id}`} >Edit</Link></button>
              <button><Link to={`/lermais/${id}`} >Ler Mais</Link></button>
              <button onClick={() => deletelivro(livro.id)}>Delete</button>
            </div>
            <hr></hr>
          </div>
        )

        })}

  </div>

  )
}

export default Home