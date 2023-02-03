import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {

	return (
	
	<nav className='nav'>
          <Link to={`/`} >Feed </Link>
          <Link to={`/post`} > Post </Link>  
          <Link to={`/edit/:id`} > Edit</Link> 
          <Link to={`/lermais/:id`} > Ler Mais </Link>
	</nav>
      
	);
}

export default Navbar







































// import { Link } from 'react-router-dom';
// import styles from './Sidebar.css';
// import flower from './flower.jpg';



// const Sidebar = ({mostrar}) => {
//   return (
//     <nav className={mostrar ? 'sidebar active' : 'sidebar'}>
//         <img src={flower} alt="logo" className='logo' />
//         <h1>Sofía</h1>
//         <p>A maior biblioteca do mundo.</p>
        // <ul>
        //     <li>
        //       <Link to={`/`}>Home </Link>
        //     </li>
        //     <li>
        //       <Link to={`/pag2`}>Search </Link>
        //     </li>
        //     <li>
        //       <Link to={`/pag3`}>Book </Link>
        //     </li>
        // </ul>

//         <br/>

//         <h4>Curiosidade</h4>

//         <p><i>σοφία</i> = Sofía</p>
//         <p>Significa sabedoria em grego.</p>
//         <p>Fonts: Vozes da minha cabeça, brincaderia pesquisei no google.</p>
//     </nav>
//   )
// }

// export default Sidebar