import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../globals/globalStore.reducer';
import './Profile.scss';

const Profile = () => {
  const { state } = useContext(StateContext);
  const { user } = state;

  return (
    <div className='profile_wrapper'>
      <div className='profile_banner'>
        <div className='background_image'>
          <img
            src='https://images.fineartamerica.com/images-medium-large/harbor-seals-sunbathing-on-the-beach-40d7553-wingsdomain-art-and-photography.jpg'
            alt='seals on beach'
          />
        </div>
        <div className='avatar_box'>
          <img
            src='https://www.pouted.com/wp-content/uploads/2015/02/Why-Is-the-Grumpy-Cat-Always-Angry.jpg'
            alt='grumpy cat'
            id='avatar'
          />
          <div className='username'>
            <h1>
              {user?.name} {user?.surname}
            </h1>
          </div>
        </div>
      </div>
      <div className='user_info'>
        <div className='projects'>Projects</div>
        <div className='bio'>
          {!user?.bio ? <h1>Add your bio</h1> : user?.bio}
        </div>
        <div className='user_posts'>
          <h1>User posts</h1>
        </div>
        <div className='synergy_logo'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Synergy-Logo-Large.png'
            alt='synergy logo'
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
