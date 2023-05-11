import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Button, FormGroup, Input, Row } from 'reactstrap';
import { storeUser } from '../../helper';


const initialUser = { password: '', identifier: '' }
function Login() {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();
    const handelChange = ({target}) => {
        let {name,value}=target
        setUser((currentUser)=>({
            ...currentUser,
            [name] : value,
        }))
     }
    const handelLogin =async () => { 
        const url = `http://localhost:1337/api/auth/local`
        try {
            if (user.identifier && user.password) {
                const {data} = await axios.post(url,user)
                if (data.jwt) {
                    storeUser(data)
                    toast.success('Logged in successfully',{
                        hideProgressBar:true
                    })
                    setUser(initialUser)
                    navigate('/')
                }
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message,{
                hideProgressBar:true
            })
        }
    }
    return (
        <Row className='text-white min-h-[100vh] items-center login'>
            <Col sm='12' md={{size:'4',offset:'4'}}>
                <h2 className="text-white">Login:</h2>
                <FormGroup>
                    <Input type="email" name="identifier" placeholder="Enter your email" onChange={handelChange} value={user.identifier} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Enter your password" onChange={handelChange} value={user.password} />
                </FormGroup>
                <Button color='primary' onClick={handelLogin}>Login</Button>
                <h6 className='my-3'>
                    Click <Link to='/registeration'>Here</Link> to sign up
                </h6>
            </Col>
        </Row>
    )
}

export default Login
