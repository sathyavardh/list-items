
import './App.css';
import List from "./components/List";
import { ReactComponent as ActorImg } from "./components/actor.svg"; 

function App() {

  
  return (
    <div className="App">
      <List actor={<ActorImg className="w-6 h-6 inline-block mr-2" />} />
    </div>
  );
}
export default App;
