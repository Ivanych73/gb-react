import './App.css';
import Message from './components/message';

const messsageText = 'React first lesson';

function App(props) {
  return (
    <div className="App">
      <Message messsageText={messsageText}/>
    </div>
  );
}

export default App;