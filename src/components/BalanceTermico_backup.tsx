'use client';

import { useState } from 'react';

interface CalculoData {
  // Ventanas - Radiacion solar
  ventanaOrientacion: string;
  ventanaArea: number;
  ventanaSombra: string;
  ventanaTipoVidrio: string;
  
  // Ventanas - Conduccion
  ventanaConductionArea: number;
  ventanaConductionTipo: string;
  
  // Paredes
  paredExternaSur: number;
  paredExternaOtras: number;
  paredInterna: number;
  construccionTipo: string;
  
  // Techos
  techoArea: number;
  techoTipo: string;
  
  // Pisos
  pisoArea: number;
  
  // Personas
  personas: number;
  
  // Consumos electricos
  consumoElectrico: number;
  
  // Aberturas
  aberturas: number;
  
  // Factor de region
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

  // Estado para manejar los valores de display de los inputs
  const [inputValues, setInputValues] = useState<{[key: string]: string}>({});

  // Valores iniciales para reseteo
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

  // Coeficientes segun la planilla CACAAV
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

  const calcularBalance = () => {
    let totalKcalh = 0;

    // 1. Ventanas - Radiacion solar
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

    // 2. Ventanas - Conduccion
    const coefConduccion = coeficientes.ventanaConduccion[datos.ventanaConductionTipo as keyof typeof coeficientes.ventanaConduccion];
    const cargaConduccion = datos.ventanaConductionArea * coefConduccion;
    totalKcalh += cargaConduccion;

    // 3. Paredes
    const construccion = datos.construccionTipo as keyof typeof coeficientes.paredes;
    const cargaParedExternaSur = datos.paredExternaSur * coeficientes.paredes[construccion].externaSur;
    const cargaParedExternaOtras = datos.paredExternaOtras * coeficientes.paredes[construccion].externaOtras;
    const cargaParedInterna = datos.paredInterna * coeficientes.paredes[construccion].interna;
    totalKcalh += cargaParedExternaSur + cargaParedExternaOtras + cargaParedInterna;

    // 4. Techos
    const coefTecho = coeficientes.techos[datos.techoTipo as keyof typeof coeficientes.techos];
    const cargaTecho = datos.techoArea * coefTecho;
    totalKcalh += cargaTecho;

    // 5. Pisos
    const cargaPiso = datos.pisoArea * coeficientes.pisos;
    totalKcalh += cargaPiso;

    // 6. Personas
    const cargaPersonas = datos.personas * coeficientes.personas;
    totalKcalh += cargaPersonas;

    // 7. Consumos electricos
    const cargaElectrica = datos.consumoElectrico * coeficientes.consumoElectrico;
    totalKcalh += cargaElectrica;

    // 8. Aberturas
    const cargaAberturas = datos.aberturas * coeficientes.aberturas;
    totalKcalh += cargaAberturas;

    // Aplicar factor de region
    const totalFinal = totalKcalh * datos.factorRegion;

    // Conversiones
    const watts = totalFinal * 1.163; // 1 kcal/h = 1.163 W
    const frigorias = totalFinal; // 1 kcal/h = 1 frigoria/h
    const btu = totalFinal * 3.968; // 1 kcal/h = 3.968 BTU/h

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

  // Funcion mejorada para manejar inputs numericos con mejor UX
  const handleNumericInputChange = (field: keyof CalculoData, value: string) => {
    // Permitir valores vacios, numeros, comas y puntos
    const cleanValue = value.replace(/[^0-9.,]/g, '');

    // Reemplazar punto por coma para mostrar consistencia
    let displayValue = cleanValue.replace(/\./g, ',');

    // Permitir solo una coma decimal
    const commaCount = (displayValue.match(/,/g) || []).length;
    if (commaCount > 1) {
      // Si hay mas de una coma, mantener solo la primera
      const firstCommaIndex = displayValue.indexOf(',');
      displayValue = displayValue.substring(0, firstCommaIndex + 1) +
                    displayValue.substring(firstCommaIndex + 1).replace(/,/g, '');
    }

    // Actualizar el valor de display
    setInputValues(prev => ({
      ...prev,
      [field]: displayValue
    }));

    // Si el campo esta vacio, resetear a 0
    if (displayValue === '') {
      setDatos(prev => ({
        ...prev,
        [field]: 0
      }));
      return;
    }

    // Si termina en coma, permitir que el usuario siga escribiendo
    if (displayValue.endsWith(',')) {
      // No actualizar el valor numerico aun, solo mostrar la coma
      return;
    }

    // Convertir a numero para almacenar
    const numericValue = parseFloat(displayValue.replace(',', '.'));

    // Solo actualizar si es un numero valido
    if (!isNaN(numericValue)) {
      setDatos(prev => ({
        ...prev,
        [field]: numericValue
      }));
    }
  };

  // Funcion para manejar eventos de teclado en inputs numericos
  const handleNumericKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: keyof CalculoData) => {
    // Permitir borrado completo con Backspace cuando el campo esta seleccionado
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

  // Funcion para obtener el valor de display de un campo
  const getDisplayValue = (field: keyof CalculoData): string => {
    // Si hay un valor en inputValues, usarlo (para mostrar mientras se escribe)
    if (inputValues[field] !== undefined) {
      return inputValues[field];
    }

    // Si no, mostrar el valor del estado, formateado
    const value = datos[field] as number;
    if (value === 0) {
      return '';
    }

    return value.toString().replace('.', ',');
  };
