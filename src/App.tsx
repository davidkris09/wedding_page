import './App.css'
import React from 'react'
import Banner from './components/banner'
import Banner2 from './components/banner2'
import Content from './components/content'
import Timeline from './components/timeline'
import Engagement from './components/engagement'
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <>
      <Banner/>
      <Content/>
      <Banner2/>
      <Timeline/>
      <Engagement/>
    </>
  )
}

export default App
