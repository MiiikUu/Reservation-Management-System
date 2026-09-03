import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [role, setRole] = useState('Resident');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

 
  const [activeTab, setActiveTab] = useState('Home');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Incorrect username or password.');
    }
  };

  
  const navItems = [
    { label: 'Home', icon: '🏠' },
    { label: 'Facilities', icon: '🏢' },
    { label: 'Equipment', icon: '📦' },
    { label: 'Schedule', icon: '📅' },
    { label: 'My Requests', icon: '📋' },
    { label: 'My Profile', icon: '👤' },
  ];

  
  const facilitiesData = [
    { id: 1, name: 'Covered Court', type: 'Sports', cap: '300 persons', desc: 'Ideal for basketball, volleyball, and community sports events.', status: 'Available', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500' },
    { id: 2, name: 'Multi-Purpose Hall', type: 'Events', cap: '150 persons', desc: 'Spacious hall for seminars, meetings, and community gatherings.', status: 'Available', img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500' },
    { id: 3, name: 'Barangay Hall', type: 'Office', cap: '100 persons', desc: 'Main barangay hall for official meetings and community programs.', status: 'Available', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500' },
    { id: 4, name: 'Stage / Plaza', type: 'Open Space', cap: 'Open Air', desc: 'Open-air stage and plaza for performances and outdoor events.', status: 'Available', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500' },
    { id: 5, name: 'Basketball Court', type: 'Sports', cap: '200 persons', desc: 'Outdoor sports court for practice and recreational games.', status: 'Under Maintenance', img: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=500' },
  ];

  const equipmentData = [
    { id: 1, name: 'Monoblock Chairs', category: 'Seating', avail: '150 / 200', pct: 75, status: 'Available', desc: 'Stackable plastic chairs for events and gatherings.', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=300' },
    { id: 2, name: 'Tent', category: 'Structure', avail: '8 / 10', pct: 80, status: 'Available', desc: 'Large event tents for outdoor barangay programs.', img: 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=300' },
    { id: 3, name: 'Sound System', category: 'Audio', avail: '2 / 5', pct: 40, status: 'Available', desc: 'PA system with speakers, amplifier, and mixer.', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300' },
    { id: 4, name: 'Microphone', category: 'Audio', avail: '4 / 6', pct: 67, status: 'Available', desc: 'Wired and wireless microphones for events.', img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300' },
    { id: 5, name: 'Projector', category: 'Audio Visual', avail: '0 / 3', pct: 0, status: 'Not Available', desc: 'LCD projectors for presentations and screenings.', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300' },
  ];

  const requestsData = [
    { id: 'BR-260520-00124', title: 'Covered Court', event: 'Basketball Practice', date: 'May 30, 2026 - 3:00 PM - 5:00 PM', status: 'Pending' },
    { id: 'BR-260505-00102', title: 'Multi-Purpose Hall', event: 'Seminar', date: 'May 5, 2026 - 1:00 PM - 4:00 PM', status: 'Approved' },
    { id: 'BR-260501-00100', title: 'Sound System', event: 'Community Program', date: 'May 1, 2026 - 8:00 AM - 12:00 PM', status: 'Completed' },
    { id: 'BR-260415-00095', title: 'Barangay Hall', event: 'Meeting', date: 'Apr 15, 2026 - 8:00 AM - 12:00 PM', status: 'Rejected' },
  ];

  
  if (loggedIn) {
    return (
      <div className="dashboard-container">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <div className="sidebar-brand">
            <div className="brand-logo">B</div>
            <div>
              <h3>BaraOne</h3>
              <p>One Barangay, One Reservation.</p>
            </div>
          </div>

          <div className="user-card" onClick={() => setActiveTab('My Profile')} style={{ cursor: 'pointer' }}>
            <div className="user-avatar">ML</div>
            <div className="user-info">
              <h4>Maria Lim</h4>
              <p>Resident · View Profile</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`nav-item ${activeTab === item.label ? 'active' : ''}`}
                onClick={() => setActiveTab(item.label)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <button className="logout-btn" onClick={() => setLoggedIn(false)}>
              ↳ Logout
            </button>
          </div>
        </aside>

        
        <main className="main-content">
          {/* Top Header */}
          <header className="content-header">
            <div>
              <h2>{activeTab === 'Home' ? 'Good morning, Maria' : activeTab}</h2>
              <p>{activeTab === 'Home' ? "Here's what's available in Barangay San Isidro today." : `Manage and view your ${activeTab.toLowerCase()}.`}</p>
            </div>
            <div className="header-right">
              <span>📅 May 20, 2026</span>
              <div className="notification-bell">🔔<span className="bell-dot"></span></div>
            </div>
          </header>

          
          {activeTab === 'Home' && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-data">
                    <h3>1</h3>
                    <p>My Pending Requests</p>
                  </div>
                  <div className="stat-icon purple">📋</div>
                </div>
                <div className="stat-card">
                  <div className="stat-data">
                    <h3>2</h3>
                    <p>Approved Reservations</p>
                  </div>
                  <div className="stat-icon green">✅</div>
                </div>
                <div className="stat-card">
                  <div className="stat-data">
                    <h3>4</h3>
                    <p>Available Facilities</p>
                  </div>
                  <div className="stat-icon purple">🏢</div>
                </div>
              </div>

              <div className="home-split-grid">
                <div className="section-box">
                  <div className="box-header">
                    <h4>Available Facilities</h4>
                    <button className="link-btn" onClick={() => setActiveTab('Facilities')}>View all</button>
                  </div>
                  <div className="mini-list">
                    {facilitiesData.slice(0, 3).map((f) => (
                      <div key={f.id} className="mini-item">
                        <img src={f.img} alt={f.name} />
                        <div className="mini-info">
                          <h5>{f.name}</h5>
                          <p>{f.type}</p>
                        </div>
                        <span className="badge-available">Available</span>
                        <button className="action-sm-btn" onClick={() => setActiveTab('Facilities')}>Reserve</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-box">
                  <div className="box-header">
                    <h4>My Requests</h4>
                    <button className="link-btn" onClick={() => setActiveTab('My Requests')}>View all</button>
                  </div>
                  <div className="mini-list">
                    {requestsData.slice(0, 3).map((r) => (
                      <div key={r.id} className="mini-item">
                        <div className="mini-info">
                          <h5>{r.title}</h5>
                          <p>{r.date}</p>
                          <small className="text-muted">{r.id}</small>
                        </div>
                        <span className={`status-pill ${r.status.toLowerCase()}`}>{r.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="quick-actions-box">
                <h4>Quick Actions</h4>
                <div className="quick-actions-grid">
                  <button onClick={() => setActiveTab('Facilities')} className="qa-btn">🏢 Browse Facilities</button>
                  <button onClick={() => setActiveTab('Equipment')} className="qa-btn">📦 Browse Equipment</button>
                  <button onClick={() => setActiveTab('Schedule')} className="qa-btn">📅 View Schedule</button>
                  <button onClick={() => setActiveTab('My Requests')} className="qa-btn">📋 My Requests</button>
                </div>
              </div>
            </>
          )}

          
          {activeTab === 'Facilities' && (
            <div>
              <div className="filter-bar">
                <input type="text" placeholder="Search facilities..." className="search-input" />
                <div className="filter-tags">
                  <button className="tag-btn active">All</button>
                  <button className="tag-btn">Available</button>
                  <button className="tag-btn">Sports</button>
                  <button className="tag-btn">Events</button>
                </div>
              </div>
              <div className="cards-grid">
                {facilitiesData.map((f) => (
                  <div key={f.id} className="facility-card">
                    <div className="card-img-wrapper">
                      <img src={f.img} alt={f.name} />
                      <span className={`badge-overlay ${f.status === 'Available' ? 'green' : 'red'}`}>{f.status}</span>
                    </div>
                    <div className="card-body">
                      <div className="card-title-row">
                        <h4>{f.name}</h4>
                        <span className="type-tag">{f.type}</span>
                      </div>
                      <p className="card-desc">{f.desc}</p>
                      <small className="capacity-text">Capacity: {f.cap}</small>
                      <button className={`card-action-btn ${f.status === 'Available' ? 'green-btn' : 'disabled-btn'}`}>
                        {f.status === 'Available' ? '+ Reserve This Facility' : 'Unavailable'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          
          {activeTab === 'Equipment' && (
            <div>
              <div className="filter-bar">
                <input type="text" placeholder="Search equipment..." className="search-input" />
              </div>
              <div className="cards-grid">
                {equipmentData.map((e) => (
                  <div key={e.id} className="equipment-card">
                    <div className="eq-header">
                      <img src={e.img} alt={e.name} />
                      <div>
                        <h4>{e.name}</h4>
                        <span className="badge-available">{e.status}</span>
                        <p className="eq-category">{e.category}</p>
                      </div>
                    </div>
                    <p className="card-desc">{e.desc}</p>
                    <div className="progress-section">
                      <div className="progress-labels">
                        <span>Available: {e.avail}</span>
                        <span>{e.pct}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div className="progress-fill" style={{ width: `${e.pct}%` }}></div>
                      </div>
                    </div>
                    <button className={`card-action-btn ${e.pct > 0 ? 'purple-btn' : 'disabled-btn'}`}>
                      {e.pct > 0 ? '+ Add to Reservation' : 'Not Available'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

      
          {activeTab === 'Schedule' && (
            <div className="schedule-layout">
              <div className="calendar-box">
                <div className="calendar-header">
                  <h3>May 2026</h3>
                  <div className="cal-nav"><button>&lt;</button><button>&gt;</button></div>
                </div>
                <div className="calendar-grid">
                  <div className="cal-day-head">Sun</div><div className="cal-day-head">Mon</div><div className="cal-day-head">Tue</div><div className="cal-day-head">Wed</div><div className="cal-day-head">Thu</div><div className="cal-day-head">Fri</div><div className="cal-day-head">Sat</div>
                  {Array.from({ length: 31 }, (_, i) => (
                    <div key={i} className="cal-day-cell">
                      <span className="day-number">{i + 1}</span>
                      {i + 1 === 15 && <span className="event-tag purple">Basketball Practice</span>}
                      {i + 1 === 20 && <span className="event-tag green">Seminar</span>}
                      {i + 1 === 28 && <span className="event-tag green">Sports Fest</span>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="side-prompt-box">
                <h4>Select a date</h4>
                <p>Click on a highlighted date to see what's scheduled.</p>
                <div className="cta-box">
                  <p><strong>Planning a reservation?</strong><br/>Check the calendar for available dates before submitting your request.</p>
                  <button className="green-btn w-100 mt-2" onClick={() => setActiveTab('Facilities')}>Submit a Request</button>
                </div>
              </div>
            </div>
          )}

        
          {activeTab === 'My Requests' && (
            <div className="table-section">
              <div className="table-header">
                <h3>My Requests</h3>
                <p>Track the status of your reservation requests.</p>
              </div>
              <div className="filter-tags mb-3">
                <button className="tag-btn active">All</button>
                <button className="tag-btn">Pending</button>
                <button className="tag-btn">Approved</button>
                <button className="tag-btn">Completed</button>
                <button className="tag-btn">Rejected</button>
              </div>
              <div className="requests-list">
                {requestsData.map((r) => (
                  <div key={r.id} className="request-card-row">
                    <div className="req-main-info">
                      <h5>{r.title} <span className="event-subtitle">· {r.event}</span></h5>
                      <p className="req-date">{r.date}</p>
                    </div>
                    <div className="req-status-area">
                      <span className={`status-pill ${r.status.toLowerCase()}`}>{r.status}</span>
                      <small className="req-id">{r.id}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        
          {activeTab === 'My Profile' && (
            <div className="profile-grid">
              <div className="profile-card">
                <div className="profile-avatar-large">ML</div>
                <h3>Maria Lim</h3>
                <p className="role-badge">Resident</p>
                <span className="active-tag">● Active Account</span>
                <hr />
                <div className="profile-meta">
                  <p><strong>Email:</strong> maria.lim@email.com</p>
                  <p><strong>Contact:</strong> 0922 987 6543</p>
                  <p><strong>Purok:</strong> Purok 1</p>
                </div>
              </div>

              <div className="profile-details-column">
                <div className="section-box">
                  <div className="box-header">
                    <h4>Personal Information</h4>
                    <button className="link-btn">Edit Profile</button>
                  </div>
                  <div className="info-grid">
                    <div><small>FIRST NAME</small><p>Maria</p></div>
                    <div><small>LAST NAME</small><p>Lim</p></div>
                    <div><small>EMAIL ADDRESS</small><p>maria.lim@email.com</p></div>
                    <div><small>CONTACT NUMBER</small><p>0922 987 6543</p></div>
                    <div><small>PUROK</small><p>Purok 1</p></div>
                    <div><small>BIRTHDATE</small><p>March 22, 1995</p></div>
                    <div><small>GENDER</small><p>Female</p></div>
                    <div><small>FULL ADDRESS</small><p>Purok 1, Barangay San Isidro</p></div>
                  </div>
                </div>

                <div className="section-box mt-3">
                  <h4>Change Password</h4>
                  <div className="form-group mt-2"><label>Current Password</label><input type="password" className="form-control" /></div>
                  <div className="form-group mt-2"><label>New Password</label><input type="password" className="form-control" /></div>
                  <div className="form-group mt-2"><label>Confirm New Password</label><input type="password" className="form-control" /></div>
                  <button className="green-btn mt-3">Update Password</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="brand">
          <div className="brand-logo">B</div>
          <div>
            <h3>BaraOne</h3>
            <p>One Barangay, One Reservation.</p>
          </div>
        </div>

        <div className="left-content">
          <h1>Your barangay,<br />at your fingertips.</h1>
          <p>Easily check facility availability, borrow equipment, and submit reservation requests — all without going to the barangay hall.</p>
          <div className="features">
            <div>✓ View available facilities & equipment</div>
            <div>✓ Check the barangay schedule</div>
            <div>✓ Submit and track reservation requests</div>
            <div>✓ Get notified on approvals</div>
          </div>
        </div>

        <div className="copyright">© 2026 Barangay Dasmariñas. All rights reserved.</div>
      </div>

      <div className="login-right">
        <div className="login-box">
          <h1>Welcome back</h1>
          <p className="subtitle">Sign in to your BaraOne account.</p>

          <div className="role-buttons">
            <button type="button" className={role === 'Resident' ? 'active' : ''} onClick={() => setRole('Resident')}>Resident</button>
            <button type="button" className={role === 'Admin' ? 'active' : ''} onClick={() => setRole('Admin')}>Admin</button>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>{role} Username</Form.Label>
              <Form.Control
                type="text"
                placeholder={role === 'Admin' ? 'Enter admin username' : 'Enter username'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <div className="password-label">
                <Form.Label>Password</Form.Label>
                <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
              </div>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {error && <p className="login-error">{error}</p>}

            <Button type="submit" className="signin-btn w-100">Sign In</Button>
          </Form>

          <div className="demo-box">
            <strong>✓ Demo credentials</strong>
            <div className="demo-row"><span>Username</span><b>admin</b></div>
            <div className="demo-row"><span>Password</span><b>admin123</b></div>
          </div>

          <p className="signup-text">Don't have an account? <a href="#">Create an account</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;