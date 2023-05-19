import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>HOme {user && <span>{user.displayName}</span>}</h3>
        </div>
    );
};

export default Home;