import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";

const Register = () => {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const { signUpUser, signUpGoogle, updateProfileUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        setErrorMsg('')

        if (password.length < 6) {
            setErrorMsg('Password must be at least 6 characters long.')
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setErrorMsg('Password must contain at least one uppercase letter.')
            return;
        }

        if (!/[a-z]/.test(password)) {
            setErrorMsg('Password must contain at least one lowercase letter.')
            return;
        }

        signUpUser(email, password)
            .then((result) => {
                console.log(result.user)
                updateProfileUser({ displayName: name, photoURL: photo })
                navigate('/')
            })
            .catch((error) => {
                setErrorMsg(error.message)
            })
    }

    const handleGoogle = () => {
        signUpGoogle()
            .then((result) => {
                console.log(result.user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero-content flex-col w-11/12 mx-auto">
            <Helmet>
                <title>Register - Winter Clothes Donation</title>
            </Helmet>
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Create an account</h1>
            </div>
            <div className="card w-full max-w-md shrink-0 border-2">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#F59E0B] text-white font-bold">Register</button>
                    </div>
                    <p>Already have an account? <Link to='/login' className="text-[#F59E0B] border-b border-orange-300">Login</Link></p>
                    {
                        errorMsg && <p>{errorMsg}</p>
                    }
                </form>
            </div>
            <div>
                <div className="flex items-center justify-center space-x-2">
                    <hr className="border-t-2 border-gray-400 flex-grow" />
                    <span className="text-black font-medium">Or</span>
                    <hr className="border-t-2 border-gray-400 flex-grow" />
                </div>
                <button onClick={handleGoogle} className="btn border-2 border-gray-400 rounded-full px-10"><FaGoogle></FaGoogle>Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;