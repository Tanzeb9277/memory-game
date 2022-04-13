import React, { useState, useEffect } from "react";
import Card from "./card";
import './../App.css';


const Game = () => {
    const [points, setPoints] = useState(0);
    const [clicked, addClicked] = useState([])
    const [arrangement, setArrangement] = useState({
        first: 0,
        second: 1,
        third: 2,
        fourth: 3,
        fifth: 4,
        sixth: 5,
        seventh: 6,
        eighth: 7,
        ninth: 8,
        tenth: 9
    })
    const cards = [
        {
         name:"Jon Snow",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/05/Jon-Snow-Aegon-1400.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Jamie Lannister",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/05/Jaime-Cover.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Daenerys Targaryen",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/Game-of-Thrones-----Daenerys-with-Drogon.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Lyanna Mormont",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/04/Lyanna-Mormont-Game-of-Thrones.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Brienne",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/game-of-thrones-brienne-of-tarth-header.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Oberyn Martell",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/Oberyn-Martell-Game-of-Thrones.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Sansa Stark",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/10/Sansa-Stark-Game-of-Thrones-e1539362504993.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Tyrion Lannister",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/05/Tyrion-Looking-Solemn-Cropped.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Cersei Lannister",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/04/Cersei-Queen-1.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
        {
         name:"Arya Stark",
         img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/07/arya-stark-bravery.jpg?q=50&fit=crop&w=750&dpr=1.5",
        },
    ]

    useEffect(() => {
        const cardElements = document.querySelectorAll(".memory-card");
        let added =[];

        const randomNum = () => {
            let num = null;
            while(num === null || added.includes(num)){
                num =  Math.round(Math.random() * 9 );
                
            }
            added.push(num)
            return num;
        }

        const changePositions = () => {
            setArrangement({
                first: randomNum(),
                second: randomNum(),
                third: randomNum(),
                fourth: randomNum(),
                fifth: randomNum(),
                sixth: randomNum(),
                seventh: randomNum(),
                eighth: randomNum(),
                ninth: randomNum(),
                tenth: randomNum()
            })
        }

        const memoryCheck = (e) => {
            let num = parseInt(e.currentTarget.getAttribute("data-num"));
            
            if(!clicked.includes(cards[num].name)){
                console.log("name " + cards[num].name)
                addClicked(oldArray => [...oldArray, cards[num].name]);;
                setPoints(points + 1)
                if( points >= 9){
                    alert("You Win!")
                }
                changePositions()
                
               

            }else {
                alert("Game Over")
                setPoints(0)
                addClicked([]);
                changePositions()
            }
            
            console.log("Array: " + clicked)
        };

        for (let i = 0; i < cards.length; i++){
            cardElements[i].addEventListener("click", memoryCheck)
        }
        
    
    
        return () => {
            for (let i = 0; i < cards.length; i++){
                cardElements[i].removeEventListener("click", memoryCheck)
            }
        };
      }, [points]);
    




    return(
        <div className="container">
            <h2 className="text">Click on cards to get points</h2>
            <h2 className="text">Don't click on any cards more than once</h2>
            <div className="game-container" id="game">
            <Card img={cards[arrangement.first].img} name={cards[arrangement.first].name} num={arrangement.first} />
            <Card img={cards[arrangement.second].img} name={cards[arrangement.second].name} num={arrangement.second}/>
            <Card img={cards[arrangement.third].img} name={cards[arrangement.third].name} num={arrangement.third}/>
            <Card img={cards[arrangement.fourth].img} name={cards[arrangement.fourth].name} num={arrangement.fourth}/>
            <Card img={cards[arrangement.fifth].img} name={cards[arrangement.fifth].name} num={arrangement.fifth}/>
            <Card img={cards[arrangement.sixth].img} name={cards[arrangement.sixth].name} num={arrangement.sixth}/>
            <Card img={cards[arrangement.seventh].img} name={cards[arrangement.seventh].name} num={arrangement.seventh}/>
            <Card img={cards[arrangement.eighth].img} name={cards[arrangement.eighth].name} num={arrangement.eighth}/>
            <Card img={cards[arrangement.ninth].img} name={cards[arrangement.ninth].name} num={arrangement.ninth}/>
            <Card img={cards[arrangement.tenth].img} name={cards[arrangement.tenth].name} num={arrangement.tenth}/>
            
            </div>
            <h1 className="text">Points: {points}</h1>
        </div>
        
    )



}

export default Game;


