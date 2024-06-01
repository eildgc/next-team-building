import axios from "axios";
import { useState, useEffect } from "react";

export default function CallPage() {
    const [calls, setCalls] = useState([]);

    useEffect (() => {
        axios.get("/api/calls").then((response) => setCalls(response.data));
    }, []);

    return (
        <div>
            <h1>Llamadas</h1>
            <ul>
                {calls.map((call) => {
                    <li key={call._id}>{call.nombre} - {call.numero} - {call.titulo}</li>
                })}
            </ul>
        </div>
    );
}