import Shoppingcart from "./components/Shoppingcart";
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Shoppingcart />
      </div>
    </Provider>
  );
}

export default App;
