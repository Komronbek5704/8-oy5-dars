
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setTeachers(response.data.slice(0, 10))) 
      .catch(error => console.error('Error fetching teachers:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Teacher Page</h1>
      <div className="teachers-list">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <img src={`https://robohash.org/${teacher.username}`} alt={teacher.name} />
            <p>{teacher.name}</p>
            <p>{teacher.email}</p>
          </div>
        ))}
      </div>
      </div>
  );
}