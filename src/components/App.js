import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { 
  AlertDialog, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogDescription, 
  AlertDialogAction 
} from './ui/AlertDialog';

// Компонент Header
const Header = () => (
  <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center">Uroxel</h1>
      <p className="text-xl text-center mt-2">Dulces naturales para tu bienestar diario</p>
    </div>
  </header>
);

// Компонент Hero
const Hero = () => (
  <section className="py-16 bg-orange-50">
    <div className="container mx-auto px-4 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img 
          src="https://static.tildacdn.com/tild3836-3761-4166-a231-376631646432/5.png" 
          alt="Uroxel - Dulces Naturales" 
          className="mx-auto max-w-sm rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">¡Descubre el sabor natural del bienestar!</h2>
        <p className="text-lg mb-6">Deliciosos dulces elaborados con ingredientes naturales seleccionados para tu día a día</p>
        <div className="text-2xl font-bold text-orange-600 mb-6">$590 MXN</div>
        <button onClick={() => document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' })} 
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
          ¡Ordena ahora!
        </button>
      </div>
    </div>
  </section>
);

// Компонент Benefits
const Benefits = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Beneficios de Uroxel</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-lg shadow-md">
          <div className="text-orange-500 text-4xl mb-4">🌿</div>
          <h3 className="text-xl font-bold mb-3">100% Natural</h3>
          <p>Elaborado con ingredientes naturales de la más alta calidad</p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-md">
          <div className="text-orange-500 text-4xl mb-4">✨</div>
          <h3 className="text-xl font-bold mb-3">Delicioso Sabor</h3>
          <p>Una experiencia única que combina sabor y beneficios naturales</p>
        </div>
        <div className="text-center p-6 rounded-lg shadow-md">
          <div className="text-orange-500 text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-3">Bienestar Diario</h3>
          <p>El complemento perfecto para tu rutina de bienestar</p>
        </div>
      </div>
    </div>
  </section>
);

// Компонент Ingredients
const Ingredients = () => (
  <section className="py-16 bg-orange-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Ingredientes Naturales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-orange-600">Cúrcuma</h3>
          <p>Especia natural con propiedades antioxidantes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-orange-600">Jengibre</h3>
          <p>Raíz natural que apoya el bienestar digestivo</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-orange-600">Zinc</h3>
          <p>Mineral esencial para el bienestar general</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-orange-600">Arginina</h3>
          <p>Aminoácido natural para tu vitalidad</p>
        </div>
      </div>
    </div>
  </section>
);

// Компонент Reviews
const Reviews = () => {
  const reviews = [
    {
      name: "María G.",
      rating: 4.8,
      text: "¡Estos dulces son increíbles! Me encanta que sean naturales y su sabor es delicioso."
    },
    {
      name: "Carlos R.",
      rating: 5.0,
      text: "Los mejores dulces naturales que he probado. Los recomiendo totalmente."
    },
    {
      name: "Ana P.",
      rating: 4.9,
      text: "Excelente producto, me ayuda a mantener mi rutina de bienestar de forma deliciosa."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Opiniones de Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.floor(review.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                    size={20}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{review.rating}</span>
              </div>
              <p className="mb-4">{review.text}</p>
              <p className="font-bold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Компонент OrderForm
const OrderForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="orderForm" className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¡Ordena Ahora!</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} action="../../order.php" method="POST" className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <input
                type="text"
                className="name w-full px-4 py-2 border rounded-lg"
                name="name"
                maxLength="30"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="tel"
                className="name w-full px-4 py-2 border rounded-lg"
                name="phone"
                id="phoneNumber"
                placeholder="Ingresa tu número de teléfono"
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
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Ordenar Ahora - $590 MXN
            </button>
            
            <p className="text-xs text-gray-600 mt-4 text-center">
              Este producto es un suplemento alimenticio y no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Consulte a su médico antes de consumir cualquier suplemento
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

// Компонент Footer
const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const modalContent = {
    privacy: {
      title: "Política de Privacidad",
      content: "Nuestra política de privacidad detalla cómo recopilamos, usamos y protegemos su información personal..."
    },
    terms: {
      title: "Términos de Servicio",
      content: "Al utilizar nuestro sitio web y productos, usted acepta cumplir con nuestros términos de servicio..."
    },
    returns: {
      title: "Política de Devoluciones y Reembolsos",
      content: "Aceptamos devoluciones dentro de los 30 días posteriores a la compra..."
    },
    shipping: {
      title: "Información de Envío",
      content: "Realizamos envíos a todo México. El tiempo de entrega estimado es de 3-5 días hábiles..."
    },
    cookies: {
      title: "Política de Cookies",
      content: "Utilizamos cookies para mejorar su experiencia de navegación..."
    },
    disclaimer: {
      title: "Aviso Legal",
      content: "Este producto es un dulce y no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad..."
    },
    contacts: {
      title: "Contactos",
      content: "Email: info@uroxel.netlify.app\nTeléfono: +52 5512345678\nDirección: Av. Insurgentes Sur 1234, Col. Del Valle, Ciudad de México, CP 03100"
    },
    about: {
      title: "Sobre Nosotros",
      content: "Somos una empresa dedicada a crear dulces naturales de alta calidad..."
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(modalContent).map(([key, { title }]) => (
            <button
              key={key}
              onClick={() => setActiveModal(key)}
              className="text-left hover:text-orange-400 transition-colors"
            >
              {title}
            </button>
          ))}
        </div>
        
        <AlertDialog open={!!activeModal} onOpenChange={() => setActiveModal(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{activeModal && modalContent[activeModal].title}</AlertDialogTitle>
              <AlertDialogDescription className="whitespace-pre-line">
                {activeModal && modalContent[activeModal].content}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogAction onClick={() => setActiveModal(null)}>Cerrar</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </footer>
  );
};

// Компонент CookieConsent
const CookieConsent = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-700 mb-4 md:mb-0">
          Utilizamos cookies para mejorar su experiencia en nuestro sitio web.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setShow(false)}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Aceptar
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

// Главный компонент App
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