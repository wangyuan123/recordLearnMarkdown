import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
const Contact = () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)
export default Contact; 