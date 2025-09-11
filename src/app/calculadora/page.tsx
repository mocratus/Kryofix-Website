import CalculadoraClient from '@/components/CalculadoraClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CalculadoraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header hideCalculatorLink={true} />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Calculadora de Balance Térmico
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramienta profesional para calcular la capacidad de refrigeración necesaria
              en tu ambiente según las normas técnicas de CACAAV.
            </p>
          </div>

          <CalculadoraClient />

          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              ¿Necesitas una instalación profesional?
            </h2>
            <p className="text-blue-700 mb-4">
              En KryoFix contamos con técnicos matriculados por CACAAV para realizar
              instalaciones de aire acondicionado que cumplan con todas las normas técnicas.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold text-center"
              >
                Solicitar Presupuesto
              </a>
              <a
                href="/servicios"
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-semibold text-center"
              >
                Ver Nuestros Servicios
              </a>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: 'Calculadora de Balance Térmico | KryoFix',
  description: 'Calcula la capacidad de refrigeración necesaria para tu ambiente con nuestra herramienta profesional basada en normas CACAAV.',
  keywords: 'balance térmico, calculadora aire acondicionado, BTU, frigorías, CACAAV, refrigeración',
};