import React, { useState } from 'react';
import { Star } from 'lucide-react';

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="text-gray-600 whitespace-pre-line">
            {children}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => (
  <header className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-100">
        Uroxel
      </h1>
      <p className="text-2xl text-center mt-4 font-light">
        Innovación Natural para Tu Bienestar
      </p>
    </div>
  </header>
);

// Hero Component
const Hero = () => (
  <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
    <div className="container mx-auto px-4 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-30"></div>
          <img 
            src="/product.png" 
            alt="Uroxel - Innovación Natural" 
            className="relative mx-auto max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">
          ¡Descubre el Futuro del Bienestar!
        </h2>
        <p className="text-xl mb-8 text-gray-700">
          Formulación avanzada con tecnología natural para optimizar tu rendimiento diario
        </p>
        <div className="text-3xl font-bold text-orange-600 mb-8">$590 MXN</div>
        <button 
          onClick={() => document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          ¡Obtén el Tuyo Ahora!
        </button>
      </div>
    </div>
  </section>
);

// Benefits Component
const Benefits = () => {
  const benefitsData = [
    {
      icon: "🌿",
      title: "Tecnología Natural",
      description: "Fórmula avanzada con ingredientes bioactivos de última generación, desarrollada por expertos en bienestar natural"
    },
    {
      icon: "⚡",
      title: "Máximo Rendimiento",
      description: "Potencia tu energía y vitalidad con nuestra fórmula exclusiva, respaldada por estudios científicos"
    },
    {
      icon: "🎯",
      title: "Resultados Garantizados",
      description: "Eficacia comprobada para tu bienestar diario, con satisfacción garantizada o devolución de tu dinero"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">
          Ventajas Exclusivas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-to-b from-white to-orange-50 shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Ingredients Component
const Ingredients = () => {
  const ingredientsData = [
    {
      title: "Cúrcuma Elite",
      description: "Potente antioxidante de máxima pureza, extraído mediante procesos avanzados para mantener sus propiedades intactas"
    },
    {
      title: "Jengibre Premium",
      description: "Extracto concentrado de alta biodisponibilidad, cultivado en condiciones óptimas para maximizar sus beneficios"
    },
    {
      title: "Zinc Avanzado",
      description: "Mineral quelado de última generación, con una absorción superior para mejores resultados"
    },
    {
      title: "Arginina Plus",
      description: "Aminoácido optimizado de acción prolongada, formulado para una liberación gradual y efectiva"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">
          Componentes Premium
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredientsData.map((ingredient, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-600">{ingredient.title}</h3>
              <p className="text-gray-600">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Component
const Reviews = () => {
  const reviews = [
    {
      name: "Dr. Miguel A.",
      rating: 5.0,
      text: "Una innovación excepcional en suplementos naturales. Los resultados son notables desde las primeras semanas. Mis pacientes reportan una mejoría significativa en su bienestar general."
    },
    {
      name: "Laura B.",
      rating: 4.9,
      text: "La calidad premium se nota desde el primer momento. Es exactamente lo que necesitaba para mantener mi ritmo de vida activo. Los resultados superaron mis expectativas."
    },
    {
      name: "Prof. Roberto C.",
      rating: 5.0,
      text: "La formulación más avanzada que he probado en mis años de investigación. Recomiendo totalmente este producto por sus beneficios comprobados y calidad excepcional."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">
          Experiencias de Éxito
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-white to-orange-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.floor(review.rating) ? "text-orange-500 fill-current" : "text-gray-300"}
                    size={24}
                  />
                ))}
                <span className="ml-3 text-lg text-gray-600">{review.rating}</span>
              </div>
              <p className="mb-6 text-gray-700">{review.text}</p>
              <p className="font-bold text-orange-600">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Order Form Component
const OrderForm = () => {
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYouModal(true);
  };

  return (
    <section id="orderForm" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-800">
          ¡Comienza Tu Transformación!
        </h2>
        <div className="max-w-md mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-2xl"
          >
            <div className="mb-8">
              <input
                type="text"
                className="name w-full px-6 py-4 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                name="name"
                maxLength="30"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="tel"
                className="name w-full px-6 py-4 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                name="phone"
                id="phoneNumber"
                placeholder="Tu número de teléfono"
                required
              />
            </div>
            
            <input type="hidden" name="pp" value="everad" />
            <input type="hidden" name="flow_id" value="1135205" />
            <input type="hidden" name="offer_id" value="" />
            <input type="hidden" name="geo" value="MX" />
            <input type="hidden" name="price" value="590" />
            <input type="hidden" name="sub1" value="{subid}" />
            <input type="hidden" name="sub2" value="carti" />
            <input type="hidden" name="sub3" value="{utm_campaign}" />
            <input type="hidden" name="sub4" value="{utm_medium}" />
            <input type="hidden" name="sub5" value="{utm_content}" />
            <input type="hidden" name="pixel" value="{pixel}" />
            <input type="hidden" name="gclid" value="{gclid}" />
            <input type="hidden" name="gbraid" value="{gbraid}" />
            <input type="hidden" name="wbraid" value="{wbraid}" />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Ordenar Ahora - $590 MXN
            </button>
            
            <p className="text-sm text-gray-500 mt-6 text-center">
              Este producto es un suplemento premium y está diseñado para complementar un estilo de vida saludable. 
              Consulte a su profesional de la salud antes de comenzar cualquier régimen de suplementación.
            </p>
          </form>
        </div>
      </div>

      <Modal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        title="¡Gracias por tu pedido!"
      >
        ¡Felicidades por dar el primer paso hacia tu bienestar optimal!

        Tu pedido de Uroxel ha sido recibido con éxito. Nuestro equipo está procesando tu orden con el máximo cuidado y atención a los detalles.

        Qué sigue:
        1. Recibirás un correo de confirmación en los próximos minutos
        2. Un asesor personal se pondrá en contacto contigo en las próximas 24 horas
        3. Tu pedido será enviado en un empaque discreto y seguro
        4. Te proporcionaremos el número de seguimiento para que puedas rastrear tu envío

        Si tienes alguna pregunta, no dudes en contactarnos:
        Email: support@uroxelmax.netlify.app
        WhatsApp: +52 (55) 1214-5671
        
        ¡Gracias por confiar en Uroxel para tu bienestar!
      </Modal>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const footerLinks = [
    { 
      id: 'privacy', 
      title: 'Política de Privacidad', 
      content: `Política de Privacidad de Uroxel

En Uroxel, la privacidad y seguridad de nuestros usuarios son prioridades fundamentales. Esta política detalla cómo recopilamos, utilizamos y protegemos su información personal.

1. Información que Recopilamos:
- Datos de contacto (nombre, teléfono, correo electrónico)
- Información de envío
- Historial de pedidos
- Preferencias de productos

2. Uso de la Información:
- Procesamiento de pedidos
- Mejora de nuestros productos y servicios
- Comunicación sobre su pedido
- Atención al cliente personalizada

3. Protección de Datos:
- Utilizamos encriptación SSL de última generación
- Acceso restringido a datos personales
- Sistemas de seguridad actualizados regularmente

4. Sus Derechos:
- Acceso a sus datos personales
- Corrección de información inexacta
- Eliminación de sus datos
- Limitación del procesamiento

Para cualquier consulta sobre privacidad, contáctenos:
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678`
    },
    { 
      id: 'terms', 
      title: 'Términos de Servicio', 
      content: `Términos de Servicio de Uroxel

1. Uso del Servicio
Al utilizar nuestros servicios, usted acepta estos términos en su totalidad. Nuestros servicios están diseñados para adultos mayores de 18 años.

2. Productos y Precios
- Todos los productos están sujetos a disponibilidad
- Los precios están en Pesos Mexicanos (MXN)
- Nos reservamos el derecho de modificar precios
- Todas las promociones tienen términos específicos

3. Pedidos y Pagos
- Los pedidos están sujetos a verificación
- Aceptamos principales métodos de pago
- La confirmación del pedido se enviará por email
- Los pagos se procesan de forma segura

4. Envíos
- Entrega en 3-5 días hábiles
- Seguimiento en tiempo real disponible
- Envío gratuito en pedidos superiores a $1000 MXN

5. Calidad y Garantía
- Productos de alta calidad garantizada
- Certificaciones sanitarias vigentes
- Satisfacción garantizada

6. Servicio al Cliente
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678
Horario: Lunes a Viernes 9:00-18:00`
    },
    { 
      id: 'returns', 
      title: 'Garantía de Satisfacción', 
      content: `Garantía de Satisfacción Uroxel

En Uroxel, estamos comprometidos con su satisfacción total. Nuestra garantía de 30 días le asegura una experiencia sin riesgos.

Política de Devolución:
1. Garantía de 30 días desde la recepción
2. Devolución completa del dinero si no está satisfecho
3. Sin preguntas ni condiciones complicadas

Proceso de Devolución:
1. Contáctenos dentro de los 30 días
2. Proporcione su número de pedido
3. Explique brevemente el motivo
4. Reciba instrucciones de devolución
5. Reembolso procesado en 3-5 días hábiles

Condiciones:
- Producto en condición original
- Empaque original cuando sea posible
- Incluir todos los componentes
- Gastos de envío cubiertos por Uroxel

Contacto para Devoluciones:
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678`
    },
    { 
      id: 'shipping', 
      title: 'Envío Premium', 
      content: `Servicio de Envío Premium Uroxel

Ofrecemos el servicio de envío más confiable y rápido para su tranquilidad.

Detalles del Servicio:
1. Envío Express Nacional
   - Entrega en 48-72 horas
   - Cobertura en toda la República Mexicana
   - Seguimiento en tiempo real

2. Características Premium:
   - Empaque discreto y seguro
   - Protección contra daños
   - Seguro de envío incluido
   - Notificaciones de estado
   
3. Costos de Envío:
   - Envío estándar: $99 MXN
   - Envío express: $149 MXN
   - Gratis en compras mayores a $1000 MXN

4. Seguimiento de Pedido:
   - Código de rastreo por email
   - Actualizaciones por WhatsApp
   - Soporte dedicado

Para consultas sobre envíos:
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678`
    },
    { 
      id: 'cookies', 
      title: 'Política de Cookies', 
      content: `Política de Cookies de Uroxel

Utilizamos cookies para mejorar su experiencia en nuestro sitio web.

1. Tipos de Cookies que Utilizamos:
- Cookies esenciales: Para el funcionamiento básico
- Cookies de rendimiento: Para analizar el uso
- Cookies de funcionalidad: Para recordar preferencias
- Cookies de publicidad: Para contenido personalizado

2. Gestión de Cookies:
- Puede controlar las cookies en su navegador
- Puede rechazar cookies no esenciales
- La desactivación puede afectar la funcionalidad

3. Uso de la Información:
- Mejora de la navegación
- Personalización de contenido
- Análisis de uso
- Optimización del sitio

4. Protección de Datos:
- Datos anónimos
- No compartimos información personal
- Cumplimiento con regulaciones

Para más información:
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678`
    },
    { 
      id: 'disclaimer', 
      title: 'Información Legal', 
      content: `Información Legal de Uroxel

Aviso Legal Importante:

1. Naturaleza del Producto:
- Uroxel es un suplemento alimenticio
- No es un medicamento
- No está destinado a diagnosticar, tratar, curar o prevenir enfermedades
- Los resultados pueden variar entre individuos

2. Recomendaciones de Uso:
- Seguir las instrucciones del empaque
- Consultar con profesional de salud
- No exceder la dosis recomendada
- Mantener fuera del alcance de niños

3. Advertencias:
- Solo para adultos mayores de 18 años
- No usar durante embarazo o lactancia
- Descontinuar uso si presenta reacciones adversas
- Almacenar en lugar fresco y seco

4. Certificaciones y Cumplimiento:
- Registro sanitario vigente
- Fabricación bajo normas GMP
- Ingredientes de calidad premium
- Análisis de calidad regulares

Consultas adicionales:
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678`
    },
    { 
      id: 'contacts', 
      title: 'Centro de Atención', 
      content: `Centro de Atención al Cliente Uroxel

Estamos aquí para ayudarte con cualquier consulta o asistencia que necesites.

Información de Contacto:
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678

Horario de Atención:
Lunes a Viernes: 9:00 - 18:00
Sábados: 10:00 - 14:00
Domingos: Cerrado

Tipos de Asistencia:
- Información de productos
- Seguimiento de pedidos
- Asesoría personalizada
- Devoluciones y garantías
- Soporte técnico
- Consultas generales

Tiempo de Respuesta:
- Emails: 24 horas máximo
- WhatsApp: 2-4 horas
- Llamadas: Inmediato en horario laboral

¡Tu satisfacción es nuestra prioridad!`
    },
    { 
      id: 'about', 
      title: 'Nuestra Misión', 
      content: `Nuestra Misión en Uroxel

En Uroxel, nos dedicamos a revolucionar el bienestar natural a través de la innovación y la excelencia.

Nuestra Historia:
Fundada por expertos en bienestar natural, Uroxel nació de la visión de crear productos que combinen la sabiduría tradicional con la ciencia moderna.

Nuestros Valores:
1. Calidad Sin Compromisos
   - Ingredientes premium
   - Procesos certificados
   - Control de calidad riguroso

2. Innovación Constante
   - Investigación continua
   - Tecnología de vanguardia
   - Mejora constante

3. Compromiso con el Cliente
   - Atención personalizada
   - Satisfacción garantizada
   - Transparencia total

4. Responsabilidad Social
   - Prácticas sustentables
   - Empaque eco-amigable
   - Apoyo a la comunidad

Nuestra Visión:
Ser líderes en soluciones naturales para el bienestar, mejorando la calidad de vida de nuestros clientes a través de productos innovadores y efectivos.

¡Únete a nuestra misión de bienestar!

Contacto:
Email: support@uroxelmax.netlify.app
WhatsApp: +52 (55) 1234-5678`
    }
  ];

  const activeModalData = footerLinks.find(link => link.id === activeModal);

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {footerLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveModal(link.id)}
              className="text-left hover:text-orange-400 transition-colors duration-300"
            >
              {link.title}
            </button>
          ))}
        </div>
        
        <Modal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={activeModalData?.title}
        >
          {activeModalData?.content}
        </Modal>
      </div>
    </footer>
  );
};

const CookieConsent = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-xl p-6 z-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-700 mb-4 md:mb-0">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setShow(false)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Aceptar
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Ingredients />
      <Reviews />
      <OrderForm />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;