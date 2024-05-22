import React, { useState } from 'react';

const Roulette: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [number, setNumber] = useState(0);
    const [angle, setAngle] = useState(0);

    const sections = [
        { color: '#f00', text: '1' },
        { color: '#0f0', text: '2' },
        { color: '#00f', text: '3' },
        { color: '#ff0', text: '4' },
        { color: '#f0f', text: '5' },
        { color: '#0ff', text: '6' },
        { color: '#f00', text: '7' },
        { color: '#0f0', text: '8' },
        { color: '#00f', text: '9' },
        { color: '#ff0', text: '10' },
    ];

    const spinRoulette = () => {
        if (isSpinning) {return}
        setIsSpinning(true);
        const randomAngle = Math.floor(Math.random() * 360) + 360 * 5;
        setAngle(randomAngle);
        let start=0;

        const spin=()=>{
            start+=10;
            if(start<randomAngle){
                setAngle(start);
                requestAnimationFrame(spin);
            }
            else{
                setIsSpinning(false);
                const sectionIndex = Math.floor((360 - (start % 360)) / 36);
                setNumber(sectionIndex + 1);
            }
        };
        spin();
    }

    function startRoulette() {
        console.log('ルーレットスタート');
        setNumber(Math.floor(Math.random() * 10) + 1);
    }
    return (
        <div>
            <h1>Roulette</h1>
            {/* 1〜10をランダムに決めるルーレットを作る */}
            <p>1〜10のどれかが選ばれるよ</p>
            <button onClick={startRoulette}>スタート</button>
            {/* ルーレットの結果 */}
            <p>{number}</p>

        </div>
    );
};

export default Roulette;