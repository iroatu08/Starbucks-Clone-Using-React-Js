import './App.css';
import Footer from './componenets/Footer/footer'
import Header from './componenets/Header/Header';
import Home from './pages/Home/Home';
import Reward from './pages/Rewards/Reward';
import Giftcard from './pages/GiftCard/Giftcard';
import Join from './pages/Joinnow/joinnow'
import Signin from './pages/Signin/signin'
import Location from './pages/Location/Location'
import Learnmore from './pages/Learnmore/Learnmore';


import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>


      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reward" component={Reward} />
          <Route path="/giftcard" component={Giftcard} />
          <Route path="/joinnow" component={Join} />
          <Route path="/signin" component={Signin} />
          <Route path="/location" component={Location} />
          <Route path="/learnmore" component={Learnmore} />
        </Switch>
      </Router>
      <Footer />
     </>
  );
}

export default App;
