import React from 'react';

// Styles from index.html body
const appContainerStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  background: '#f4f4f9',
  color: '#333',
  margin: 0,
  padding: '40px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

// Styles from index.html header
const headerStyle = {
  textAlign: 'center',
  marginBottom: '40px',
  maxWidth: '600px',
  width: '100%',
};

const headerH1Style = {
  margin: 0,
  fontSize: '2.5rem',
  color: '#2c3e50',
  letterSpacing: '2px',
};

const headerH2Style = {
  margin: '8px 0',
  fontWeight: 'normal',
  fontSize: '1.3rem',
  color: '#555',
};

const headerPStyle = {
  margin: '5px 0',
  fontSize: '1rem',
  color: '#666',
};

// Styles from index.html nav
const navStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
  maxWidth: '400px',
};

const navLinkStyle = {
  textDecoration: 'none',
  fontSize: '1.2rem',
  color: '#2c3e50',
  background: '#d6e4f0',
  padding: '12px 20px',
  borderRadius: '8px',
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
  display: 'block',
};

const App = () => {
  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <h1 style={headerH1Style}>RONAK MISHRA</h1>
        <h2 style={headerH2Style}>Web Development Intern</h2>
        <p style={headerPStyle}>Passionate for building user-friendly digital experiences</p>
        <p style={headerPStyle}>ronak.mishra23@pcu.edu.in | +91 9366261151 | Pune</p>
        <p style={headerPStyle}><a href="https://github.com/ronak200416" target="_blank">github.com/ronak020416</a></p>
      </header>

      <nav style={navStyle}>
        {/* Note: In a full React App, you'd use React Router for client-side navigation */}
        <a href="education.html" style={navLinkStyle}>Education</a>
        <a href="skills.html" style={navLinkStyle}>Skills</a>
        <a href="projects.html" style={navLinkStyle}>Personal Projects</a>
        <a href="certificates.html" style={navLinkStyle}>Certificates</a>
        <a href="extracurricular.html" style={navLinkStyle}>Extracurricular Activities</a>
        <a href="languages.html" style={navLinkStyle}>Languages</a>
        <a href="interests.html" style={navLinkStyle}>Interests</a>
      </nav>
    </div>
  );
};

export default App;