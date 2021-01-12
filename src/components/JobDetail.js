import React,{ useState, useEffect}  from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const JobDetail = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true)
    const REACT_APP_BACKEND_SERVER_URL=`http://localhost:3001`

    useEffect(() => {
        const fetchData = async () => {
            const url = `${REACT_APP_BACKEND_SERVER_URL}/jobs/${id}`
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            setJob(data);
            setLoading(false);
        };
        fetchData();
        }, []);
    
    return (
        <div>
            This is job detail {id}
            {!loading && (
                    <Card>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Text>Salary: {job.salary}</Card.Text>
                        <Card.Text>Description: {job.description}</Card.Text>
                        <Card.Text>Address: {job.district}, {job.city}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {job.tags.map(t => (<ListGroupItem>{t}</ListGroupItem>))}
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                        {job.benefits.map(t => (<ListGroupItem>{t}</ListGroupItem>))}
                    </ListGroup>
                    <Link to="/jobs">Come back Lists Job</Link>
                    </Card>
            )}
        </div>
    )
}

export default JobDetail
