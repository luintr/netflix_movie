import { useDispatch } from "react-redux";

import { Avatar, Dropdown } from "antd";
import { login } from "../../store";

const Profile = () => {
    const dispatch = useDispatch();

    const logoutAct = () => {
        dispatch(login.actions.changeForm());
        dispatch(login.actions.isLogin());
        localStorage.removeItem("user");
    };

    // TODO: Make Profile page
    const editAct = () => {};

    // const avatarKey = JSON.parse(localStorage.getItem('user')).name.slice(0, 1).toUpperCase()
    const avatarKey = "A";
    const items = [
        {
            key: "1",
            label: (
                <div
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={editAct}
                >
                    Edit
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={logoutAct}
                >
                    Logout
                </div>
            ),
        },
    ];

    return (
        <div className="avatar">
            <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow
            >
                <Avatar
                    size="large"
                    style={{
                        backgroundColor: "#f56a00",
                        verticalAlign: "middle",
                        cursor: "pointer",
                    }}
                >{`${avatarKey}`}</Avatar>
            </Dropdown>
        </div>
    );
};

export default Profile;
