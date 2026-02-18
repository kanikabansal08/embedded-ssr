export default function Header() {
  return (
    <>
      <div className="demo-banner">
        <div className="demo-banner-content">
          <span className="demo-banner-badge">LIVE DEMO</span>
          <span className="demo-banner-text">
            The payment connector widget on this page is powered by{' '}
            <strong>HyperSwitch Embeddable Components</strong>
          </span>
          <a
            href="https://docs.hyperswitch.io/explore-hyperswitch/account-management/beta-embeddable-components/integration-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="demo-banner-link"
          >
            Learn more →
          </a>
        </div>
      </div>
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <div className="logo-mark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
              </div>
              <h1>CloudCart</h1>
            </div>
          </div>
          <div className="header-right">
            <div className="user-info">
              <div className="user-details">
                <span className="user-name">Sarah Chen</span>
                <span className="user-role">Platform Admin</span>
              </div>
              <div className="user-avatar">SC</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
