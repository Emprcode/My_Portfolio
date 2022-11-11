import './App.css';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div class="wrapper">

    {/* <!-- navbar-  --> */}
    <div id="navbar" class="nav-bar">
    <nav class="navbar navbar-expand-sm bg-none">
        <div class="container">
          <a class="navbar-brand" href="#">
          <img src="./assets/" alt="logo" width="70px"/>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about-me">About me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    </div>

    {/* <!-- hero-section  --> */}
    <Hero />
  

    

    {/* <!-- skills --> */}
    <Skills/>
   

    {/* <!-- projects --> */}
    <Projects/>
   

    {/* <!-- about me  --> */}
    <AboutMe />
    
    


    {/* <!-- contact me  --> */}
    <Contact/> 
    

    {/* <!-- footer  --> */}

    <footer class="bg-dark  p-5 text-center mt-5 xyz">
      {/* <!-- text-light --> */}

      Copyright &copy; All right reserved. Made with ❤️ by me

    </footer>
   
      <a href="#navbar" id="go-up"><i class="fa-solid fa-circle-up"></i></a>

 



   </div>
  );
}

export default App;
