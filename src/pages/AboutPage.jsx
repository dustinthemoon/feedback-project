import React from 'react'
import Card from '../components/share/Card'
import { Link } from 'react-router-dom'
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is the project to give feedback to a specific service using ReactJS</p>
        <p>Made with Preder</p>
        <p>
          <Link to="/">Back to homepage</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage