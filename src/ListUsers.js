import React, {Component} from 'react';

class ListUsers extends Component {
  render () {
    return(
    <ol className="user-list">
      {this.props.profiles.map((profiles) => (
        <li key={profiles.id} className='user-list-item'>
                <p>favorite movie</p>
        </li>
      ))}
    </ol>
    )
  }
}

export default ListUsers