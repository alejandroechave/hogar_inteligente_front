import '../styles/components/pages/ContactoPage.css';
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
            setMsg(response.data.message);
            if (response.data.error === false) {
                setFormData(initialForm);
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setMsg('Error al enviar el formulario');
        } finally {
            setSending(false);
        }
    }

    return (
        <main className="holder contacto">
            <div className="columna">
                <div className="intro-text">
                    <p>Nos encanta saber de ti y estamos aquí para ayudarte en todo lo que necesites. Si tienes alguna pregunta, comentario o simplemente quieres más información sobre nuestros productos y servicios, no dudes en ponerte en contacto con nosotros. Nuestro equipo de expertos está listo para asistirte y asegurarse de que tengas la mejor experiencia posible con Hogar Inteligente. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible. ¡Gracias por confiar en nosotros!</p>
                </div>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    {sending ? <p>Enviando..</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className='centrar'><button type='submit' className='btn btn-primary'><i className="bi bi-send"></i> Enviar</button></p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede comunicarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li><i class="bi bi-telephone-fill"></i> +54 3445405204 </li>
                    <li><i class="bi bi-envelope"></i><a href="mailto:alejandroechave@gmail.com"> alejandroechave@gmail.com </a></li>
                    <li><a href="https://www.facebook.com/raulalejandroechave"><i class="bi bi-facebook"></i> Facebook</a></li>
                    <li><a href="https://x.com/aleechave_seo"><i class="bi bi-twitter"></i> X </a></li>
                    <li><a href="https://wa.link/axpfrz"><i class="bi bi-whatsapp"></i> WhatsApp </a></li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
