
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setStudents(response.data.slice(0, 10)))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Student Page</h1>
      <div className="students-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <img src={`https://robohash.org/${student.username}`} alt={student.name} />
            <p>{student.name}</p>
            <p>{student.email}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
}