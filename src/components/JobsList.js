import React, { useState, useEffect}  from 'react'
import { Link } from "react-router-dom";
import { Card, Badge } from 'react-bootstrap';

const JobsList = () => {
    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("");
    const [query, setQuery] = useState("");
    const REACT_APP_BACKEND_SERVER_URL=`http://localhost:3001`

    useEffect(() => {
        const fetchData = async () => {
            const url = `${REACT_APP_BACKEND_SERVER_URL}/jobs`
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            setJobList(data);
            setLoading(false);
        };
        fetchData();
        }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleClick = ()=>{
        setQuery(searchTerm);
    }

    return (
        <div>
            <div className="input-group mt-5 mb-3">
                <input type="text" onChange={handleChange} value={searchTerm} className="form-control" placeholder="Search Title"/>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Search</button>
            </div>
            {!loading &&  (jobList.filter(job => job.title.includes(query) || job.tags.includes(query)).map((job) => (
	                <div>
		                <Card>
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Text>
                                    City: {job.city}
                                </Card.Text>
                                {job.tags.map(t => (<Badge variant="success" className="mx-2">{t}</Badge>))}
                            </Card.Body>
                            <Link to={`/jobs/${job.id}`} key={job.id}>View Detail</Link>
                        </Card>
	                </div>
	        )))}
        </div>
    )
}

export default JobsList
