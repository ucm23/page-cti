import { FcWorkflow, FcApproval, FcFlowChart, FcBriefcase, FcAssistant, FcConferenceCall, FcDiploma1, FcDiploma2, FcGraduationCap, FcPositiveDynamic, FcRegisteredTrademark, FcParallelTasks, FcReading, FcRating, FcApprove } from 'react-icons/fc'
import { Fade } from 'react-awesome-reveal'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const Nosotros = () => {
    return (
        <Layout>
            <header className='about-header'>
                {/* Barra de navegación */}
                <Navbar>
                    <Fade direction="right" style={{ position: 'relative', zIndex: 10 }}>
                        <h1 className="hero_title">
                            ¿Quiénes somos?
                        </h1>
                    </Fade>
                </Navbar>

                {/* Encabezado */}

            </header>

            <section className='bg-nosotros'>
                <section className='d-flex overhid'>
                    <section className='nosotros-texto'>
                        <Fade direction="right">
                            <h1 className='nosotros-titulo'>Grupo CTI</h1>
                            <p className='nosotros-text'>Somos un equipo multidisciplinario con más de 20 años de experiencia en servicios
                                de consultoría especializada en: Sistemas de Tráfico- ITS-PEAJE-TELEPEAJE y Sistemas de Gestión para
                                Autopistas de Cuota (SISTEMAS PROPIOS-Fabricantes y desarrollo propio), Seguridad Informática, Virtualización,
                                Soporte Técnico, Infraestructura, Análisis y Diseño de Procesos, Políticas, Registro de Propiedad Intelectual
                                Desarrollo de Software a grandes corporativos de los sectores: financiero, manufactura, construcción,
                                transporte, farmacéutico, automotriz, hospitalario, educativo y gobierno. Además, contamos con nuestras propias Plataformas TI, que complementan nuestra oferta de servicios y brindan soluciones eficientes a nuestros clientes.</p>
                        </Fade>
                    </section>
                    <Fade direction="left">
                        <section className='cti_person'>
                            <Image
                                src="/Person_Image.svg"
                                alt="Negocios en CTI"
                                width={520}
                                height={520}
                            />
                        </section>
                    </Fade>
                </section>
            </section>

            <section className='my-25'>
                <section className='contenedor diferenciaa'>
                    <h1 className='titulo-diferencia'>Valores</h1>
                    <div className='texto-diferencia overhid'>
                        <Fade direction="down">
                            <div className='p-diff'>
                                <FcApprove className='icon-dif' />
                                <p>Disciplina</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcAssistant className='icon-dif' />
                                <p>Compromiso</p>
                            </div>
                        </Fade>

                        <Fade direction="right">
                            <div className='p-diff'>
                                <FcDiploma2 className='icon-dif' />
                                <p>Calidad</p>
                            </div>
                        </Fade>
                        <Fade direction="down">
                            <div className='p-diff'>
                                <FcRating className='icon-dif' />
                                <p>Lealtad</p>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className='p-diff'>
                                <FcRegisteredTrademark className='icon-dif' />
                                <p>Respeto</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcPositiveDynamic className='icon-dif' />
                                <p>Innovación</p>
                            </div>
                        </Fade>

                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcReading className='icon-dif' />
                                <p>Responsabilidad</p>
                            </div>
                        </Fade>

                        <Fade direction="right">
                            <div className='p-diff'>
                                <FcParallelTasks className='icon-dif' />
                                <p>Ética e integridad</p>
                            </div>
                        </Fade>
                        <Fade direction="down">
                            <div className='p-diff'>
                                <FcDiploma1 className='icon-dif' />
                                <p>Excelencia</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcConferenceCall className='icon-dif' />
                                <p>Honestidad</p>
                            </div>
                        </Fade>
                        <Fade direction="left">
                            <div className='p-diff'>
                                <FcGraduationCap className='icon-dif' />
                                <p>Profesionalismo</p>
                            </div>
                        </Fade>
                    </div>
                </section>
            </section>

            <section className='mis-vis'>
                <section className='bloques-mis'>
                    <Fade direction="down">
                        <div className='vis'>
                            <h1>Visión</h1>
                            {/*<p>Ser el aliado estratégico en Tecnología, que nos permita posicionarnos como el principal referente en soluciones IT y ciberseguridad en México, 
                                Estados Unidos, Centro y Sur de América.</p>*/}
                            <p>
                                Ser el aliado estratégico en Tecnología,
                                que nos permita posicionarnos como el principal referente en soluciones de sistemas inteligentes de transporte,
                                tecnologías de la información y ciberseguridad en México,
                                Estados Unidos, Centro y Sur de América.
                            </p>
                        </div>
                    </Fade>
                    <Fade direction="up">
                        <div className='mis'>
                            <h1>Misión</h1>
                            {/*<p>Creamos relaciones de confianza y profesionalismo que nos permite pensar como un solo equipo entre nuestros colaboradores, 
                                clientes, socios, mayoristas y fabricantes para contribuir en la innovación y desarrollo tecnológico.</p>*/}
                            <p>
                                Impulsar y reforzar innovación y desarrollo tecnológico,
                                dentro del sector privado y de servicios,
                                con la finalidad de fortalecer los procesos mediante nuestro personal y herramientas tecnológicas,
                                contribuyendo al crecimiento económico de nuestros clientes, colaboradores y socios.
                            </p>
                        </div>
                    </Fade>
                </section>
            </section>



            <section className='my-25'>
                <section className='contenedor diferencia'>
                    <h1 className='titulo-diferencia'>¿Cómo hacemos la diferencia?</h1>
                    <div className='texto-diferencia overhid'>
                        <Fade direction="left">
                            <div className='p-dif'>
                                <FcBriefcase className='icon-dif' />
                                <p>Tenemos pasión por lo que hacemos.</p>
                            </div>
                        </Fade>
                        <Fade direction="down">
                            <div className='p-dif'>
                                <FcWorkflow className='icon-dif' />
                                <p>Creamos buenas relaciones para tener buenos negocios.</p>
                            </div>
                        </Fade>
                        <Fade direction="up">
                            <div className='p-dif'>
                                <FcFlowChart className='icon-dif' />
                                <p>Impulsamos el desarrollo personal y profesional.</p>
                            </div>
                        </Fade>
                        <Fade direction="right">
                            <div className='p-dif'>
                                <FcApproval className='icon-dif' />
                                <p>Nos enfocamos en resultados que nuestros clientes esperan.</p>
                            </div>
                        </Fade>
                    </div>
                </section>
            </section>

        </Layout>
    )
}

export default Nosotros