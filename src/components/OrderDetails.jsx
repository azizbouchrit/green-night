import React from 'react'
import MapContainer from './MapContainer'
import './OrderDetails.css'

const OrderDetails = ({ organizations, selectedOrganization }) => {
  return (
    <div className='app__container org-details'>
      <div className='map-container'>
        <MapContainer organizations={organizations} selectedOrganization={selectedOrganization} />
      </div>
    </div>
  )
}

export default OrderDetails
