import React, { useState } from 'react'
import { Col, Button, FormGroup, Label, Input, Row } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const initialUser={ email: '', password: '', username: '' }
function Registration() {
    const [user, setUser] = useState(initialUser)
    let navigate=useNavigate()
    const signUp = async() => {
        try {
            let url = `http://localhost:1337/api/auth/local/register`;
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user)
                if (res) {
                  setUser(initialUser)
                  navigate('/login')
                }
            }
        } catch (error) {
            toast.error(error.message,{
                hideProgressBar:true
            })
        }
    }
    const handelUserChange = ({ target }) => {
        let { name, value } = target
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value
        }))
    }

    return (
        <Row className='text-white min-h-[100vh] items-center login register'>
            <Col sm='12' md={{ size: 4, offset: 4 }}>
                <h2>Sign up</h2>
                <FormGroup>
                    <Input type="text" name="username" placeholder="Enter your username" onChange={handelUserChange} value={user.username} />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Enter your email" onChange={handelUserChange} value={user.email} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Enter your password" onChange={handelUserChange} value={user.password} />
                </FormGroup>
                <Button color='primary' onClick={signUp}>Sign up</Button>
            </Col>
        </Row>
    )
}

export default Registration
