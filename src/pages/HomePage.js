import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.png" alt="casa" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Bienvenido a Hogar Inteligente, tu destino para transformar tu casa en un espacio moderno y conectado. Aquí encontrarás una selección de productos tecnológicos diseñados para llevar la comodidad, seguridad y eficiencia de tu hogar al siguiente nivel. Desde sistemas de iluminación inteligente hasta dispositivos de seguridad avanzada y electrodomésticos conectados, te ofrecemos lo último en tecnología para que disfrutes de un hogar más funcional y a la vanguardia.</p>
                    <p>En Hogar Inteligente, no solo te ofrecemos productos, sino soluciones integrales para que disfrutes de una experiencia personalizada. Sabemos que cada hogar es único, por eso nos esforzamos en brindarte una amplia gama de opciones que se adaptan a tu estilo de vida. Desde controlar tus dispositivos con la voz o desde tu smartphone, hasta programar rutinas que optimicen el consumo de energía, nuestro objetivo es hacer que la tecnología trabaje a tu favor, simplificando tareas cotidianas y mejorando tu calidad de vida. Además, contamos con un equipo especializado que está listo para asesorarte y guiarte en cada paso del proceso de automatización de tu hogar. ¡Haz que tu casa sea más eficiente, segura y cómoda con Hogar Inteligente!</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <img src="images/testimonios/carlosmendoza.jpg" alt="Carlos Mendoza" className="testimonio-img" />
                        <span className="cita">Desde que descubrí Hogar Inteligente, mi vida ha cambiado por completo. Instalé luces inteligentes y un sistema de seguridad en mi casa, y ahora puedo controlarlo todo desde mi teléfono. Me siento más seguro y además he notado que ahorro en energía gracias a las funciones de automatización. El servicio fue excelente, y me guiaron en todo momento. ¡Lo recomiendo al 100%!</span>
                        <span className="autor">Carlos Mendoza</span>
                    </div>
                    <div className="testimonio">
                        <img src="images/testimonios/mariaguerrero.jpg" alt="María Guerrero" className="testimonio-img" />
                        <span className="cita">Hogar Inteligente superó mis expectativas. Compré varios dispositivos para hacer mi casa más moderna, como termostatos y electrodomésticos conectados, y la diferencia es impresionante. La instalación fue rápida y el equipo me explicó todo de manera sencilla. Ahora mi hogar es más eficiente y cómodo. Estoy encantada con el resultado.</span>
                        <span className="autor">María Guerrero</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
