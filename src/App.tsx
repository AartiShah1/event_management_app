import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventPage from './pages/EventPage';
import Footer from '../src/components/Footer/Footer'; 
import Landing_page from './pages/Landing_page';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
