import LifeSheet from "../pages/LifeSheet";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path="HojaVida" element={<LifeSheet/>}></Route>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;