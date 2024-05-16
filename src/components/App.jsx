import SignForm from "./registration/registr";
import Wrapper from "./wrapper/wrapper";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function AppComponent() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SignForm />} />
                    <Route path="/wrapper" element={<Wrapper />} />
                </Routes>
            </Router>

        </>
    );
}

export default AppComponent;