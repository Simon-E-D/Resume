import {Routes, Route, BrowserRouter} from "react-router-dom"
import Landing from './common/landing/Landing';
import Resume from './common/resume/Resume';

function App() {
  return (<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}> </Route>
      <Route path="/resume" element={<Resume/>}> </Route>
    </Routes>
    </BrowserRouter>
  </>);
}

export default App;
