import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

const LerMais = () => {

  
  const{id} = useParams()

    const [livros, setLivros] = useState([]);
 
    useEffect(() => {
  
      axios.get(`https://api-livro.onrender.com/livros/${id}`)
      .then((Response) => {
        setLivros(Response.data)
      })
  
    }, [])

    return(
      <div className="content">
        <p>{livros.nome}</p>
        <p>{livros.autor}</p>
        <p>{livros.preco}</p>
        <p>{livros.prefacio}</p>
        <p>{livros.genero}</p>
        <p>{livros.capa}</p>
      </div>
    )
  
}

export default LerMais