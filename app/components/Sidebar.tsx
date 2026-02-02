export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <div className="nav-item active">
          <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L3 7V17H8V11H12V17H17V7L10 2Z" fill="currentColor"/>
          </svg>
          <span className="nav-text">Dashboard</span>
        </div>
      </nav>
    </aside>
  );
}

