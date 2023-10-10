import logo from './logo.svg';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";


function App() {
  let todo=[
    {
      sno:1,
      tittle:"Go to Marketplace",
      desc:"To bring vegetables"

    },

    {
      sno:2,
      tittle:"Go to Marketplace",
      desc:"To bring vegetables 2"

    },
    
    {
      sno:3,
      tittle:"Go to Marketplace",
      desc:"To bring vegetables 3"

    }
]
  return (
    <>
     <Header tittle="Dhruv's TodoList" searchbar={true}/>
     <Todos/>
     <Footer/>
     
    </>
  );
}

export default App;
