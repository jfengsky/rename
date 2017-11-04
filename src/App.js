import React from 'react'

import Paths from './components/Paths'
import NameCmp from './components/NameCmp'
import FileList from './components/FileList'

const App = props => (
  <section className="am-container">
  <Paths />
  <NameCmp />
  <FileList />
</section>
)

export default App