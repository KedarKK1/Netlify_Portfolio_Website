import React from 'react';
import './LandingPage.css';

const LandingPage = () => {

    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const numBalls = 40;
    const balls=[];

    for(let i = 0; i < numBalls; i++)
    {
        let ball = document.createElement("div")
        ball.classList.add("ball");
        ball.style.background = colors[ Math.floor(Math.random() * colors.length) ]
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`
        ball.style.transform = `scale${(Math.random()*2)}`
        ball.style.width = `${Math.random()*2}em`  
        ball.style.height = ball.style.width

        balls.push(ball)
        document.body.append(ball)
    }

    // Keyframes
    balls.forEach( (elemen, i, ra) => {

        let to = {
            x : Math.random() * ( i % 2 == 0 ? -11 : 11 ),
            y : Math.random() * 5
        }

        let anim = elemen.animate(
            [
                { transform: 'translate(0,0)'},
                { transform: `translate(${to.x}rem, ${to.y}rem)`}
            ],
            {
                duration : (Math.random() + 1) * 2000,
                direction : 'alternate',
                fill : "both",
                iterations : Infinity,
                easing : 'ease-in-out'

            }
        )
    } )


  return (
    <div>
        <section className="myCard">
            Hello World
        </section>
    </div>
  )
}

export default LandingPage