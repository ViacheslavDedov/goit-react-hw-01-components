import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import Wrapper from "./Wrapper/Wrapper";
import FriendList from './FriendList/FriendList';
// import FriendListItem from './FriendListItem/FriendListItem';
// import TransactionHistory from './TransactionHistory/TransactionHistory';


import user from 'path/to/user.json';
import data from 'path/to/data.json';
import friends from "path/to/friends.json";
// import transactions from "path/to/transactions.json";


export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics 
        title="Upload stats" 
        stats={data} 
      />
    

      <FriendList friends={friends} /> 


      {/* <TransactionHistory items={transactions} /> */}

      
      </Wrapper>
  );
};