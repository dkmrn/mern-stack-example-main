import React, {useState} from 'react';
import { Link } from "react-router-dom";


export function Logout() {
return (
    <Link to="/">
        <div style={{
            color: "red",
            textDecoration: "underline"
        }}>
            <button>
                Logout
                </button>
        </div>
    </ Link>
);
};
