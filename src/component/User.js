import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setUsers(response.data);
            } catch (err) {
                console.log("Error", err);
            }
        };
        fetchUsers();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default User;
