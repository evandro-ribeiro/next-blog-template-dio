import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://bhcobaytrnjeqxjzdsxn.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoY29iYXl0cm5qZXF4anpkc3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NzQwODksImV4cCI6MjA0MTA1MDA4OX0.Oj2HB_nrZiuimn2Q8qULE9L0-OkqzneeSce3wganlMw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoY29iYXl0cm5qZXF4anpkc3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NzQwODksImV4cCI6MjA0MTA1MDA4OX0.Oj2HB_nrZiuimn2Q8qULE9L0-OkqzneeSce3wganlMw"
    }
})