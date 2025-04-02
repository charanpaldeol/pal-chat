import LandingPage from './pages/LandingPage';
import Navbar from './components/Landing/Navbar';

export default function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <LandingPage />
    </div>
  );
}
