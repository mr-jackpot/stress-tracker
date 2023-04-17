import './Main.css';
import Summary from '../../components/summary/summary';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import WelcomeMessage from '../../components/welcome-message/welcomeMessage';

function Main() {
  return (
    <div className="Main">
      <Header />
      <WelcomeMessage />
      <Summary />
      <Footer />
    </div>
  );
}

export default Main;
