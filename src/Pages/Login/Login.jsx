import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


const Login = () => {

    const { signIn, signInWithGitOrGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        // Google SignIn
        signInWithGitOrGoogle(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.messege);
            })
    }

    const gitHubSignIn = () => {
        // gitHub SignIn
        signInWithGitOrGoogle(githubProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.messege);
            })

    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.messege);
            })
    }


    return (
        <div className="hero mb-20 py-20 bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Login' />
                        </div>
                    </form>
                    <p className='text-center my-2'>New to this please <Link to='/signup' className='text-lg font-bold'>SignUp</Link></p>
                    <div className='text-center space-x-5 my-5'>
                        <button onClick={googleSignIn} className='btn  btn-secondary'>Google</button>
                        <button onClick={gitHubSignIn} className='btn btn-accent'>Github</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;