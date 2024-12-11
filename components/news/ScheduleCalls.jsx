"use strict"
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { Formik, Field, Form, } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser'
import { ColorButton } from '../../lib/theme';
import { IoMdClose } from "react-icons/io";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: 1000,
    height: 500,
    bgcolor: 'background.paper',
    border: '0.5px solid gray',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

const colors = {
    '0': '#00adff',
    '1': '#00adff',
    '2': "#75b977",
}


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Escriba su nombre completo'),
    phone: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Campo requerido'),
});

let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}

//let URL = "http://localhost:3001/send-email";
let URL = "https://backend-landing-pages.vercel.app/send-email";

export default function ScheduleCalls(props) {

    const form = useRef();
    const [formularioenviado, setformularioenviado] = useState(false);
    const sendEmail = async (values) => {
        console.log("🚀 ~ sendEmail ~ values:", values)
        try {
            let bodyR = JSON.stringify(values)
            let response = await fetch(URL, {
                method: "POST",
                headers: headersList,
                body: bodyR
            });
            let data = await response.text();
            console.log(data);

        } catch (error) {
            console.log("🚀 ~ sendEmail ~ error:", error)
        }
    }

    const sendEmail_ = () => {
        //emailjs.sendForm('service_f8cxw7w', 'template_84xbcfa', form.current, '3TkCFtArpfX95oASO')
        emailjs.sendForm('service_nvpo3w9', 'template_bvcgcaj', form.current, 'S5iZw_badfkGzLZhA')
            .then(response => () => {
                console.log(response)
            })
            .catch(er => () => {
                console.log(er)
            })
    }

    return (
        <Modal
            open={props?.show}
            onClose={props?.onHide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='class-container'>
                <div className="absolute top-1 right-1" onClick={props?.onHide}>
                    <IoMdClose />
                </div>
                <div className='calls'>
                    <div className='calls-statics'>
                        <img
                            src='logo.png'
                            style={{ width: 50 }}
                            className='icon-forms'
                            alt={'icon-forms-logo.png'}
                        />
                        <p className='strong-0'>
                            Agendar una llamada y obtén una sesión con un especialista
                        </p>
                        <p className='font-gray text-justify'>⏱️ 30 minutos <br />🎥 Recibirás un documento vía email, además nuestro asesor analizará tus objetivos y te ayudará a entender los requerimientos necesarios.</p>
                        <p className='font-gray text-justify'>
                            Esta es tu oportunidad de tener una llamada o zoom-call,
                            sin compromiso, antes de contratar el servicio.
                            Contamos con los mejores especialistas que te ayudarán a aclarar tus dudas y entender mejor tus necesidades.
                        </p>
                        <p className='font-gray text-justify'>Gracias de antemano.</p>
                    </div>

                    <div className='forms'>
                        <Formik
                            validationSchema={SignupSchema}
                            validateOnMount={true}
                            initialValues={{
                                name: '',
                                phone: '',
                                email: '',
                                demo: `${props?.demo}`
                            }}
                            //onSubmit={(values) => sendEmail(values)}
                            onSubmit={(values, { resetForm }) => {
                                sendEmail_();
                                resetForm()
                                setformularioenviado(true);
                                setTimeout(() => {
                                    setformularioenviado(false)
                                }, 4000)
                            }}
                        >
                            {({ values, errors, touched, handleSubmit, handleChange }) => (
                                <form ref={form} onSubmit={handleSubmit} className="form-flex-row">
                                    <p className='strong'>Información personal</p>
                                    <p className='small'>Déje sus datos y en breve nos contactaremos contigo</p>
                                    <input
                                        type='hidden'
                                        id='demo'
                                        name='demo'
                                        placeholder='demo'
                                        autoComplete='off'
                                        value={values.demo} />

                                    <div className="row-column">
                                        <Field
                                            id="name"
                                            name="name"
                                            placeholder="Nombre(s)*"
                                            type="text"
                                            className="input-email"
                                        />
                                    </div>

                                    <Field
                                        id="phone"
                                        name="phone"
                                        placeholder="Telefono*"
                                        type="text"
                                        className="input-email"
                                    />
                                    {errors.phone && touched.phone &&
                                        <p className='error-form'> ⚠️ {errors.phone}</p>}

                                    <Field
                                        id="email"
                                        name="email"
                                        placeholder="Correo electrónico*"
                                        type="email"
                                        className="input-email"
                                    />
                                    {errors.email && touched.email &&
                                        <p className='error-form'> ⚠️ {errors.email}</p>}

                                    <div className="flex-end">
                                        <ColorButton
                                            disableElevation
                                            //onClick={() => {}} 
                                            //onClick={() => showRegister()}
                                            size='large'
                                            variant="contained"
                                            className='mx-auto mb-4 btn-standar'
                                            type='submit'
                                        //endIcon={<MdExpandMore className='ml-2' />}
                                        style={{ backgroundColor: colors[props.index] }}
                                        >
                                            Siguiente
                                        </ColorButton>
                                    </div>
                                    {formularioenviado && <p className='exito'>Formulario enviado con éxito</p>}
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

ScheduleCalls.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
}