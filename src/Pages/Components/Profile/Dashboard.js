import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const userName = user.displayName;
    const userEmail = user.email;
    return (
        <div class="drawer drawer-mobile px-12 mt-10">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col text-center text-2xl font-semibold">

                <h1> My Items  </h1>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-slate-200">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <li className='text-center text-xl font-bold uppercase'> <h3>{userName}</h3> </li>
                    <li className='text-lg font-medium text-primary'> <h3> {userEmail} </h3></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;