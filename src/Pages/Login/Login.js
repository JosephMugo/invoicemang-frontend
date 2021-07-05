import './Login.css';
import * as yup from 'yup';
import logo from '../../resources/images/invoicemang_icon.svg';
import { useFormik } from 'formik';

const Login = () => {

    const LoginSchema = yup.object().shape({
        username: yup.string().required,
        password: yup.string().required
    })

    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })


    return (
        <div className="login-container">
            <a href="#return">
                <i id="return" class="fas fa-arrow-left"></i>
            </a>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column align-items-center justify-content-evenly mb-4">
                    <img src={logo} width="85rem" height="85rem" />
                    <h4 className="mt-2" style={{margin: 0}}>InvoiceMang</h4>
                </div>
                <div class="form-floating mb-4">
                    <input name="username" type="text" class="form-control"  onChange={handleChange} />
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating">
                    <input name="password" type="password" class="form-control"  onChange={handleChange} />
                    <label for="floatingInput">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign in</button>
                <a id="create-account-link" className="d-block my-3 text-end" href="#create">Create account</a>
            </form>
        </div>
    );
}

export default Login;