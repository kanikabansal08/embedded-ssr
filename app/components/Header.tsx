export default function Header() {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
              <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor"/>
            </svg>
            <h1>Embeddable Components</h1>
          </div>
        </div>
        <div className="header-right">
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">Demo User</span>
            </div>
            <div className="user-avatar">
              <span>DU</span>
            </div>
            <a href="#" className="logout-link">Logout</a>
          </div>
        </div>
      </div>
    </header>
  );
}

