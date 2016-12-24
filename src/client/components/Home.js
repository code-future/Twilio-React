import React from 'react';
export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h5>Send the spiciest copypastas to your friends and family. Just enter their phone number.</h5>
          </div>
        </div>
        <div className='row'>
          <form className='col s12'>
            <div className="row">
              <div className="input-field col s12">
                <input id="phoneNumber" type="tel" className="validate" />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <a className="waves-effect waves-light btn-large">Send</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}