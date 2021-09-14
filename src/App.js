import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Inicio from './components/Inicio';
import Recompensas from './components/Recompensas';
import Overlay from './components/Overlay';
import Gracias from './components/Gracias';

const App = () => {

    const inputRadio = document.getElementsByName('pledge_radio');

    const [bookmark, setBoomark] = useState(false);

    const [modalIsOpen, setIsOpen] = useState('invisible');

    const [mostrarGracias, setMostrarGracias] = useState('invisible');

    const [aporte_bamboo, setBamboo] = useState(0);
    const [aporte_black, setBlack] = useState(0);
    const [total, setTotal] = useState(89914);
    const [backers, setBackers] = useState(5007);
    const [pledgeNoReward, setPledgeNoReward] = useState(false);
    const [pledgeBamboo, setPledgeBamboo] = useState(false);
    const [pledgeBlack, setPledgeBlack] = useState(false);

    const guardarValorBamboo = (e) => {
        const valor = e.target.value
        setBamboo(parseInt(valor));
        setBlack(0)

    }
    const guardarValorBlack = (e) => {
        const valor = e.target.value
        setBlack(parseInt(valor));
        setBamboo(0)
    }

    function closeModal() {
        setIsOpen('invisible');
        setMostrarGracias('invisible')
        const overlay = document.querySelector('#overlay');
        overlay.classList.remove('overlay');
        if (aporte_black === 0) {
            setTotal(total + aporte_bamboo)
            setBackers(backers + 1)
        } else if (aporte_bamboo === 0) {
            setTotal(total + aporte_black)
            setBackers(backers + 1)
        }
    }
    const verGracias = () => {
        setMostrarGracias('')
        setBoomark(true)
        const overlay = document.querySelector('#overlay');
        overlay.classList.add('overlay');
        scroll();
        marcarNoReward();
    }

    const marcarNoReward = () => {
        const pledges = document.querySelectorAll('.pledge');
        const overlay = document.querySelector('#overlay');
        overlay.classList.add('overlay');
        setPledgeNoReward(true)
        setPledgeBlack(false);
        setPledgeBamboo(false);
        pledges[0].classList.remove('invisible')
        pledges[2].classList.add('invisible')
        pledges[1].classList.add('invisible')
    }

    const marcarBamboo = () => {
        const overlay = document.querySelector('#overlay');
        overlay.classList.add('overlay');
        const pledges = document.querySelectorAll('.pledge');
        setIsOpen('')
        scroll();
        setBamboo(25)
        setBlack(0)
        pledges[1].classList.remove('invisible')
        pledges[0].classList.add('invisible')
        pledges[2].classList.add('invisible')
        setPledgeBamboo(true);
        setPledgeNoReward(false)
        setPledgeBlack(false);
        setBoomark(true)
    }

    const marcarBlack = () => {
        const pledges = document.querySelectorAll('.pledge');
        const overlay = document.querySelector('#overlay');
        overlay.classList.add('overlay');
        setBamboo(0)
        setBlack(75)
        setIsOpen('')
        scroll();
        pledges[2].classList.remove('invisible')
        pledges[0].classList.add('invisible')
        pledges[1].classList.add('invisible')
        setPledgeBlack(true);
        setPledgeBamboo(false);
        setPledgeNoReward(false)
        setBoomark(true)
    }

    const scroll = () => {
        const scrollOptions = {
            top: 300,
            behavior: 'smooth'
        }
        window.scrollTo(scrollOptions);
    }

    //menu movil
    // method
    const toggleMenu = () => {
        // selector
        const menu = document.querySelector('.hamburger');
        menu.classList.toggle('is-active');
        document.querySelector(".menuppal").classList.toggle("is_active");

        if (document.querySelector(".menuppal").classList.contains("is_active")) {
            const overlay = document.querySelector('#overlay');
            overlay.classList.add('overlay');
        } else {
            const overlay = document.querySelector('#overlay');
            overlay.classList.remove('overlay');
        }
    }

    useEffect(() => {
        animateprogress('#barra', (total / 1000))
    }, [total]);
    //Barrar prgreso
    const animateprogress = (id, val) => {

        const getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la m�xima compatibilidad con todos los navegadores */
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (enroute) {
                    window.setTimeout(enroute, 1 / 60 * 1000);
                };

        };

        const fpAnimationFrame = getRequestAnimationFrame();
        let i = 0;
        const animacion = function () {
            if (i <= val) {
                document.querySelector(id).setAttribute("value", i);      /* <----  Incremento el valor de la barra de progreso */
                // document.querySelector(id + "+ span").innerHTML = i + "%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
                i++;
                fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la funci�n vuelve a llamarse con fpAnimationFrame     */
            }
        }
        fpAnimationFrame(animacion);   /*  <---- Llamo la funci�n animaci�n por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
    }
    return (
        <>
            <Overlay
                closeModal={closeModal}
            />
            <Gracias
                mostrarGracias={mostrarGracias}
                setMostrarGracias={setMostrarGracias}
                setIsOpen={setIsOpen}
                inputRadio={inputRadio}
            />
            <Header
                toggleMenu={toggleMenu}
            />
            <Recompensas
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                verGracias={verGracias}
                aporte_bamboo={aporte_bamboo}
                aporte_black={aporte_black}
                guardarValorBamboo={guardarValorBamboo}
                guardarValorBlack={guardarValorBlack}
                pledgeNoReward={pledgeNoReward}
                pledgeBamboo={pledgeBamboo}
                pledgeBlack={pledgeBlack}
                marcarBamboo={marcarBamboo}
                marcarBlack={marcarBlack}
                marcarNoReward={marcarNoReward}
            />
            <Inicio
                aporte_bamboo={aporte_bamboo}
                aporte_black={aporte_black}
                verGracias={verGracias}
                bookmark={bookmark}
                setBoomark={setBoomark}
                total={total}
                backers={backers}
                marcarBamboo={marcarBamboo}
                marcarBlack={marcarBlack}
                marcarNoReward={marcarNoReward}
            />
        </>
    )
}

export default App
