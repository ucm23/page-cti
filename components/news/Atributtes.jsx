import { ColorButton } from '../../lib/theme';
import pages from '../../public/data/pages.json'
//import '../../assets/styles/atributtes.styles.css'

import { RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine, } from "react-icons/ri";
const icons_ = [RiBuilding2Line, RiFolderUserLine, RiFolderChartLine, RiNurseLine, RiShakeHandsLine, RiThumbUpLine, RiBuildingLine, RiPencilRuler2Line, RiPageSeparator, RiP2PLine,]

const headers = {
    '0': {
        color: '#00adff',
        url: "/docs/Gestión de REPSE VICTUM RE®.pdf",
        capture: "buzon",
        paragraph_01: 'Gestión de REPSE VICTUM RE® ofrece un',
        paragraph_02: 'Portal de gestión de flujos de trabajo para clientes y proveedores',
        paragraph_03: 'Puede digitalizar, proteger y trabajar con documentos empresariales,a la vez que',
        paragraph_04: 'optimiza los procesos para impulsar su empresa.',
        paragraph_05: 'Al reducir el tiempo dedicado a sus procesos actuales,',
        paragraph_06: 'su personal puede centrarse en el trabajo que realmente impulsa la productividad y los beneficios.',
        paragraph_07: 'Gestione lo que importa con REPSE VICTUM RE®.',
        paragraph_08: 'Actualmente REPSE VICTUM RE® cuenta con una historia de éxito que contar. Aquí le mostramos algunos casos.',
        paragraph_09: 'Soluciones de gestión de documentos y automatización del flujo de trabajo para empresas que necesitan que su información esté segura, conforme, utilizable y accesible, desde cualquier dispositivo, en cualquier momento y en cualquier lugar.',
        paragraph_10: 'Gestión de documentos',
        paragraph_11: 'Procesamiento automáticamente todas los documentos entrantes con nuestra solución en la nube.',
        conceptos: [
            {
                title: "Requisiciones",
                paragraph: "Solicitudes de productos o servicios dentro de una organización."
            },
            {
                title: "Orden de Compra",
                paragraph: "Documento que especifica los bienes o servicios solicitados y su precio."
            },
            {
                title: "REPSE",
                paragraph: "Registro Público de Empresas Socialmente Responsables."
            },
            {
                title: "Centros de distribución",
                paragraph: "Instalaciones para almacenamiento y distribución de productos."
            },
            {
                title: "Entregas",
                paragraph: "Acto de suministrar bienes o servicios a un destinatario."
            },
            {
                title: "Buzón CFDi",
                paragraph: "Sistema electrónico para recibir facturas electrónicas."
            },
            {
                title: "Comunicados",
                paragraph: "Mensajes o avisos emitidos para informar o notificar."
            },
            {
                title: "Configuración",
                paragraph: "Ajustes y preferencias personalizables de un sistema o aplicación."
            },
        ],
        images: [
            'danhos.png',
            'dragon.jpeg',
            'ticonsa.jpeg'
        ]
    },
    '2': {
        color: "#75b977",
        url: "/docs/Servicio de Soporte en Sitio y Mesa de Ayuda por Grupo CTI.pdf",
        capture: "fast",
        paragraph_01: "El servicio de Soporte y Mesa de Ayuda de Grupo CTI ofrece una solución integral",
        paragraph_02: "para la gestión y resolución de incidentes tecnológicos tanto en sitio como de forma remota.",
        paragraph_03: "Proporciona soporte técnico especializado que asegura el correcto funcionamiento de sus sistemas,",
        paragraph_04: "optimizando los tiempos de respuesta y garantizando la continuidad operativa de su empresa.",
        paragraph_05: "Al automatizar y agilizar la atención a los usuarios,",
        paragraph_06: "su equipo puede concentrarse en actividades estratégicas que impulsen la productividad.",
        paragraph_07: "Gestione sus servicios tecnológicos con el soporte confiable de Grupo CTI.",
        paragraph_08: "Actualmente, contamos con historias de éxito en la implementación de soluciones personalizadas de Soporte y Mesa de Ayuda.",
        paragraph_09: "Soluciones que mejoran la gestión de TI y proporcionan un servicio técnico accesible, eficiente y proactivo para garantizar la satisfacción de los usuarios.",
        paragraph_10: "Atención técnica y gestión de servicios",
        paragraph_11: "Procesamos y solucionamos incidentes de manera eficiente con herramientas tecnológicas avanzadas.",
        conceptos: [
            {
                title: "Soporte en Sitio",
                paragraph: "Asistencia técnica directa para resolver problemas tecnológicos en las instalaciones de la empresa."
            },
            {
                title: "Mesa de Ayuda",
                paragraph: "Gestión centralizada de solicitudes e incidentes tecnológicos, proporcionando soporte remoto eficiente."
            },
            {
                title: "Gestión de Tickets",
                paragraph: "Seguimiento detallado de incidentes y solicitudes hasta su resolución."
            },
            {
                title: "Mantenimiento Preventivo",
                paragraph: "Revisiones programadas para prevenir problemas futuros en equipos y sistemas."
            },
            {
                title: "Migraciones Tecnológicas",
                paragraph: "Actualización y transición de sistemas para mejorar el rendimiento y la seguridad."
            },
            {
                title: "Soporte Remoto",
                paragraph: "Soluciones rápidas y accesibles desde cualquier ubicación."
            },
            {
                title: "Capacitación",
                paragraph: "Entrenamiento para usuarios y equipos sobre nuevas herramientas y procesos tecnológicos."
            },
            {
                title: "Optimización de Procesos",
                paragraph: "Estrategias para maximizar la eficiencia operativa en TI."
            }
        ],
        images: [
            'dragon.jpeg',
        ]
    }

}


