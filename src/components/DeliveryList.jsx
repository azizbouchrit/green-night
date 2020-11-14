import React from 'react'
import './DeliveryList.css'

const DeliveryList = props => {
  return (
    <div className='app__container delivery'>
      <div className='delivery__block delivery__block--waiting'>
        <h3 className='delivery__h3'>Etablissements Academiques</h3>

        <ul className='delivery__list'>
          {props.organizations
            .filter(org => org.type === 'academic')
            .map(org => (
              <li
                key={org.id}
                className='delivery__list-item'
                onClick={() => props.setSelectedOrganization(org)}
              >
                <div className='list-item__container'>
                  <span className='org-name'>{org.name}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='delivery__block delivery__block--shipping'>
        <h3 className='delivery__h3'>Etablissements Industriels</h3>
        <ul className='delivery__list'>
          {props.organizations
            .filter(org => org.type === 'industrial')
            .map(org => (
              <li
                key={org.id}
                className='delivery__list-item'
                onClick={() => props.setSelectedOrganization(org)}
              >
                <div className='list-item__container'>
                  <span className='org-name'>{org.name}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='delivery__block delivery__block--shipping'>
        <h3 className='delivery__h3'>Startups</h3>
        <ul className='delivery__list'>
          {props.organizations
            .filter(org => org.type === 'startup')
            .map(org => (
              <li
                key={org.id}
                className='delivery__list-item'
                onClick={() => props.setSelectedOrganization(org)}
              >
                <div className='list-item__container'>
                  <span className='org-name'>{org.name}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default DeliveryList
