import React from 'react';
import AppContext from '../lib/app-context';
import Default from '../../server/public/images/default-profile.png';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editImage: false,
      image: null
    };
    this.fileInputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditImage = this.toggleEditImage.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.context;
    const formData = new FormData();
    formData.append('userId', user.userId);
    formData.append('image', this.fileInputRef.current.files[0]);
    fetch('/api/uploads', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        const [{ imageURL }] = result;
        this.setState({
          editImage: false,
          image: imageURL
        });
        this.fileInputRef.current.value = null;
      })
      .catch(err => {
        console.error('error:', err);
      });
  }

  toggleEditImage(event) {
    this.setState(prevState => ({ editImage: !prevState.editImage }));
  }

  render() {
    const { user } = this.context;
    let firstName;
    let lastName;
    let image;
    if (user) {
      firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1, user.firstName.length);
      lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1, user.lastName.length);
      if (user.imageURL === null) {
        image = Default;
      } else if (user.imageURL) {
        image = user.imageURL;
      }
      if (this.state.image) {
        image = this.state.image;
      }
    }
    const updateImage = this.state.editImage
      ? <form onChange={this.handleSubmit}>
          <div className='row image-input-form'>
            <label htmlFor='files' className='choose-file-button'>Upload A New Profile Picture</label>
            <input
              required
              id='files'
              type='file'
              name='image'
              className='hide-file-button'
              ref={this.fileInputRef}
              accept='.png, .jpg, .jpeg' />
          </div>
        </form>
      : null;
    return (
      <div className='row'>
        <div className='card'>
          <div className='picture-header'>
            <div className='picture-frame' onClick={this.toggleEditImage}>
              <img className='profile-card-img' src={image} alt='profile-picture' />
              <i className='fa-solid fa-pen-to-square fa-xl edit-image-icon' />
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
