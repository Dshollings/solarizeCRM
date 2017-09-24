import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'jquery'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Modal.setAppElement('#modal');

class leadModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title">Request Free Quote</p>
                      <button className="delete" aria-label="close"></button>
                    </header>
                      <section className="modal-card-body">
                        <fieldset>
                          <p>FIND OUT HOW MUCH YOU CAN SAVE</p>
                          <input type="hidden" name="oid" value="00D80000000dNiA"></input>
                          <input type="hidden" name="retURL" value="#"></input>
                          <div>
                            <input id="first_name" maxLength="40" name="first_name" size="20" type="text" placeholder="First Name" required=""></input>
                          </div>
                          <div>
                            <input id="last_name" maxLength="80" name="last_name" size="20" type="text" placeholder="Last Name" required=""></input>
                          </div>
                          <div>
                            <input id="email" maxLength="80" name="email" size="20" type="email" placeholder="Email Address" required=""></input>
                          </div>
                          <div>
                            <input id="phone" maxLength="15" name="phone" size="20" type="tel" placeholder="Phone" required=""></input>
                          </div>
                          <div>
                            <input id = "streetAddress" name="street" size="20" placeholder="Street Address"></input>
                          </div>
                          <div>
                            <div className="tier">
                              <input id="city" maxLength="40" name="city" size="20" type="text" placeholder="City"></input>
                            </div>
                            <div>
                              <div className="tier">
                                <input id="state" maxLength="2" name="city" size="20" type="text" placeholder="State"></input>
                              </div>
                            </div>
                            <div className="tier">
                              <input id="zip" maxLength="5" name="zip" size="20" type="text" placeholder="Zip"></input>
                            </div>
                          </div>
                          <div>
                            <button type="submit" id="sentmail_submit" name="sentmail[submit]">Submit Info&gt;&gt;</button>
                          </div>
                        </fieldset>
                      </section>
                    <footer className="modal-card-foot">
                      <button className="button is-success" id="butSubmit">Save changes</button>
                      <button className="button is-danger" id="cancel">Cancel</button>
                    </footer>
                  </div>
                
        </Modal>
      </div>
    );
  }
}

export default leadModal;
 
// const props = {};

// ReactDOM.render(<leadModal {...props} />, document.getElementById('modal'))