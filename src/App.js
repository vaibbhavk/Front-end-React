import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import TextHeader from './TextHeader';
import Headphones from './Headphones';
import Video from './Video';
import './Styles.css';

function App() {
  return (
  
      <div class="row">

      <div class="col">
      <HeaderLeft/>
      <br/>
      <TextHeader />
      <Video/>
      </div>

      <div class="col">
        <HeaderRight/> 
        <Headphones />
      </div>

      </div>
  );
}

export default App;
