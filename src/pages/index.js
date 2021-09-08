import React, { useState, useEffect } from "react"
import { Container, Footer } from '../containers'
import * as styles from '../Styles'
import { NavBar } from '../components'

const App = () => (
  <main style={styles.pageStyles}>
    <NavBar />
    <Container />
    <Footer />
  </main>
)

export default App;
