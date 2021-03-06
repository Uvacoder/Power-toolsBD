import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignUp = e => {
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const passsword = passwordRef.current.value;
        createUserWithEmailAndPassword(email, passsword)


    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-4xl my-5 font-bold "> Signup </h2>
                    <div>
                        <form onSubmit={handleSignUp}>

                            <input ref={nameRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='Name' type="text" name="name" id="1" required />
                            <input ref={emailRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='E-mail' type="email" name="email" id="2" required />
                            <input ref={passwordRef} className='border-2 w-full rounded-md h-12 mt-5' placeholder='password' type="password" name="password" id="3" required />
                            <input className='btn btn-primary text-white w-full max-w-full text-white-100 font-medium mt-9 border-2' type="submit" value="Signup" />
                            <p className='my-5 text-lg font-semibold'>Already have an account? <Link className='text-primary' to="/login">Login </Link>  </p>
                        </form>
                        <div class="flex flex-col w-full border-opacity-50">
                            <div class="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;