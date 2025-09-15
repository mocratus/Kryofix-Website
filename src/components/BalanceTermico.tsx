'use client';

import { useState } from 'react';

interface CalculoData {
  ventanaOrientacion: string;
  ventanaArea: number;
  ventanaSombra: string;
  ventanaTipoVidrio: string;
  ventanaConductionArea: number;
  ventanaConductionTipo: string;
  paredExternaSur: number;
  paredExternaOtras: number;
  paredInterna: number;
  construccionTipo: string;
  techoArea: number;
  techoTipo: string;
  pisoArea: number;
  personas: number;
  consumoElectrico: number;
  aberturas: number;
  factorRegion: number;
}

const BalanceTermico = () => {
  const [datos, setDatos] = useState<CalculoData>({
    ventanaOrientacion: 'sur',
    ventanaArea: 0,
    ventanaSombra: 'sin-sombra',
    ventanaTipoVidrio: 'simple',
    ventanaConductionArea: 0,
    ventanaConductionTipo: 'simple',
    paredExternaSur: 0,
    paredExternaOtras: 0,
    paredInterna: 0,
    construccionTipo: 'liviana',
    techoArea: 0,
    techoTipo: 'no-aislado',
    pisoArea: 0,
    personas: 0,
    consumoElectrico: 0,
    aberturas: 0,
    factorRegion: 1.0
  });

  const [inputValues, setInputValues] = useState<{[key: string]: string}>({});

  const valoresIniciales: CalculoData = {
    ventanaOrientacion: 'sur',
    ventanaArea: 0,
    ventanaSombra: 'sin-sombra',
    ventanaTipoVidrio: 'simple',
    ventanaConductionArea: 0,
    ventanaConductionTipo: 'simple',
    paredExternaSur: 0,
    paredExternaOtras: 0,
    paredInterna: 0,
    construccionTipo: 'liviana',
    techoArea: 0,
    techoTipo: 'no-aislado',
    pisoArea: 0,
    personas: 0,
    consumoElectrico: 0,
    aberturas: 0,
    factorRegion: 1.0
  };

  const [resultado, setResultado] = useState<{
    kcalh: number;
    watts: number;
    frigorias: number;
    btu: number;
  } | null>(null);

  const [mostrarModalReset, setMostrarModalReset] = useState(false);

  const coeficientes = {
    ventanaRadiacion: {
      sudeste: { sinSombra: 166, sombraInterior: 69, sombraExterior: 55 },
      este: { sinSombra: 222, sombraInterior: 111, sombraExterior: 69 },
      noreste: { sinSombra: 208, sombraInterior: 83, sombraExterior: 55 },
      norte: { sinSombra: 139, sombraInterior: 55, sombraExterior: 42 },
      noroeste: { sinSombra: 208, sombraInterior: 83, sombraExterior: 55 },
      oeste: { sinSombra: 416, sombraInterior: 166, sombraExterior: 111 },
      suroeste: { sinSombra: 277, sombraInterior: 111, sombraExterior: 83 },
      sur: { sinSombra: 0, sombraInterior: 0, sombraExterior: 0 }
    },
    tipoVidrio: {
      simple: 1.0,
      doble: 0.8,
      ladrillo: 0.6
    },
    ventanaConduccion: {
      simple: 39,
      doble: 28,
      ladrillo: 22
    },
    paredes: {
      liviana: {
        externaSur: 25,
        externaOtras: 50,
        interna: 25
      },
      pesada: {
        externaSur: 17,
        externaOtras: 25,
        interna: 25
      }
    },
    techos: {
      'no-aislado': 83,
      'aislado-25mm': 42,
      'cielorraso-ocupado': 17,
      'cielorraso-aislado': 25,
      'cielorraso-no-aislado': 42
    },
    pisos: 17,
    personas: 125,
    consumoElectrico: 0.86,
    aberturas: 555
  };

  // Potencias comerciales estándar en Argentina (en watts)
  const potenciasComerciales = [
    2200, 2700, 3200, 3500, 4500, 5200, 6000, 7000, 9000, 12000, 15000, 18000
  ];

  // Función para obtener el equipo comercial recomendado
  const obtenerEquipoRecomendado = (calculoWatts: number) => {
    const equipoRecomendado = potenciasComerciales.find(potencia => potencia >= calculoWatts);
    return equipoRecomendado || potenciasComerciales[potenciasComerciales.length - 1];
  };

  const calcularBalance = () => {
    let totalKcalh = 0;

    const orientacion = datos.ventanaOrientacion as keyof typeof coeficientes.ventanaRadiacion;
    let sombraKey: keyof typeof coeficientes.ventanaRadiacion.sur;

    switch(datos.ventanaSombra) {
      case 'sin-sombra':
        sombraKey = 'sinSombra';
        break;
      case 'sombra-interior':
        sombraKey = 'sombraInterior';
        break;
      case 'sombra-exterior':
        sombraKey = 'sombraExterior';
        break;
      default:
        sombraKey = 'sinSombra';
    }

    const coefRadiacion = coeficientes.ventanaRadiacion[orientacion][sombraKey];
    const factorVidrio = coeficientes.tipoVidrio[datos.ventanaTipoVidrio as keyof typeof coeficientes.tipoVidrio];
    const cargaRadiacion = datos.ventanaArea * coefRadiacion * factorVidrio;
    totalKcalh += cargaRadiacion;

    const coefConduccion = coeficientes.ventanaConduccion[datos.ventanaConductionTipo as keyof typeof coeficientes.ventanaConduccion];
    const cargaConduccion = datos.ventanaConductionArea * coefConduccion;
    totalKcalh += cargaConduccion;

    const construccion = datos.construccionTipo as keyof typeof coeficientes.paredes;
    const cargaParedExternaSur = datos.paredExternaSur * coeficientes.paredes[construccion].externaSur;
    const cargaParedExternaOtras = datos.paredExternaOtras * coeficientes.paredes[construccion].externaOtras;
    const cargaParedInterna = datos.paredInterna * coeficientes.paredes[construccion].interna;
    totalKcalh += cargaParedExternaSur + cargaParedExternaOtras + cargaParedInterna;

    const coefTecho = coeficientes.techos[datos.techoTipo as keyof typeof coeficientes.techos];
    const cargaTecho = datos.techoArea * coefTecho;
    totalKcalh += cargaTecho;

    const cargaPiso = datos.pisoArea * coeficientes.pisos;
    totalKcalh += cargaPiso;

    const cargaPersonas = datos.personas * coeficientes.personas;
    totalKcalh += cargaPersonas;

    const cargaElectrica = datos.consumoElectrico * coeficientes.consumoElectrico;
    totalKcalh += cargaElectrica;

    const cargaAberturas = datos.aberturas * coeficientes.aberturas;
    totalKcalh += cargaAberturas;

    const totalFinal = totalKcalh * datos.factorRegion;

    const watts = totalFinal * 1.163;
    const frigorias = totalFinal;
    const btu = totalFinal * 3.968;

    setResultado({
      kcalh: Math.round(totalFinal),
      watts: Math.round(watts),
      frigorias: Math.round(frigorias),
      btu: Math.round(btu)
    });
  };

  const handleInputChange = (field: keyof CalculoData, value: string | number) => {
    setDatos(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNumericInputChange = (field: keyof CalculoData, value: string) => {
    const cleanValue = value.replace(/[^0-9.,]/g, '');
    let displayValue = cleanValue.replace(/\./g, ',');

    const commaCount = (displayValue.match(/,/g) || []).length;
    if (commaCount > 1) {
      const firstCommaIndex = displayValue.indexOf(',');
      displayValue = displayValue.substring(0, firstCommaIndex + 1) +
                    displayValue.substring(firstCommaIndex + 1).replace(/,/g, '');
    }

    setInputValues(prev => ({
      ...prev,
      [field]: displayValue
    }));

    if (displayValue === '') {
      setDatos(prev => ({
        ...prev,
        [field]: 0
      }));
      return;
    }

    if (displayValue.endsWith(',')) {
      return;
    }

    const numericValue = parseFloat(displayValue.replace(',', '.'));

    if (!isNaN(numericValue)) {
      setDatos(prev => ({
        ...prev,
        [field]: numericValue
      }));
    }
  };

  const handleNumericKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: keyof CalculoData) => {
    if (e.key === 'Backspace' && e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === e.currentTarget.value.length) {
      e.preventDefault();
      setDatos(prev => ({
        ...prev,
        [field]: 0
      }));
      setInputValues(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const getDisplayValue = (field: keyof CalculoData): string => {
    if (inputValues[field] !== undefined) {
      return inputValues[field];
    }

    const value = datos[field] as number;
    if (value === 0) {
      return '';
    }

    return value.toString().replace('.', ',');
  };

  const resetearFormulario = () => {
    const hayDatos = Object.values(datos).some((valor, index) => {
      const valorInicial = Object.values(valoresIniciales)[index];
      return valor !== valorInicial;
    });

    const hayResultados = resultado !== null;

    if (hayDatos || hayResultados) {
      setMostrarModalReset(true);
    } else {
      ejecutarReset();
    }
  };

  const ejecutarReset = () => {
    setDatos(valoresIniciales);
    setInputValues({});
    setResultado(null);
    setMostrarModalReset(false);
  };

  const cancelarReset = () => {
    setMostrarModalReset(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      {/* Fila 1: Secciones 1 y 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Sección 1: Ventanas - Radiación Solar */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-800 border-b border-gray-200 pb-2">
            1. Ventanas - Radiacion Solar
          </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Orientacion:
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Seleccione hacia donde estan orientadas las ventanas principales del ambiente. Use una brujula o app movil para determinar la orientacion exacta."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  value={datos.ventanaOrientacion}
                  onChange={(e) => handleInputChange('ventanaOrientacion', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-white text-gray-900"
                >
                  <option value="sudeste">Sudeste</option>
                  <option value="este">Este</option>
                  <option value="noreste">Noreste</option>
                  <option value="norte">Norte</option>
                  <option value="noroeste">Noroeste</option>
                  <option value="oeste">Oeste</option>
                  <option value="suroeste">Suroeste</option>
                  <option value="sur">Sur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Area de ventanas (m²):
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Mida el ancho y alto de cada ventana en metros, multiplique para obtener el area (ej: 1.5m x 1.2m = 1.8m²). Si hay varias ventanas, sume todas las areas."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('ventanaArea')}
                  onChange={(e) => handleNumericInputChange('ventanaArea', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'ventanaArea')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-white text-gray-900"
                  placeholder="Ej: 2,5"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Tipo de sombra:
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Sin sombra: ventana recibe sol directo. Sombra interior: tiene cortinas, persianas o films. Sombra exterior: tiene alero, toldo o esta bajo balcon."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  value={datos.ventanaSombra}
                  onChange={(e) => handleInputChange('ventanaSombra', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-white text-gray-900"
                >
                  <option value="sin-sombra">Sin sombra</option>
                  <option value="sombra-interior">Sombra interior</option>
                  <option value="sombra-exterior">Sombra exterior</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Tipo de vidrio:
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Vidrio simple: una sola lamina de vidrio. Vidrio doble: doble vidriado hermetico (DVH). Ladrillo de vidrio: bloques de vidrio translucidos."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  value={datos.ventanaTipoVidrio}
                  onChange={(e) => handleInputChange('ventanaTipoVidrio', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-white text-gray-900"
                >
                  <option value="simple">Vidrio simple</option>
                  <option value="doble">Vidrio doble</option>
                  <option value="ladrillo">Ladrillo de vidrio</option>
                </select>
              </div>
          </div>
        </div>

        {/* Sección 2: Ventanas - Conducción */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-800 border-b border-gray-200 pb-2">
            2. Ventanas - Conduccion
          </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Area de ventanas (m²):
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Puede usar la misma medida que en radiacion solar si son las mismas ventanas, o medir por separado si considera ventanas diferentes."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('ventanaConductionArea')}
                  onChange={(e) => handleNumericInputChange('ventanaConductionArea', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'ventanaConductionArea')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-white text-gray-900"
                  placeholder="Ej: 2,5"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Tipo de vidrio:
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Mismo criterio que en radiacion solar. El tipo de vidrio afecta la transmision de calor por conduccion."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  value={datos.ventanaConductionTipo}
                  onChange={(e) => handleInputChange('ventanaConductionTipo', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-white text-gray-900"
                >
                  <option value="simple">Vidrio simple</option>
                  <option value="doble">Vidrio doble</option>
                  <option value="ladrillo">Ladrillo de vidrio</option>
                </select>
              </div>
          </div>
        </div>
      </div>

      {/* Fila 2: Secciones 3 y 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Sección 3: Paredes */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-800 border-b border-gray-200 pb-2">
            3. Paredes
          </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Tipo de construccion:
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Liviana: paredes de ladrillo hueco, steel frame, madera. Pesada: ladrillo macizo, hormigon, piedra. Afecta la inercia termica."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  value={datos.construccionTipo}
                  onChange={(e) => handleInputChange('construccionTipo', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors bg-white text-gray-900"
                >
                  <option value="liviana">Construccion liviana</option>
                  <option value="pesada">Construccion pesada</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Paredes externas orientacion Sur (metros lineales):
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Mida solo las paredes que dan al exterior hacia el Sur. Use cinta metrica para medir el largo total de estas paredes en metros."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('paredExternaSur')}
                  onChange={(e) => handleNumericInputChange('paredExternaSur', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'paredExternaSur')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 4,0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Paredes externas otras orientaciones (metros lineales):
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Mida todas las paredes externas que NO dan al Sur (Norte, Este, Oeste, etc.). Sume todos los metros lineales."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('paredExternaOtras')}
                  onChange={(e) => handleNumericInputChange('paredExternaOtras', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'paredExternaOtras')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 8,0"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Paredes internas (metros lineales):
                  <span
                    className="ml-2 text-cyan-600 cursor-help hover:text-cyan-700 transition-colors"
                    title="Solo paredes que separan el ambiente a climatizar de espacios SIN aire acondicionado (ej: cocina, bano, pasillo sin AC)."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('paredInterna')}
                  onChange={(e) => handleNumericInputChange('paredInterna', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'paredInterna')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 3,0"
                />
              </div>
          </div>
        </div>

        {/* Sección 4: Techos o Cielorrasos */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-800 border-b border-gray-200 pb-2">
            4. Techos o Cielorrasos
          </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Area del techo (m²):
                  <span
                    className="ml-1 text-blue-500 cursor-help"
                    title="Mida largo x ancho del ambiente para obtener la superficie del techo en metros cuadrados (ej: 4m x 3m = 12m²)."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('techoArea')}
                  onChange={(e) => handleNumericInputChange('techoArea', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'techoArea')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 12,0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Tipo de techo:
                  <span
                    className="ml-1 text-blue-500 cursor-help"
                    title="No aislado: chapa/teja directo. Con aislacion: tiene lana de vidrio/poliuretano. Cielorraso ocupado: hay piso arriba. Altillo: espacio vacio arriba."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  value={datos.techoTipo}
                  onChange={(e) => handleInputChange('techoTipo', e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="no-aislado">Techo no aislado</option>
                  <option value="aislado-25mm">Techo con aislacion (25mm)</option>
                  <option value="cielorraso-ocupado">Cielorraso ocupado arriba</option>
                  <option value="cielorraso-aislado">Cielorraso aislado con altillo</option>
                  <option value="cielorraso-no-aislado">Cielorraso no aislado con altillo</option>
                </select>
              </div>
          </div>
        </div>
      </div>

      {/* Fila 3: Sección 5 - Ancho completo */}
      <div className="mb-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-800 border-b border-gray-200 pb-2">
            5. Otros Factores
          </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Area del piso (m²):
                  <span
                    className="ml-1 text-blue-500 cursor-help"
                    title="Solo si el piso NO esta sobre tierra (ej: departamento, primer piso sobre garage). Usar la misma medida que el techo."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('pisoArea')}
                  onChange={(e) => handleNumericInputChange('pisoArea', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'pisoArea')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 12,0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Numero de personas:
                  <span
                    className="ml-1 text-blue-500 cursor-help"
                    title="Cantidad de personas que habitualmente ocupan el ambiente al mismo tiempo (no la capacidad maxima, sino el uso normal)."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={getDisplayValue('personas')}
                  onChange={(e) => handleNumericInputChange('personas', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'personas')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Consumo electrico total (watts):
                  <span
                    className="ml-1 text-blue-500 cursor-help"
                    title="Sume la potencia de todas las luces, TV, computadoras, equipos que funcionen habitualmente en el ambiente. Vea las etiquetas de potencia."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('consumoElectrico')}
                  onChange={(e) => handleNumericInputChange('consumoElectrico', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'consumoElectrico')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Aberturas permanentes (metros de ancho):
                  <span
                    className="ml-1 text-blue-500 cursor-help"
                    title="Puertas o aberturas que permanecen abiertas hacia espacios sin aire acondicionado (ej: puerta a cocina que no se cierra)."
                  >
                    ⓘ
                  </span>
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={getDisplayValue('aberturas')}
                  onChange={(e) => handleNumericInputChange('aberturas', e.target.value)}
                  onKeyDown={(e) => handleNumericKeyDown(e, 'aberturas')}
                  className="w-full p-2 border rounded-md"
                  placeholder="Ej: 0,8"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium mb-1">
                  Factor de region:
                  <span
                    className="ml-1 text-blue-500 cursor-help"
                    title="Seleccione segun su ubicacion: Norte argentino (muy calurosa), Centro/Litoral (calurosa), Buenos Aires (templada), Patagonia norte (templada fria), Patagonia sur (fria)."
                  >
                    ⓘ
                  </span>
                </label>
                <select
                  value={datos.factorRegion}
                  onChange={(e) => handleInputChange('factorRegion', parseFloat(e.target.value))}
                  className="w-full p-2 border rounded-md"
                >
                  <option value={1.1}>Zona muy calurosa - Norte (1.1)</option>
                  <option value={1.0}>Zona calurosa - Centro/Litoral (1.0)</option>
                  <option value={0.95}>Zona templada - Buenos Aires (0.95)</option>
                  <option value={0.9}>Zona templada fria - Patagonia Norte (0.9)</option>
                  <option value={0.8}>Zona fria - Patagonia Sur (0.8)</option>
                </select>
              </div>
            </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            onClick={resetearFormulario}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            Resetear
          </button>
          <button
            onClick={calcularBalance}
            className="flex-1 sm:flex-[2] bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span className="hidden sm:inline">Calcular Balance Termico</span>
            <span className="sm:hidden">Calcular</span>
          </button>
        </div>

        <h3 className="font-bold text-lg mb-4 text-gray-800 border-b border-gray-200 pb-2">
          Resultado del Calculo
        </h3>

        {resultado ? (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border border-cyan-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <p className="text-xs text-gray-600">Watts</p>
                  <p className="text-lg font-bold text-gray-800">{resultado.watts.toLocaleString()} W</p>
                </div>
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <p className="text-xs text-gray-600">Frigorias/h</p>
                  <p className="text-lg font-bold text-gray-800">{resultado.frigorias.toLocaleString()} fg/h</p>
                </div>
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <p className="text-xs text-gray-600">BTU/h</p>
                  <p className="text-lg font-bold text-gray-800">{resultado.btu.toLocaleString()} BTU/h</p>
                </div>
                <div className="bg-white p-2 rounded-md shadow-sm">
                  <p className="text-xs text-gray-600">Kcal/h</p>
                  <p className="text-lg font-bold text-gray-800">{resultado.kcalh.toLocaleString()} kcal/h</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <div className="text-center">
                <p className="font-bold text-green-800 text-base mb-2">Recomendacion:</p>
                <p className="text-sm text-green-700">
                  Equipo de <span className="font-bold">{obtenerEquipoRecomendado(resultado.watts).toLocaleString()} watts</span> o <span className="font-bold">{Math.round(obtenerEquipoRecomendado(resultado.watts) / 1.163).toLocaleString()} frigorias/h</span> aproximadamente.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-500 text-sm">Complete los datos y haga clic en "Calcular" para ver el resultado.</p>
          </div>
        )}

        {/* Advertencia - Solo se muestra cuando hay resultado */}
        {resultado && (
          <div className="mt-6 bg-yellow-50 p-5 rounded-lg border border-yellow-200">
            <div className="text-center">
              <h4 className="text-base font-bold text-yellow-800 mb-3 flex items-center justify-center gap-2">
                <span>⚠️</span>
                Importante
              </h4>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Este calculo es una estimacion basada en las normas CACAAV. Para una evaluacion
                precisa y profesional, recomendamos una visita tecnica donde se consideren
                todos los factores especificos de tu instalacion.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Modal de confirmación personalizado - Flotante superior */}
      {mostrarModalReset && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-16 sm:pt-20 px-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md shadow-2xl border border-gray-100">
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50">
                  {/* Bote de basura con tapa abierta */}
                  <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* Tapa del bote (abierta/inclinada) */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l2-2h14l2 2" />
                    {/* Cuerpo del bote */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 6v12a2 2 0 002 2h10a2 2 0 002-2V6" />
                    {/* Líneas interiores del bote */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 11v6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 11v6" />
                    {/* Asa de la tapa */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                ¿Limpiar calculadora?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Se borraran todos los datos ingresados y los resultados del calculo.
                Esta accion no se puede deshacer.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={cancelarReset}
                  className="px-4 sm:px-6 py-3 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                >
                  Mantener datos
                </button>
                <button
                  onClick={ejecutarReset}
                  className="px-4 sm:px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Sí, limpiar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BalanceTermico;
