import React from 'react'

const AdminButton = ({className = '' , type = "button" , children}) => {
  return (
    <button className={className} type={type} >{children}</button>
  )
}

export default AdminButton