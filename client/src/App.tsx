import { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Dashboard } from './pages';
import { InfluencerSignupModal } from './components/landing';

interface AppContextType {
  openInfluencerModal: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

function App() {
  const [isInfluencerModalOpen, setIsInfluencerModalOpen] = useState(false);

  const openInfluencerModal = () => setIsInfluencerModalOpen(true);
  const closeInfluencerModal = () => setIsInfluencerModalOpen(false);

  return (
    <AppContext.Provider value={{ openInfluencerModal }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      {/* Global Modals */}
      <InfluencerSignupModal
        isOpen={isInfluencerModalOpen}
        onClose={closeInfluencerModal}
      />
    </AppContext.Provider>
  );
}

export default App;
