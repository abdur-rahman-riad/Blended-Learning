import { useEffect } from 'react';
import { useState } from 'react';

const useCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./services.json")
            .then(response => response.json())
            .then(data => setCourses(data))
    }, []);
    return [courses];
}

export default useCourses;