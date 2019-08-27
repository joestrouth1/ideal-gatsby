import Link from './link'
import PropTypes from 'prop-types'
import React from 'react'

const TopBar = () => (
  <div className="bg-green-800 flex flex-row flex-no-wrap py-2 text-center">
    <div className="w-1/3">Apply Now</div>
    <div className="w-1/6">Map</div>
    <div className="w-1/6">Tel</div>
    <div className="w-1/3">Sign In</div>
  </div>
)

const Header = ({ siteTitle }) => (
  <header className="bg-blue-900">
    <div className="px-4 md:px-8 py-4">
      <h1 className="font-serif text-3xl">
        <Link to="/" className="text-orange-100">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
