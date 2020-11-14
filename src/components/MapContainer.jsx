import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import './MapContainer.css'

const startupIcon = new Icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/619/619175.svg',
  iconSize: [30, 30]
})
const schoolIcon = new Icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2883/2883921.svg',
  iconSize: [30, 30]
})

const industialIcon = new Icon({
  iconUrl: 'https://www.flaticon.com/premium-icon/icons/svg/2926/2926139.svg',
  iconSize: [30, 30]
})

const renderIcon = type => {
  if (type === 'academic') return schoolIcon
  if (type === 'startup') return startupIcon
  if (type === 'industrial') return industialIcon
}

const MapContainer = ({ organizations, selectedOrganization }) => {
  return (
    <Map
      center={
        selectedOrganization.lat
          ? [
              parseFloat(selectedOrganization.lat),
              parseFloat(selectedOrganization.long)
            ]
          : [36, 9.7]
      }
      zoom={selectedOrganization.lat ? 11 : 8}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {organizations.map(org => (
        <Marker position={[org.lat, org.long]} icon={renderIcon(org.type)}>
          <Popup className='map-popup'>
            <h3 className='popup__h3'>{org.name}</h3>
            <div className='popup__details'>{org.description}</div>
            <div className='popup__infos'>
              <div className='info-type'>Site web:</div>
              <a href={org.website} target='_blank' className='info-content'>
                {org.website}
              </a>
            </div>
            <div className='popup__infos'>
              <div className='info-type'>Email:</div>
              <div className='info-content'>{org.email}</div>
            </div>
            <div className='popup__infos'>
              <div className='info-type'>Téléphone: </div>
              <div className='info-content'>{org.phone}</div>
            </div>
            <div className='popup__infos'>
              <div className='info-type'>Adresse:</div>
              <div className='info-content'>{org.adress}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}

export default MapContainer
