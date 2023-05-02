import React from 'react'

const Header = (props) => {

  const headerStyling = {
    backgroundColor: 'mediumblue',
    color: '#FFF'
  }

  return (
    <header style={headerStyling}>
      <h1>{props.title}</h1>
    </header>
  )
}


Header.defaultProps = {
  title: 'default'
}

export default Header