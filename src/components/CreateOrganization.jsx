import React, { Component } from 'react'
import './CreateOrganization.css'

class CreateOrganization extends Component {
  state = {
    org: {
      id: Date.now(),
      name: '',
      type: 'academic',
      email: '',
      website: '',
      description: '',
      phone: '',
      adress: '',
      lat: '',
      long: ''
    }
  }

  handleChange = e => {
    const org = { ...this.state.org }
    org[e.currentTarget.name] = e.currentTarget.value
    org.id = Date.now()
    this.setState({ org })
  }

  handleSubmit = e => {
    e.preventDefault()
    if(!this.validateForm()){
        alert("Veuillez remplir les champ Nom, Latitude et Longitude !")
        return
    }
    console.log(this.state.org)
    this.props.addOrganization(this.state.org)

    const org = {
      id: Date.now(),
      name: '',
      type: 'academic',
      email: '',
      website: '',
      description: '',
      phone: '',
      adress: '',
      lat: '',
      long: ''
    }
    this.setState({ org })
  }

  validateForm = () => {
    const org = { ...this.state.org }
    return (org.name !== '' && org.lat !== '' && org.long !== '')
  }

  render () {
    const { org } = this.state
    return (
      <div className='app__container delivery'>
        <h3 className='delivery__h3'>Ajouter Un Etablissements </h3>
        <form onSubmit={this.handleSubmit} className='form'>
          <div className='form-group'>
            <label htmlFor='name' className='form-label'>
              Nom:
            </label>
            <input
              value={org.name}
              onChange={this.handleChange}
              name='name'
              className='form-input'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='type' className='form-label'>
              Type:
            </label>
            <select
              value={org.type}
              onChange={this.handleChange}
              name='type'
              className='form-input'
            >
              <option value='academic'>Academique</option>
              <option value='industrial'>Industriel</option>
              <option value='startup'>Startup</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='website' className='form-label'>
              Site Web:
            </label>
            <input
              value={org.website}
              onChange={this.handleChange}
              name='website'
              className='form-input'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input
              value={org.email}
              onChange={this.handleChange}
              name='email'
              className='form-input'
              type='email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone' className='form-label'>
              Tél:
            </label>
            <input
              value={org.phone}
              onChange={this.handleChange}
              name='phone'
              className='form-input'
              type='number'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='adress' className='form-label'>
              Adresse:
            </label>
            <input
              value={org.adress}
              onChange={this.handleChange}
              name='adress'
              className='form-input'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lat' className='form-label'>
              Latitude:
            </label>
            <input
              value={org.lat}
              onChange={this.handleChange}
              name='lat'
              className='form-input'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='long' className='form-label'>
              Longitude:
            </label>
            <input
              value={org.long}
              onChange={this.handleChange}
              name='long'
              className='form-input'
              type='text'
            />
          </div>
          <div className='form-description'>
            <label htmlFor='description' className='form-label'>
              Description:
            </label>
            <textarea
              value={org.description}
              onChange={this.handleChange}
              rows='5'
              maxLength='180'
              name='description'
              className='form-input'
              type='text'
            />
          </div>
          <input
            type='submit'
            className='btn'
            value='Ajouter'
          />
        </form>
      </div>
    )
  }
}

export default CreateOrganization
