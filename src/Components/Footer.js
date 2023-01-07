import React from 'react'

export const Footer = () => {
  let footerStyle = {
    width: '100%'
  }
  return (
    <footer className='bg-dark text-light py-5' style={footerStyle}>
      <p className='text-center'>Copyrights &copy; TodoApp.com</p>        
    </footer>
  )
}
