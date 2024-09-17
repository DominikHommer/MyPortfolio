import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import Chatbot from './components/Chatbot';

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Home />
            <Chatbot />
        </div>
    );
}

export default App;








