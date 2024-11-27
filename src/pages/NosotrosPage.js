import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="nosotros">
                <h2>Quiénes Somos</h2>
                <img src="images/nosotros/nosotros.webp" alt="Quiénes Somos" className="nosotros-img" />
                <p>En Hogar Inteligente, nos dedicamos a transformar tu hogar en un espacio moderno, seguro y eficiente. Nuestra misión es ofrecer soluciones tecnológicas innovadoras que mejoren la calidad de vida de nuestros clientes, proporcionando productos y servicios que se adapten a sus necesidades y estilo de vida.</p>
                <p>Con un equipo de expertos en tecnología y automatización, nos esforzamos por brindar una experiencia personalizada y de alta calidad. Desde la instalación de sistemas de iluminación inteligente hasta dispositivos de seguridad avanzada y electrodomésticos conectados, estamos aquí para ayudarte a crear un hogar más funcional y a la vanguardia.</p>
                <p>En Hogar Inteligente, creemos en la importancia de la sostenibilidad y la eficiencia energética. Por eso, todos nuestros productos están diseñados para optimizar el consumo de energía y reducir el impacto ambiental. Nos comprometemos a ofrecer soluciones que no solo mejoren tu vida diaria, sino que también contribuyan a un futuro más sostenible.</p>
                <p>Únete a nosotros en este viaje hacia un hogar más inteligente y descubre cómo la tecnología puede transformar tu vida. ¡Bienvenido a Hogar Inteligente!</p>
            </div>
            <div className="equipo">
                <h2>Nuestro Equipo</h2>
                <div className="miembro">
                    <img src="images/equipo/miembro1.jpg" alt="Roberto Lima" className="equipo-img" />
                    <h3>Roberto Lima</h3>
                    <p>CEO y Fundador</p>
                    <p>Roberto es el visionario detrás de Hogar Inteligente. Con más de 20 años de experiencia en tecnología y automatización, lidera nuestro equipo con pasión y dedicación.</p>
                </div>
                <div className="miembro">
                    <img src="images/equipo/miembro2.jpg" alt="Carla Diaz" className="equipo-img" />
                    <h3>Carla Diaz</h3>
                    <p>Directora de Tecnología</p>
                    <p>Carla es nuestra experta en tecnología y se asegura de que todos nuestros productos y servicios estén a la vanguardia de la innovación.</p>
                </div>
                <div className="miembro">
                    <img src="images/equipo/miembro3.jpg" alt="Ariel Juarez" className="equipo-img" />
                    <h3>Ariel Juarez</h3>
                    <p>Gerente de Ventas</p>
                    <p>Ariel lidera nuestro equipo de ventas y se encarga de ofrecer la mejor experiencia a nuestros clientes, ayudándolos a encontrar las soluciones perfectas para sus hogares.</p>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
