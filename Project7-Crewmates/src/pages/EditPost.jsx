import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../client';
import { Row, Col, Card } from 'antd';
import { useParams } from 'react-router-dom';

const EditPost = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [timezone, setTimezone] = useState("");
    const [technology, setTechnology] = useState("");
    const [years, setYears] = useState(0);
    const [hackathons, setHackathons] = useState(0);
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const [member, setMember] = useState(null)

    useEffect(() => {
        const fetchMember = async () => {
            const { data, error } = await supabase
                .from("Members")
                .select("*")
                .eq("id", id)
                .single();
                if (error) {
                    console.error(error)
                } else {
                    setMember(data)
                }
        }
        fetchMember();

    }, [id]);

    const updateMember = async (event) => {
        event.preventDefault();

        await supabase
        .from('Members')
        .update({name, location, timezone, technology, years, hackathons, description})
        .eq('id', id)

        window.location = "/";
    }

    const deleteMember = async (event) => {
        event.preventDefault();
        await supabase
        .from("Members")
        .delete()
        .eq("id", id);

        window.location = "/";
    }

  return (
    <div>
        <h2>Update Member Info: </h2>
        <form onSubmit={updateMember}>
            <label for="name">Name</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br />

            <label for="location">Location</label>
            <input type='text'  name='location' value={location} onChange={(e) => setLocation(e.target.value)}/>
            <br />

            <label for="timezone">Timezone</label>
            <input type='text' name='timezone' value={timezone} onChange={(e) => setTimezone(e.target.value)}/>
            <br />

            <label for="technology">Technologies</label>
            <input type='text' name='technology' value={technology} onChange={(e) => setTechnology(e.target.value)}/>
            <br />

            <label for="years">Years Experience</label>
            <input type='number' name='years' value={years} onChange={(e) => setYears(e.target.value)}/>
            <br />

            <label for="hackathons">Previous Hackathons</label>
            <input type='number' name='hackathons' value={hackathons} onChange={(e) => setHackathons(e.target.value)}/>
            <br />

            <label for="description">Description</label><br />
            <textarea rows="5" cols="50" value={description} onChange={(e) => setDescription(e.target.value)}>
            </textarea>
            <br/>

            <input type="submit" />
            <br/>
            <h3>OR</h3>
           

            
            <button onClick={deleteMember}>❌ Delete Member ❌</button>

                      
        </form>

    </div>
  )
}

export default EditPost