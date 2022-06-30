import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList ({friends}) {
  return (
    <ul className={css.friendList}>
      {
        friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id} />
        ))
      }
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  ).isRequired
}