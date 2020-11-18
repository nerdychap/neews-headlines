import Footer from './layout/Footer';
import Header from './layout/Header';
import './styles/styles.css';

const { default: Headlines } = require("./components/Headlines");
const { default: NewsContextProvider } = require("./context/NewsContextProvider");

function App() {
  return (
    <>
      <Header />
      <NewsContextProvider>
        <Headlines />
      </NewsContextProvider>
      <Footer />
    </>
  );
}

export default App;
