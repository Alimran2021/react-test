import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProfileArticle from './Components/ProfileArticle/ProfileArticle';
import PublishArticle from './Components/ProfileArticle/PublishArticle';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';

function App() {
  return (

     <Routes>
       <Route index element={<Home/>}/>
       <Route path="profile" element={<ProfileArticle />}></Route>
       <Route path="profileArticle" element={<ArticleDetails />}></Route>
       {/* <Route path="publish" element={<PublishArticle/>} /> */}
     </Routes>

    // <div>
    //    {/* <Home/> */}
    //    <ProfileArticle/>
    // </div>
  );
}

export default App;
