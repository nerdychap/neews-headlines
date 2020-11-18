const { default: Headlines } = require("./components/Headlines");
const { default: NewsContext, default: NewsContextProvider } = require("./context/NewsContextProvider");

function App() {
  return (
    <>
      <h1 className="text-center">Modus News</h1>
      <NewsContextProvider>
        <Headlines />
      </NewsContextProvider>
    </>
  );
}

export default App;
