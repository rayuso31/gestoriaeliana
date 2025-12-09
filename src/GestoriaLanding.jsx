import React, { useState } from 'react';
import {
    Building2,
    Scale,
    Calculator,
    BookOpen,
    Phone,
    Mail,
    MapPin,
    Menu,
    X,
    ArrowRight,
    CheckCircle2,
    Star,
    Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './Animations';
import { FloatingBubbles } from './FloatingBubbles';
import ChatWidget from './ChatWidget';

const GestoriaLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: <Calculator size={32} />,
            title: "Fiscal y Tributario",
            desc: "Optimización fiscal y cumplimiento riguroso. Planificación de impuestos y representación ante la Agencia Tributaria."
        },
        {
            icon: <Building2 size={32} />,
            title: "Laboral y RRHH",
            desc: "Gestión de nóminas, contratos y seguros sociales. Asesoramiento en contratación y despidos."
        },
        {
            icon: <BookOpen size={32} />,
            title: "Contabilidad",
            desc: "Contabilidad analítica y financiera. Balances, cuentas anuales y libros oficiales al día."
        },
        {
            icon: <Scale size={32} />,
            title: "Consultoría Jurídica",
            desc: "Servicios jurídicos mercantiles. Constitución de sociedades, pactos de socios y operaciones societarias."
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <span className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
                                Gestoría <span className="text-gold-500">L'Eliana</span>
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 hover:text-gold-500 transition-colors duration-300 font-medium text-sm tracking-wide relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm tracking-wide"
                            >
                                Área Clientes
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 hover:text-gold-500 transition-colors p-2"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-1">
                                {['INICIO', 'SERVICIOS', 'NOSOTROS', 'CONTACTO'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-3 text-slate-600 hover:text-gold-500 font-medium border-b border-gray-50">
                                        {item}
                                    </a>
                                ))}
                                <div className="pt-4 px-3">
                                    <button className="w-full bg-gold-500 text-white px-6 py-3 rounded-sm font-medium">
                                        Área Clientes
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 opacity-90"></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-[url('/clean-bg.png')] bg-cover bg-center opacity-80"
                    />
                    <FloatingBubbles />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left">
                    <div className="lg:w-2/3">
                        <FadeIn delay={0.2}>
                            <div className="inline-block mb-4 px-3 py-1 bg-gold-50 text-gold-600 text-xs font-bold tracking-widest uppercase border border-gold-500/20 rounded-sm">
                                Desde 1990
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900">
                                Excelencia en Gestión, <br />
                                <span className="text-slate-900 drop-shadow-sm font-serif italic relative">
                                    Tranquilidad
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span> para tu Empresa.
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.6}>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-light">
                                Asesoramiento integral fiscal, laboral y contable diseñado para empresarios exigentes. Combinamos la tradición del buen hacer con la tecnología más avanzada.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-sm shadow-xl hover:shadow-2xl font-medium tracking-wide text-lg flex items-center justify-center gap-2 group"
                            >
                                Solicitar Cita
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-slate-800 border border-slate-200 hover:border-gold-500 px-8 py-4 rounded-sm transition-all duration-300 font-medium tracking-wide text-lg"
                            >
                                Conocer Servicios
                            </motion.button>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500"
                >
                    <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="servicios" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Áreas de Práctica</h2>
                            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
                            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                                Soluciones integrales adaptadas a las necesidades específicas de su negocio.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <FadeIn key={index} delay={index * 0.1} className="h-full">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-8 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-gold-500 group h-full relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-gold-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                    <div className="mb-6 p-4 bg-gold-50 rounded-full inline-block group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 text-gold-600 relative z-10">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Refactored 'Why Us' Section - Dynamic & Fluid */}
            <section id="nosotros" className="py-24 relative overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 w-full h-full">
                    <div className="absolute inset-0 bg-slate-900/95 z-10"></div>
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 1, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-[url('/gold-bg.png')] bg-cover bg-center opacity-40"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <FadeIn>
                                <div className="inline-block mb-4 px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-bold tracking-widest uppercase border border-gold-500/20 rounded-sm backdrop-blur-sm">
                                    Nuestros Valores
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                    Más que una gestoría, <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                                        su socio estratégico.
                                    </span>
                                </h2>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
                                    En un entorno normativo cambiante, la excelencia no es una opción, es una necesidad. Nos distinguimos por un enfoque proactivo que anticipa problemas antes de que surjan.
                                </p>
                            </FadeIn>

                            <div className="space-y-8">
                                {[
                                    { icon: <Scale />, title: "Trato Personalizado Senior", desc: "Cada cliente tiene asignado un asesor senior. Sin rotaciones." },
                                    { icon: <Calculator />, title: "Tecnología y Tradición", desc: "Portal del cliente 24/7 combinado con la cercanía humana." },
                                    { icon: <Shield />, title: "Garantía de Calidad", desc: "Procesos certificados y un equipo en constante formación." }
                                ].map((item, i) => (
                                    <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                                        <div className="flex gap-4 group cursor-pointer">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.1)] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]">
                                                    {item.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-gold-400 transition-colors">{item.title}</h4>
                                                <p className="text-slate-400 text-sm max-w-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Visual Element replacing static image */}
                        <div className="lg:w-1/2 w-full">
                            <FadeIn delay={0.4}>
                                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-900/50 backdrop-blur-sm">
                                    {/* Centerpiece */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-64 h-64 rounded-full border border-gold-500/20 flex items-center justify-center relative">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 rounded-full border-t border-r border-gold-500/40"
                                            ></motion.div>
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-2 rounded-full border-b border-l border-white/10"
                                            ></motion.div>

                                            <div className="text-center z-10">
                                                <div className="text-5xl font-serif text-white font-bold mb-1">200+</div>
                                                <div className="text-xs text-gold-500 uppercase tracking-widest">Clientes Satisfechos</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Cards Animation */}
                                    {[
                                        { top: "20%", left: "10%", text: "Ahorro Fiscal", val: "+15%" },
                                        { bottom: "20%", right: "10%", text: "Rapidez", val: "24h" },
                                        { top: "50%", right: "-5%", text: "Auditorías", val: "100%" }
                                    ].map((card, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, delay: i * 1.5, ease: "easeInOut" }}
                                            className="absolute bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/10 w-40"
                                            style={{ top: card.top, left: card.left, bottom: card.bottom, right: card.right }}
                                        >
                                            <div className="text-xs text-slate-400 uppercase mb-1">{card.text}</div>
                                            <div className="text-2xl font-bold text-white">{card.val}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section (Google Reviews) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
                            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                author: "Marcos Lopez",
                                text: "Soy autónomo... Desde que estoy con ellos no se me pasa un impuesto, ni una presentación de nada. Ahora tengo tiempo para mis cosas y estoy mucho mas tranquilo.",
                                initials: "ML"
                            },
                            {
                                author: "Jose Soriano",
                                text: "Llevo desde el año 1982 haciendo la renta con ellos. Me jubile y me volví a mi tierra Teruel, pero sigo con ellos. Trato familiar y cercano.",
                                initials: "JS"
                            },
                            {
                                author: "Santi",
                                text: "Llevo 20 años con ellos y mi padre otros tantos. Me gestionan las nominas y la contabilidad de mi empresa y nunca he tenido ningún problema.",
                                initials: "S"
                            },
                            {
                                author: "Geraldine Garcia",
                                text: "Excelente servicio y muy rápido, me ayudaron a añadir el alquiler en la declaración de la renta.",
                                initials: "GG"
                            }
                        ].map((review, index) => (
                            <FadeIn key={index} delay={index * 0.1} className="h-full">
                                <motion.div
                                    whileHover={{ y: -5, borderColor: '#C5A059' }}
                                    className="bg-gray-50 p-8 rounded-lg transition-all duration-300 flex flex-col h-full border border-gray-100 hover:shadow-lg relative"
                                >
                                    <div className="absolute top-4 right-4 text-gold-200">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.054 15.331 15.189 16.491 14.257C17.651 13.325 18.017 12.393 18.017 11.462C18.017 10.53 17.651 9.599 16.491 8.667C15.331 7.735 14.017 6.87 14.017 4.924C14.017 2.978 15.331 2.113 16.491 1.182C17.651 0.25 18.017 1.182 18.017 2.113L18.017 5C18.017 6.946 16.703 7.811 15.543 8.743C14.383 9.675 14.017 10.607 14.017 11.538C14.017 12.47 14.383 13.401 15.543 14.333C16.703 15.265 18.017 16.13 18.017 18.076C18.017 20.022 16.703 20.887 15.543 21.818C14.383 22.75 14.017 21 14.017 21ZM5 21L5 18C5 16.054 6.314 15.189 7.474 14.257C8.634 13.325 9 12.393 9 11.462C9 10.53 8.634 9.599 7.474 8.667C6.314 7.735 5 6.87 5 4.924C5 2.978 6.314 2.113 7.474 1.182C8.634 0.25 9 1.182 9 2.113L9 5C9 6.946 7.686 7.811 6.526 8.743C5.366 9.675 5 10.607 5 11.538C5 12.47 5.366 13.401 6.526 14.333C7.686 15.265 9 16.13 9 18.076C9 20.022 7.686 20.887 6.526 21.818C5.366 22.75 5 21 5 21Z" />
                                        </svg>
                                    </div>
                                    <div className="flex text-gold-500 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 text-sm mb-6 flex-grow italic leading-relaxed">"{review.text}"</p>
                                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
                                        <div className="w-10 h-10 rounded-full bg-slate-900 text-gold-500 flex items-center justify-center font-bold text-xs ring-2 ring-gold-100">
                                            {review.initials}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">{review.author}</div>
                                            <div className="text-xs text-slate-500 font-medium">Cliente Verificado</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/gold-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-serif">¿Busca un cambio de asesoría?</h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto font-light">
                            Analizamos su situación fiscal y laboral actual sin compromiso. Descubra cómo podemos mejorar la gestión de su patrimonio.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gold-500 hover:bg-gold-400 text-white px-10 py-4 rounded-sm transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.4)] font-bold tracking-widest uppercase text-sm"
                        >
                            Agendar Reunión Privada
                        </motion.button>
                    </FadeIn>
                </div>
            </section>

            {/* Footer */}
            <footer id="contacto" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div>
                            <div className="font-serif text-2xl font-bold text-white mb-6">
                                Gestoría <span className="text-gold-500">L'Eliana</span>
                            </div>
                            <p className="mb-6 text-sm leading-relaxed">
                                Asesoría integral de empresas y particulares desde 1990.
                            </p>
                        </div>
                        {/* Shorter footer for brevity in this example, assuming full content is maintained similarly */}
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3">
                                    <Phone className="text-gold-500 flex-shrink-0" size={18} />
                                    <span>+34 91 555 00 00</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="text-gold-500 flex-shrink-0" size={18} />
                                    <span>info@gestoriaimperium.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                        <p>&copy; 2024 Gestoría L'Eliana S.L.</p>
                    </div>
                </div>
            </footer>

            <ChatWidget />
        </div>
    );
};

export default GestoriaLanding;