const Atributtes = ({ index }) => {

    const getHeaders = () => headers[index];

    return (
        <div className='atributtes'>
            <div className="header">
                <div className='header-container flex flex-row md:flex-col'>
                    <div className='header-container-1'>
                        <h1 className='header-title'>
                            {pages[index]?.name_}
                        </h1>
                        <p className='header-paragraph'>
                            {getHeaders()?.paragraph_01} <strong> {getHeaders()?.paragraph_02}</strong>. {getHeaders()?.paragraph_03}
                            <strong> {getHeaders()?.paragraph_04} </strong><br /><br />
                            {getHeaders()?.paragraph_05}
                            <span style={{ background: getHeaders().color, marginLeft: 3, color: 'white' }}>{getHeaders()?.paragraph_06}</span>
                            <br /><br />
                            {getHeaders()?.paragraph_07}
                        </p>
                        <a href={getHeaders()?.url} download className="decoration-none">
                            <ColorButton
                                disableElevation
                                //onClick={() => {}} 
                                onClick={() => { }}
                                size='large'
                                variant="contained"
                                className='mx-auto mb-4 btn-standar'
                                //endIcon={<MdExpandMore className='ml-2' />}
                                style={{ backgroundColor: getHeaders().color, fontWeight: 'bold' }}
                            >
                                ⬇  Descargar Catálogo
                            </ColorButton>
                        </a>

                    </div>
                    <div className='header-container-2'>
                        <h1 className='header-title'>
                            Nuestros clientes
                        </h1>
                        <p className='header-paragraph'>
                            {getHeaders()?.paragraph_08}
                        </p>
                        <div className="container-images">
                            {getHeaders()?.images.map((item, index) => {
                                return (
                                    <div key={`img-${item}-${index}`} className="item-atributte">
                                        <img
                                            src={`empresas/${item}`}
                                            alt={`empresas/${item}`}
                                        //style={{ width: 123, height: 'auto' }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="header">
                <h1 className='title'>
                    La forma inteligente de trabajar
                </h1>
                <h1 className='paragraph'>
                    {getHeaders()?.paragraph_09}
                </h1>

                <div className='header-container'>
                    <div className='header-container-1'>
                        <h1 className='header-title'>
                            {getHeaders()?.paragraph_10}
                        </h1>
                        <p className='header-paragraph'>
                            {getHeaders()?.paragraph_11}
                        </p>
                        <img
                            src={`captures/${getHeaders()?.capture}.png`}
                            alt={`captures`}
                            style={{ width: '100%', height: 'auto', marginTop: 12 }}
                        />
                    </div>
                    <div className='header-container-2'>
                        <h1 className='header-title'>
                            Transformación y soluciones digital
                        </h1>
                        <p className='header-paragraph'>
                            Soluciones de gestión de procesos y automatización del flujo de trabajo, con una transición hacia ls digitalización y automatización:
                        </p>
                        <div className="container-pros">
                            {getHeaders()?.conceptos.map((item, index) => {
                                return (
                                    <div key={`conceptos-${index}`} className="item-atributte">
                                        <h1 className='atributte-pros-title' style={{ color: getHeaders()?.color }}>{item?.title}</h1>
                                        <p className='atributte-pros-paragraph'>{item?.paragraph}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="header mb-2">
                <h1 className='title'>
                    Da el salto que necesitas
                </h1>
                <h1 className='paragraph'>
                    {pages[index]?.atributtes?.paragraph}
                </h1>
            </div>
            <div className="container-atributtes">
                {pages[index]?.atributtes?.pros.map((item, index) => {
                    const Icon_ = icons_[index];
                    return (
                        <div key={`atributtes-${index}`} className="item-atributte">
                            <dt className="text-base font-semibold leading-7 text-gray-900_">
                                <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: getHeaders()?.color }}>
                                    {Icon_ && <Icon_ className="h-6 w-6 text-white" aria-hidden="true" />}
                                </div>
                            </dt>
                            <h1 className='atributte-pros-title-center' style={{ color: getHeaders()?.color }}>{item?.title}</h1>
                            <p className='atributte-pros-paragraph'>{item?.paragraph}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Atributtes;
