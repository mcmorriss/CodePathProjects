import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../client';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const ReadPost = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const { data, error}  = await supabase
            .from("Members")
            .select("*");
            if(error){
                console.error(error);
            } else {
                setMembers(data);
            }
            };
        fetchMembers();
    }, []);

  return (
    <div>
        <h2>Current Members: </h2>
        <Row gutter={16}>

          {members.map((member) => (
            <Col key={member.id} span={8}>
                <Card title={member.name}>
                    <p>Location: {member.location}</p>
                    <p>Timezone: {member.timezone}</p>
                    <p>Technology: {member.technology}</p>
                    <Link to={`/edit/${member.id}`}><button>Edit Member</button></Link>
                    <Link to={`/view/${member.id}`}><button>View More </button></Link>
                </Card>
            </Col>
            ))}

        </Row>
    </div>
  )
}

export default ReadPost