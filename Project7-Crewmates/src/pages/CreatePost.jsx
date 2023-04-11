import React from 'react';
import { supabase } from '../client';
import { useState, useEffect } from "react";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [technology, setTechnology] = useState("");
  const [years, setYears] = useState(0);
  const [hackathons, setHackathons] = useState(0);
  const [description, setDescription] = useState("");

    const createPost = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
        .from('Members')
        .insert({name, location, timezone, technology, years, hackathons, description})
        .select()
        if (error) {
          console.error(error);
        } else {
          console.log("Data inserted success: ", data);
          setName("");
          setLocation("");
          setTimezone("");
          setTechnology("");
          setYears(0);
          setHackathons(0);
          setDescription("");
        }
        window.location = "/";
    };

  return (
    <div>
        <form onSubmit={createPost}>
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
        </form>
    </div>
  )
}

export default CreatePost