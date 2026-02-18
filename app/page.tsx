'use client';

import { useState, useEffect } from 'react';
import {loadHyperswitch,HyperswitchProvider,ConnectorConfiguration} from 'hyperswitch-control-center-embedded';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentHeader from './components/ContentHeader';
import SectionHeader from './components/SectionHeader';

export default function Home() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hyperswitchInstance, setHyperswitchInstance] = useState<any>(null);

  useEffect(() => {
    const fetchToken = async (): Promise<string | undefined> => {
      try {
        const response = await fetch(`${window.location.origin}/api/embedded/hyperswitch`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          const error = errorData.error || `API returned ${response.status}`;
          console.error('An error occurred: ', error);
          setErrorMessage(error);
          return undefined;
        }

        const responseData = await response.json();
        const token = responseData.data?.token || responseData.token;
        console.log('Received token from backend:', token);
        return token;
      } catch (error: any) {
        console.error('Error fetching token:', error);
        setErrorMessage(error.message || 'Failed to fetch token');
        return undefined;
      }
    };

    const instance = loadHyperswitch({
      fetchToken: fetchToken,
    });
    
    setHyperswitchInstance(instance);
  }, []);

  return (
    <div className="dashboard-container">
      <Header />

      <div className="dashboard-layout">
        <Sidebar />
        <main className="main-content">
          <ContentHeader/>
          <SectionHeader />
          {/* EMBEDDABLE COMPONENT: Using HyperswitchProvider and ConnectorConfiguration directly */}
          <div className="embedded-container">
            {errorMessage && (
              <div style={{ padding: '20px', background: '#fee', border: '1px solid #fcc', borderRadius: '4px', margin: '20px' }}>
                <strong>Error: </strong>{errorMessage}
              </div>
            )}
            {hyperswitchInstance && (
              <HyperswitchProvider hyperswitchInstance={hyperswitchInstance}>
                <ConnectorConfiguration url="https://app.hyperswitch.io" />
              </HyperswitchProvider>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}