import React from 'react';
import '../../styles/login.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {


    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'didiel@gmail.com',
        lPassword: '123456'
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'didiel',
        rEmail: 'didiel@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });

    const { lEmail, lPassword } = formLoginValues;
    const { rName, rEmail, rPassword1, rPassword2  } = formRegisterValues;

    const dispatch = useDispatch();
    
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLogin( lEmail, lPassword ) );
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Los campos de contraseña deben tener el mismo valor', 'error');
        } else {
            dispatch( startRegister( rName, rEmail, rPassword1 ) );
        }
    };
    
    return (
        <>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={ handleLogin }>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="lEmail"
                                    value={ lEmail }
                                    onChange={ handleLoginInputChange }
                                    />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="lPassword"
                                    value={ lPassword }
                                    onChange={ handleLoginInputChange }
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login" 
                                    />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 login-form-2">
                        <h3>Registro</h3>
                        <form onSubmit={ handleRegister }>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    name="rName"
                                    value={ rName }
                                    onChange={ handleRegisterInputChange }
                                    />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="rEmail"
                                    value={ rEmail }
                                    onChange={ handleRegisterInputChange }
                                    />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="rPassword1"
                                    value={ rPassword1 }
                                    onChange={ handleRegisterInputChange }
                                    />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña"
                                    name="rPassword2"
                                    value={ rPassword2 }
                                    onChange={ handleRegisterInputChange }
                                    />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear cuenta" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}