import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
    {siteTitle}
    </h1>
    <nav>
      <Link to="/">Portfolio</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
)

export default Header
