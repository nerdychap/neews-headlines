import Footer from './layout/Footer';
import Header from './layout/Header';

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
