
import { Home } from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import MarkdownViewer from './components/MarkdownViewer';
import {AboutMe} from './components/AboutMe';
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
                <Route path="/" element={<AboutMe />} />
        <Route path="/output" element={<MarkdownViewer />} />

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
