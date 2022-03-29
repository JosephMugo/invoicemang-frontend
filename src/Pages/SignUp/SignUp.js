import './SignUp.css';
import * as yup from 'yup';
import logo from '../../resources/images/invoicemang_icon.svg';
import passwordBlacklist from '../../resources/passwordBlacklist';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/auth.service';

const SignUpSchema = yup.object({
    username: yup
        .string('Enter username')
        .min(3, 'Username must be a minimum of 3 characters long')
        .required('Username is required'),
    email: yup
        .string('Enter email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter you password')
        .min(8, 'Password should be of minimum 8 characters length')
        .notOneOf(passwordBlacklist, "password not strong enough")
        .required('Password is required'),
    confirmPassword: yup
        .string('Confirm password')
        .notOneOf(passwordBlacklist, "password not strong enough")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const SignUp = () => {

    const history = useHistory();

    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: (data) => {
            AuthService.register(data.username, data.email, data.password)
            .then(() => history.push('/login'));
        }
    })

    const handleLogin = (event) => {
        event.preventDefault()
        history.push('/login')
    }
    
    return (
        <div className="signup-container">
            <Link to="/home">
                <i id="return" class="fas fa-arrow-left"></i>
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column align-items-center justify-content-evenly mb-4">
                    <img src={logo} width="85rem" height="85rem" />
                    <h4 className="mt-2" style={{margin: 0}}>InvoiceMang</h4>
                </div>
                <div class="form-floating mb-4">
                    <input name="username" type="text" class="form-control"  onChange={handleChange} />
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-4">
                    <input name="email" type="text" class="form-control"  onChange={handleChange} />
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-4">
                    <input name="password" type="password" class="form-control" onChange={handleChange} />
                    <label for="floatingInput">Password</label>
                </div>
                <div class="form-floating">
                    <input name="confirmPassword" type="password" class="form-control" onChange={handleChange} />
                    <label for="floatingInput">Cofirm Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Register</button>
                <button id="login-link" className="d-block my-3 text-end" href="#login" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}
 
export default SignUp;