import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../globals/globalStore.reducer';
import './Profile.scss';

const Profile = () => {
  const { state } = useContext(StateContext);
  const { user } = state;

  return (
    <div className='profile_wrapper'>
      <div className='profile_banner'>
        <img
          src='https://images.fineartamerica.com/images-medium-large/harbor-seals-sunbathing-on-the-beach-40d7553-wingsdomain-art-and-photography.jpg'
          alt='seals on beach'
        />
        <div className='avatar_box'>
          <img
            src='https://www.pouted.com/wp-content/uploads/2015/02/Why-Is-the-Grumpy-Cat-Always-Angry.jpg'
            alt='grumpy cat'
            id='avatar'
          />
        </div>
      </div>
      <div className='user_info'>
        <h1>{user?.name}</h1>
        <h1>{user?.email}</h1>
        <h1>{user?.gender}</h1>
        <h1>{user?.id}</h1>
      </div>
    </div>
  );
};

export default Profile;
