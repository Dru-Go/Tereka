import React, {useState} from 'react';
import Accounts from './accounts';
import ChangePassword from './changePassword';

const styles = {
  active:
    'uppercase py-2 px-5 text-xs cursor-pointer rounded-t-lg bg-green-300',
  inActive:
    'uppercase py-2 px-5 text-xs cursor-pointer rounded-t-lg  hover:bg-green-200',
};

export default function Profile() {
  const [changePassword, setChangePassword] = useState(false);

  return (
    <div>
      <div class="ml-16 mt-10 text-3xl text-green-800"> Account Settings</div>
      <div>
        <div class="ml-16 mt-10 flex items-center">
          <div
            className={
              changePassword === false ? styles.active : styles.inActive
            }
            onClick={() => setChangePassword(false)}
          >
            Profile
          </div>
          <div
            className={
              changePassword === true ? styles.active : styles.inActive
            }
            onClick={() => setChangePassword(true)}
          >
            change password
          </div>
        </div>
        <div class="border-b w-full"></div>
      </div>
      {changePassword && <ChangePassword />}
      {!changePassword && <Accounts />}
    </div>
  );
}
