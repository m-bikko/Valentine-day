import { useState } from "react";
import { motion } from "framer-motion";
import HeartImage from "./assets/Heart.png";
import PintaImage from "./assets/LuckeeYu.png";
import "./App.css";

export default function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [yesButtons, setYesButtons] = useState([{ id: 1 }]);

    const handleNoClick = () => {
        const newButtons = Array.from({ length: 5 }, (_, i) => ({ id: yesButtons.length + i + 1 }));
        setYesButtons([...yesButtons, ...newButtons]);
    };

    return (
        <div className="container">
            <motion.img
                src={HeartImage}
                alt="Heart"
                className="heart"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.h1 className="question" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Will you be my valentine?
            </motion.h1>
            <div className="buttons">
                {yesButtons.map((button) => (
                    <motion.button
                        key={button.id}
                        className="yes"
                        onClick={() => setShowPopup(true)}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
                    >
                        Yes
                    </motion.button>
                ))}
                <motion.button
                    className="no"
                    onClick={handleNoClick}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    No
                </motion.button>
            </div>
            {showPopup && (
                <motion.div className="popup" initial={{opacity: 0}} animate={{opacity: 1}}>
                    <h2 className={"clr"}>Beimbet inviting to see you at:</h2>
                    <a href="https://2gis.kz/almaty/search/%D0%BA%D1%83%D1%88%D0%B0%D1%82%D1%8C/firm/9429940001525559?m=76.95642%2C43.245285%2F20"
                       target="_blank" rel="noopener noreferrer">
                        Luckee Yu, 19th February at 19:00
                    </a>
                    <img src={PintaImage} alt="Pinta Interior" className="pinta"/>
                    <div className="clr">
                        Make a screenshot and share to me, my Dear
                    </div>
                </motion.div>
            )}
        </div>
    );
}
