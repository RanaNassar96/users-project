import React , { useEffect , useState } from 'react';
import Users from '../../components/users/Users'
import axios from '../../axios'

const Home = () => {

    const [ users , setUsers ] = useState([]);

    

    useEffect( () => {


        const fetchUsers = async () => {
            try {
                const res = await axios.get('/users');
                setUsers(res.data);
            } catch (error) {
                
            }
        }
        fetchUsers();
    } , [])

    return (
        <div  className="home">
            <Users users={users} />
        </div>
    );
};


export default Home;