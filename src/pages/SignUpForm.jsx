import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


function SignUpForm(props) {
    function handleSubmit(e) {
        e.preventDefalut()
    }
    return (
        <div className='login_form_main_container'>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>

                <input type="file" id="file" style={{ display: "none" }} />
                <label htmlFor="file" className="text_add_photo"><FaUserCircle />Add photo</label>
                <input type="text" id="name" name="name" placeholder='Enter name' className="text_input_common_style" /> <br />
                <input type="email" id="email" name="email" placeholder='Enter email' className="text_input_common_style" /> <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Enter password'
                    className="text_input_common_style"
                    title="At least one lowercase letter(a - z) ,  one uppercase letter(A - Z). , one numeric value(0-9)., - At least one special symbol(!@#$%^&*=+-_) , The total length should be greater than or equal to 8 and less or equal to 16."
                    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}" />
                <br />
                <button type="button" className="login_submit_btn" >Submit</button >

                <Link to="/LoginForm" className="link_text">Already have an accounut? Please Sign in</Link>
            </form>
        </div >
    );
}

export default SignUpForm;