import { useState, useEffect } from "react";
import Review from "../components/Review";
import Form from "../components/Form";
import styles from "./Home.module.css";
import add from "../add.png";

function Home() {
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const getReviews = async() => {
      const raw = await (
        await fetch("https://my-app.firstserverless.workers.dev/")
      ).json();
      
      let json = [];
      raw.results.map(item => {
        let data = {};
        Object.keys(item.properties).map(key => {
            if(item.properties[key].type === "rich_text") data[key] = item.properties[key].rich_text[0].plain_text;
            else data[key] = item.properties[key].title[0].plain_text;
        });
        json.push(data);
      });

      setReviews(json);
      setLoading(false);
    }

    const openPopup = () => {
        setIsOpen(true);
    };
    
    useEffect(() => {
        getReviews();
    }, []);
    
    return (
        <div className={styles.container}>
            {loading ? (
            <div className={styles.loader}>
                <span>Loading...</span>
            </div>
            ) : (
            <div className={styles.reviews}>
                {reviews.map(review => (
                    <Review 
                    reference={review.reference}
                    page={review.page}
                    problem={review.problem} 
                    error={review.error} 
                    reason={review.reason} 
                    correct={review.correct} 
                    descript={review.descript} 
                    />)
                )}
                <span className={styles.go__home}>
                    <img className={styles.add} src={add} onClick={openPopup}></img>  
                </span>
            </div>
            )}
            {isOpen ? (
                <Form/>
            ) : ""}
        </div>
    );
}


export default Home;