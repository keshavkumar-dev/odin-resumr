import './App.css'

function App() {
  // Resume Data Structure
  const userInfo = {
    name: "Keshav Kumar",
    phone: "+91 9876543210",
    email: "keshav@example.com",
    portfolio: "keshav-portfolio.com",
    summary: "Motivated Full-Stack Web Developer with hands-on experience in MERN stack, JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling.  JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling. JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling. JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling. JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling.  JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling.  JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling.  JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling.  JavaScript DOM manipulation, and frontend development. Proven track record in ERP operations and data handling."
  }

  const workExperiences = [
    {
      id: 1,
      company: "Aryan Apparel Pvt Ltd",
      role: "ERP Executive",
      duration: "2026 - Present",
      description: "Managing ERP system operations, data accuracy, and administrative workflows efficiently."
    },
    {
      id: 2,
      company: "Nippon",
      role: "Data Operator",
      duration: "2025 - 2026",
      description: "Handled data input, verification, database reporting, and operational logging."
    },
    {
      id: 3,
      company: "TDK",
      role: "Control Room Operator",
      duration: "2024 - 2025",
      description: "Monitored control room systems, tracked active metrics, and ensured smooth operations."
    }
  ]

  return (
    <main className="resume-container">
      {/* Header Section */}
      <nav className="resume-header">
        <h1>{userInfo.name}</h1>
      
        <div className="info">
          <p>{userInfo.phone}</p>
          <p>{userInfo.email}</p>
          <p>{userInfo.portfolio}</p>
        </div>
      </nav>
  <hr></hr>
      {/* Content Section */}
      <section className="resume-content">
        {/* Summary */}
        <div className="part1">
          <div className="sum">
            <h2>Summary</h2>
            <p>{userInfo.summary}</p>
          </div>
        </div>
  <hr></hr>
        {/* Work Experience */}
        <div className="part2">
          <div className="exp">
            <h2>Work Experience</h2>
            
            {workExperiences.map((exp) => (
              <div className="box" key={exp.id}>
                <h3>{exp.role} - <span>{exp.company}</span></h3>
                <p>{exp.description}</p>
                <p className="duration">{exp.duration}</p>
              </div>
            ))}

            {workExperiences.map((exp) => (
              <div className="box" key={exp.id}>
                <h3>{exp.role} - <span>{exp.company}</span></h3>
                <p>{exp.description}</p>
                <p className="duration">{exp.duration}</p>
              </div>
            ))}
            {workExperiences.map((exp) => (
              <div className="box" key={exp.id}>
                <h3>{exp.role} - <span>{exp.company}</span></h3>
                <p>{exp.description}</p>
                <p className="duration">{exp.duration}</p>
              </div>
            ))}
            {workExperiences.map((exp) => (
              <div className="box" key={exp.id}>
                <h3>{exp.role} - <span>{exp.company}</span></h3>
                <p>{exp.description}</p>
                <p className="duration">{exp.duration}</p>
              </div>
            ))}

            
          </div>
        </div>
      </section>
    </main>
  )
}

export default App