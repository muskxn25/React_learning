import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Datatable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response =>{
            setData(response.data);
         })
         .catch(error =>{
            console.error('Error fetching data: ', error);
         })
    }, [])

 return(
    <div>
        <h2>Data table</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    </div>
 )
}
export default Datatable;