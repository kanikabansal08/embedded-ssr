'use client';

import { useState, useEffect } from 'react';
import {loadHyperswitch, HyperswitchProvider, ConnectorConfiguration} from 'hyperswitch-control-center-embedded';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentHeader from './components/ContentHeader';

export default function Home() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [hyperswitchInstance, setHyperswitchInstance] = useState<any>(null);

  useEffect(() => {
    const fetchToken = async (): Promise<string | undefined> => {
      try {
        const response = await fetch(`${window.location.origin}/api/embedded/hyperswitch`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          const errorData = await response.json();
          const error = errorData.error || `API returned ${response.status}`;
          setErrorMessage(error);
          return undefined;
        }

        const responseData = await response.json();
        return responseData.data?.token || responseData.token;
      } catch (error: any) {
        setErrorMessage(error.message || 'Failed to fetch token');
        return undefined;
      }
    };

    const instance = loadHyperswitch({ fetchToken });
    setHyperswitchInstance(instance);
  }, []);

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-layout">
        <Sidebar />
        <main className="main-content">
          <ContentHeader />

          <div className="embed-highlight">
            <div className="embed-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              HyperSwitch Embed
            </div>
            <div className="embedded-container">
              {errorMessage && (
                <div className="error-state">
                  <h3>Connection Error</h3>
                  <p>{errorMessage}</p>
                </div>
              )}
              {hyperswitchInstance && (
                <HyperswitchProvider hyperswitchInstance={hyperswitchInstance}>
                  <ConnectorConfiguration url="https://app.hyperswitch.io" />
                </HyperswitchProvider>
              )}
            </div>
          </div>

          <div className="integration-section">
            <div className="integration-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              <span>How this works</span>
            </div>
            <p className="integration-description">
              The entire connector management widget above is a <strong>HyperSwitch Embeddable Component</strong>.
              Platforms drop it into their dashboards with just a few lines of code — no redirects, no third-party logins,
              and zero HyperSwitch branding visible to sub-merchants.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">React / JSX</span>
              </div>
              <pre><code>{`const hyperswitchInstance = loadHyperswitch({ fetchToken });

<HyperswitchProvider hyperswitchInstance={hyperswitchInstance}>
  <ConnectorConfiguration url="https://app.hyperswitch.io/api" />
</HyperswitchProvider>`}</code></pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
