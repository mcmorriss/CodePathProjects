import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../client';
import { Row, Col, Card, Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
    const [member, setMember] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchMember = async () => {
            const { data, error}  = await supabase
            .from("Members")
            .select("*")
            .eq("id", id)
            if(error){
                console.error(error);
            } else {
                console.log(data[0])
                setMember(data[0]);
            }
            };
        fetchMember();
    }, []);

  return (
    <div>
        {member && 
        <Descriptions title="Member Info" bordered>
            <Descriptions.Item label="Name" span={3}>{member.name}</Descriptions.Item>
            <Descriptions.Item label="Member Since" span={3}>{member.created_at.slice(0, 10)}</Descriptions.Item>
            <Descriptions.Item label="Location"span={2}>{member.location}</Descriptions.Item>
            <Descriptions.Item label="Timezone"span={1}>{member.timezone}</Descriptions.Item>
            <Descriptions.Item label="Years Experience"span={2}>{member.years}</Descriptions.Item>
            <Descriptions.Item label="Hackathons"span={1}>{member.hackathons}</Descriptions.Item>
            <Descriptions.Item label="Technology"span={3}>{member.technology}</Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>{member.description}</Descriptions.Item>
        </Descriptions>        
        }

    </div>
  )
}

export default ViewPost