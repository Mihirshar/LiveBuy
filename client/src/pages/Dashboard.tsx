import { useState } from 'react';
import { DashboardLayout, OverviewSection, GoLiveSection } from '../components/dashboard';

export function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'live':
        return <GoLiveSection />;
      case 'overview':
      default:
        return <OverviewSection />;
    }
  };

  return (
    <DashboardLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderSection()}
    </DashboardLayout>
  );
}

export default Dashboard;
