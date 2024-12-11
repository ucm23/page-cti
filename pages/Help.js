import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Asks from "../components/news/Asks"
import Atributtes from "../components/news/Atributtes"
import Section from "../components/news/Section"
import Motivation from "../components/news/Motivation"
import ScheduleCalls from '../components/news/ScheduleCalls'

const Help = () => {
    const index = "2";
    const [modalShow, setModalShow] = useState(false);
    const handleCall = () => setModalShow(!modalShow)
    return (
        <Layout>
            <header className='about-header'>
                <Navbar>
                    <Fade direction="right">
                        <h1 className="hero_title">
                            Soporte y Mesa de Ayuda
                        </h1>
                    </Fade>
                </Navbar>
            </header>
            <Atributtes
                index={index}
            />
            <Section
                index={index}
                showRegister={handleCall}
            />
            <Motivation
                index={index}
            />
            <Asks
                index={index}
            />
            <ScheduleCalls
                index={index}
                show={modalShow}
                onHide={() => setModalShow(false)}
                demo={'Soporte y Mesa de Ayuda'}
            />
        </Layout>
    )
}

export default Help