import { useState } from 'react';

interface User {
    uid: string;
    name: string;
}

export const Usuario = () => {
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Alejandro'
        });
    };

    return (
        <div>
            <h3>Usuario: useState</h3>
            <button className='btn-outline-primary mt-2' onClick={login}>
                Login
            </button>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    );
};