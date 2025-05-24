import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBranchForm from './components/AddBranchForm';
import BranchesList from './components/BranchesList';
import AddSkuForm from './components/AddSkuForm';
import SkuList from './components/SkuList';
import QrScanner from './components/QrScanner';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<BranchesList />} />
            <Route path="/add-branch" element={<AddBranchForm />} />
            <Route path="/skus" element={<SkuList />} />
            <Route path="/add-sku" element={<AddSkuForm />} />
            <Route path="/scan-qr" element={<QrScanner />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 