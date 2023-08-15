import React from 'react';
import { Avatar, Dropdown } from 'antd'
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/login';
// import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const logoutAct = () => {
        dispatch(loginActions.changeForm())
        dispatch(loginActions.isLogin())
        localStorage.removeItem('user')
    }

    const editAct = () => {
        // dispatch(loginActions.openEditform())
        // navigate('auth')
        console.log(1)
    }

    const avatarKey = JSON.parse(localStorage.getItem('user')).name.slice(0, 1).toUpperCase()
    const items = [
        {
            key: '1',
            label: (
                <div target="_blank" rel="noopener noreferrer" onClick={editAct}>Edit</div>
            ),
        },
        {
            key: '2',
            label: (
                <div target="_blank" rel="noopener noreferrer" onClick={logoutAct}>Logout</div>
            ),
        },
    ]

    return (
        <div className='avatar'>
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <Avatar
                    size="large"
                    style={{
                        backgroundColor: '#f56a00',
                        verticalAlign: 'middle',
                        cursor: 'pointer'
                    }}
                >{`${avatarKey}`}</Avatar>
            </Dropdown>
        </div>
    )
}

export default Profile