import React from 'react'
import TutorialPage from './components/v2/TutorialPage'

export default function AppVersion2() {
  return (
    <div style={styles.app}>
      <TutorialPage />
    </div>
  )
}

const styles = {
  app: {
    fontFamily: 'sans-serif',
    background: '#000',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    backgroundImage: 'url("https://www.pixelstalk.net/wp-content/uploads/2016/05/Math-Mathematics-Formula-Wallpaper-for-PC.jpg")'
  }
}
