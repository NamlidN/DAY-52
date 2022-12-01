import "./App.css"
 import DataDisplayer from "./Fetch";
function App() {

  // fetch('http:/bcf5e54edb6345d4ad69e833166fa908')
  // fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-01&sortBy=publishedAt&apiKey=bcf5e54edb6345d4ad69e833166fa908')


//   fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-01&sortBy=publishedAt&apiKey=bcf5e54edb6345d4ad69e833166fa908
//   `)
//   .then((response) => response.json())
//   .then((data) => ((console.log(data.articles
// []    ))))


  return <div className="App">

    <DataDisplayer />
   
  </div>;
}

export default App;
