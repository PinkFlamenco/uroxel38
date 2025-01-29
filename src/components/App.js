import React, { useState } from 'react';
import { Star } from 'lucide-react';

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4">
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
      description: "Fórmula avanzada con ingredientes bioactivos de última generación"
    },
    {
      icon: "⚡",
      title: "Máximo Rendimiento",
      description: "Potencia tu energía y vitalidad con nuestra fórmula exclusiva"
    },
    {
      icon: "🎯",
      title: "Resultados Garantizados",
      description: "Eficacia comprobada para tu bienestar diario"
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
      description: "Potente antioxidante de máxima pureza"
    },
    {
      title: "Jengibre Premium",
      description: "Extracto concentrado de alta biodisponibilidad"
    },
    {
      title: "Zinc Avanzado",
      description: "Mineral quelado de última generación"
    },
    {
      title: "Arginina Plus",
      description: "Aminoácido optimizado de acción prolongada"
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
      text: "Una innovación excepcional en suplementos naturales. Los resultados son notables desde las primeras semanas."
    },
    {
      name: "Laura B.",
      rating: 4.9,
      text: "La calidad premium se nota. Es exactamente lo que necesitaba para mantener mi ritmo de vida activo."
    },
    {
      name: "Prof. Roberto C.",
      rating: 5.0,
      text: "La formulación más avanzada que he probado. Recomiendo totalmente este producto."
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

// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4">
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

// Footer Component
const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const footerLinks = [
    { id: 'privacy', title: 'Política de Privacidad', content: 'En Uroxel, valoramos su privacidad y nos dedicamos a salvaguardarla. Esta política detalla la manera en que recopilamos y utilizamos su información personal. Información que recopilamos: Datos de contacto (nombre, número de teléfono, dirección de correo electrónico) Detalles de pedidos Información de navegación Sus datos están protegidos con nosotros y no serán compartidos con terceros sin su autorización. Si desea más información o tiene preguntas sobre nuestra política de privacidad, no dude en comunicarse con nosotros a través de info@uroxe.netlify.app'},
    { id: 'terms', title: 'Términos de Servicio', content: 'Al acceder a nuestro sitio web y realizar compras, usted acepta los siguientes términos: Productos y Precios Todos los precios están expresados en Pesos Mexicanos (MXN). Nos reservamos el derecho de realizar modificaciones en los precios. Las imágenes de los productos son meramente ilustrativas. Pedidos La confirmación de un pedido no garantiza su disponibilidad. Nos reservamos el derecho de rechazar cualquier pedido. Los plazos de entrega son estimados y pueden variar. Uso del Sitio El contenido del sitio es propiedad de Uroxel. Queda prohibido el uso comercial del contenido sin nuestra autorización. Nos reservamos el derecho de realizar modificaciones en el sitio web.' },
    { id: 'returns', title: 'Garantía de Satisfacción', content: 'Ofrecemos una garantía de satisfacción de 30 días con devolución completa...' },
    { id: 'shipping', title: 'Envío Premium', content: 'Envío express a todo México en 48-72 horas. Seguimiento en tiempo real disponible...' },
    { id: 'cookies', title: 'Política de Cookies', content: 'En nuestro sitio web, utilizamos cookies para optimizar su experiencia: Tipos de Cookies Cookies esenciales: Indispensables para el funcionamiento del sitio. Cookies de rendimiento: Utilizadas para analizar el uso del sitio. Cookies de preferencias: Sirven para recordar sus elecciones y configuraciones. Finalidad Mejorar la navegación en el sitio. Recordar sus preferencias y configuraciones. Realizar análisis sobre el uso del sitio web. Control de Cookies Tiene la opción de desactivar las cookies a través de la configuración de su navegador. Tenga en cuenta que algunas funcionalidades pueden verse afectadas. Las cookies esenciales no pueden ser desactivadas, ya que son necesarias para el funcionamiento básico del sitio.' },
    { id: 'disclaimer', title: 'Información Legal', content: 'Uroxel es un suplemento premium diseñado para complementar un estilo de vida saludable...' },
    { id: 'contacts', title: 'Centro de Atención', content: 'Email: support@uroxelmax.netlify.app\nWhatsApp: +52 1512345671\nHorario: Lun-Vie 9:00-18:00' },
    { id: 'about', title: 'Nuestra Misión', content: 'En Uroxel, nos dedicamos a la innovación en bienestar natural con tecnología de vanguardia...' }
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

// Cookie Consent Component
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

// Main App Component
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