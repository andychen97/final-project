import React from 'react';
import AppContext from '../lib/app-context';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editImage: false
    };
    this.fileInputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', this.fileInputRef.current.files[0]);
    fetch('/api/userImage', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        this.setState({ editImage: false });
        this.fileInputRef.current.value = null;
      })
      .catch(err => {
        console.error('error:', err);
      });
  }

  render() {
    const { user } = this.context;
    const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1, user.firstName.length);
    const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1, user.lastName.length);
    const updateImage = this.state.editImage
      ? <form onChange={this.handleSubmit}>
          <div className="row image-input-form">
            <label htmlFor="files" className="choose-file-button">Upload A New Profile Picture</label>
            <input
              required
              id='files'
              type="file"
              name="image"
              className='hide-file-button'
              ref={this.fileInputRef}
              accept=".png, .jpg, .jpeg, .gif" />
            {/* <button type="submit" className="btn btn-primary">Upload</button> */}
          </div>
        </form>
      : null;
    return (
      <div className="row">
        <div className="card">
          <div className='picture-header'>
            <div className="picture-frame" onClick={this.setState(prevState => ({ editImage: !prevState.editImage }))}>
              <img className='profile-card-img'src={user.imageURL} alt="profile-picture" />
            </div>
            <h1 className='profile-card-name'>{firstName} {lastName}</h1>
            <p className='profile-review-count'>0 Reviews</p>
          </div>
          {updateImage}
          <div>
            <h2 className='profile-recent-reviews'>Recent Reviews</h2>
            <hr className='grey-line'/>
          </div>
        </div>
      </div>
    );
  }
}

Profile.contextType = AppContext;
