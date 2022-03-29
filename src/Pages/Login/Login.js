import './Login.css';
import * as yup from 'yup';
import logo from '../../resources/images/invoicemang_icon.svg';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import { AuthContext } from '../../Auth/AuthContext';

const Login = () => {

    const history = useHistory();
    const [auth, setAuth] = useContext(AuthContext);

    const LoginSchema = yup.object().shape({
        username: yup.string().required,
        password: yup.string().required
    })

    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        LoginSchema,
        onSubmit: values => {
            AuthService.login(values.username, values.password)
            .then(() => {
                alert('Success');
                setAuth(true);
            })
            .catch((e) => {
                alert(e);
            })
        }
    })

    const handleCreateAccount = () => {
        history.push('/dashboard/view')
    }


    return (
        <div className="login-container">
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
                <div class="form-floating">
                    <input name="password" type="password" class="form-control"  onChange={handleChange} />
                    <label for="floatingInput">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign in</button>
            </form>
            <button id="create-account-link" className="d-block my-3 text-end" onClick={handleCreateAccount}>Create account</button>
        </div>
    );
}

export default Login;