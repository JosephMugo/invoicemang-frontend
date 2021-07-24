import './SignUp.css';
import * as yup from 'yup';
import logo from '../../resources/images/invoicemang_icon.svg';
import passwordBlacklist from '../../resources/passwordBlacklist';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const SignUpSchema = yup.object({
    firstName: yup
        .string('Enter first name')
        .min(3, 'First name should be a minimum 3 characters long')
        .required('First name is required'),
    lastName: yup
        .string('Enter last name')
        .min(3, 'Last name should be a minimum 3 characters long')
        .required('Last name is required'),
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

    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
        },
        validationSchema: SignUpSchema,
        onSubmit: (data) => {
            alert(JSON.stringify(data, null, 2));
        }
    })
    
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
                    <input name="firstName" type="text" class="form-control"  onChange={handleChange} />
                    <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating mb-4">
                    <input name="lastName" type="text" class="form-control" onChange={handleChange} />
                    <label for="floatingInput">Last Name</label>
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
                <a id="login-link" className="d-block my-3 text-end" href="#login">Login</a>
            </form>
        </div>
    );
}
 
export default SignUp;