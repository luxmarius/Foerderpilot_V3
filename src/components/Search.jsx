import Card from "../components/Card";
import '../App.css';
import LoadingCard from "./LoadingCards";
import React, { useState, useEffect, useRef } from 'react';


export default function Search(props) {

    const logo = "https://i.ibb.co/pKxJv5r/Logo-Navigator.png";
    const [description, setDescription] = useState('');
    const [bundesland, setBundesland] = useState('');
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(false); // Changed for clarity
    const [showLoadingCards, setShowLoadingCards] = useState(false); // New state for controlling the display of LoadingCards
    const searchContainerRef = useRef(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Begin loading
            try {
                const response = await fetch(''); // Replace with your actual endpoint
                const data = await response.json();
                setCardsData(data); // Update state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // End loading whether there was an error or not
            }
        };
        fetchData();
    }, []); // This effect only runs once when the component mounts

    const handleSubmit = async () => {
        searchContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        setShowLoadingCards(true); // Show the LoadingCards component
        setTimeout(async () => { // Wait for 2 seconds before fetching data
            const userData = {
                description,
                bundesland,
            };
            try {
                const response = await fetch('https://foerderpilot2-ppoh2uujia-uc.a.run.app', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });
                const responseData = await response.json();
                console.log(responseData); // Handle the response data as needed
                const fetchResponse = await fetch('your-backend-endpoint'); // Fetch the actual cards data
                const cards = await fetchResponse.json();
                setCardsData(cards); // Set the fetched cards data
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setShowLoadingCards(false); // Hide the LoadingCards component
                setLoading(false); // In case you need to handle other loading states
                
            }
        }, 3000); // 2000 milliseconds delay
        if (props.onSearch) {
            props.onSearch();
          }
    };

    return (
        <div className="search-container p-2 md:p-4" ref={searchContainerRef}>
            <div className="grid card place-items-left">
                <div className="chat chat-start mb-5">
                    <div className="chat-bubble text-left">Willkommen zum Interaktiven Förderpilot. <br /> <br />
                    Durchforsten Sie mit nur einem Klick tausende von Förderungen von Bund, Länder und EU.<br /> <br />
                    Beschreiben Sie kurz Ihre Firma und Ihr Vorhaben, wählen Sie das Bundesland Ihres Unternemenssitzes aus und wir zeigen Ihnen relevante Förderungen.<br /><br />
                    </div>
                </div>
                <textarea className="textarea textarea-bordered" placeholder="Beschreiben Sie Ihr Vorhaben" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <div className="flex items-center mt-5">
                    <details className="dropdown">
                        <summary className="m-1 btn">Bundesland wählen</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a href="#" onClick={() => setBundesland('Baden-Württemberg')}>Baden-Württemberg</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Bayern')}>Bayern</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Berlin')}>Berlin</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Brandenburg')}>Brandenburg</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Bremen')}>Bremen</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Hamburg')}>Hamburg</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Hessen')}>Hessen</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Mecklenburg-Vorpommern')}>Mecklenburg-Vorpommern</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Niedersachsen')}>Niedersachsen</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Nordrhein-Westfalen')}>Nordrhein-Westfalen</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Rheinland-Pfalz')}>Rheinland-Pfalz</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Saarland')}>Saarland</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Sachsen')}>Sachsen</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Sachsen-Anhalt')}>Sachsen-Anhalt</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Schleswig-Holstein')}>Schleswig-Holstein</a></li>
                                    <li><a href="#" onClick={() => setBundesland('Thüringen')}>Thüringen</a></li>
                        </ul>
                    </details>
                    <button className="m-1 btn" onClick={handleSubmit}>Suche Starten</button>
                </div>
            </div>
            <section className="flex flex-nowrap overflow-x-auto space-x-4 mb-1 opacity-8">
                {showLoadingCards ? (
                    <>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </>
                ) : (
                    cardsData.map(item => <Card key={item.id} {...item} />)
                )}
            </section>
        </div>
    );
}
