import React from 'react'
import { userContext } from './context';

export default function Header2() {
    const [user, setUser] = React.useContext(userContext);

    const headerStyle = {
        backgroundColor: '#cee',
        textAlign: 'center',
        padding: 5
    };

    const onClickSignout = (event) => {
        event.preventDefault();
        setUser(null); 
    };

    const onClickSignin = (event) => {
        event.preventDefault();
        setUser('Tom & Jerry'); 
    };

    return (
        <div style={headerStyle}>
            <a href=" ">Home</a>&nbsp;-&nbsp;
            <a href=" ">About</a>&nbsp;-&nbsp;
            <a href=" ">Contact</a>&nbsp;-&nbsp;
            {
                user
                ? <span>[{user}&nbsp;:&nbsp;<a href="/" onClick={onClickSignout}>Signout</a>]</span>
                : <span>[<a href="/" onClick={onClickSignin}>Signin</a>]</span>
            }
        </div>
    );
}
