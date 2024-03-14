import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SnakeGame from '../components/SnakeGame';


export default function NoPage ()
{
    return (
        <div>
            <Navbar />
                <div>
                  <h1 style={{ color: 'white', textAlign: 'center' }}>Oops! Error 404 - Die Seite gibts leider nicht. </h1>
                  <SnakeGame />
                </div>
            <Footer />
        </div>
    );
}