import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


import axios from "axios";



const Post = () => {

  let navigate = useNavigate();

  const addlivro = data => axios.post("https://api-livro.onrender.com/livros", data)
  .then(() => {
    console.log("foi");
    navigate("/");
  })
  .catch(() => {
    console.log("ferrou");
  })



  
  const validationLiv = yup.object().shape({
    nome: yup.string().required("aaaaaaaaaaaaaaaaaaa").max(20, 'passou de 20'),
    genero: yup.string().required("vvvvvvvvvvvvvvvvvvvvvvv").max(20, 'passoi de 20'),
    prefacio: yup.string().required("vvvvvvvvvvvvvvvvvvvvvvv").max(40, 'passoi de 20')
  });
  
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(validationLiv)
  });
  
  return (
    <div className="main">
      <h1>Criar postagem</h1>
      <form onSubmit={handleSubmit(addlivro)}>
        <div>
        <label>Nome do livro</label>
        <input type='text' name='nome'  {...register('nome')} />
        <p className="error-menssange">{errors.nome?.message}</p>
        </div>
        <hr />

        <div>
        <label>Genero</label>
        <input type='text' name='genero'{...register('genero')} />
        <p className="error-menssange">{errors.genero?.message}</p>
        </div>
        <hr />

        <div>
        <label>prefacio</label>
        <textarea name='prefacio'{...register('prefacio')} />
        <p className="error-menssange">{errors.prefacio?.message}</p>
        </div>
        <hr />

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default Post