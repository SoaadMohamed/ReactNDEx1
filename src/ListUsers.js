import React, { Component } from 'react';

class ListUsers extends Component {
  render() {
    return (
      <ol className="user-list">
        {this.props.profiles.map((profile) => (
          <li key={profile.id} className='user-list-item'>
            <p>{this.props.users[profile.userID].name}'s favorite movie {this.props.movies[profile.favoriteMovieID].name}</p>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListUsers