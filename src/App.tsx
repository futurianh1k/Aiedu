import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');

  if (currentPage === 'dashboard') {
    return <Dashboard onBack={() => setCurrentPage('landing')} />;
  }

  return <LandingPage onGetStarted={() => setCurrentPage('dashboard')} />;
}
