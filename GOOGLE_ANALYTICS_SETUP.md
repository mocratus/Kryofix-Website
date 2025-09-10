# 📊 Configuración de Google Analytics para KryoFix

## 🚀 ¿Qué se implementó?

### ✅ Seguimiento completo de conversiones:
- **Formulario de contacto** - Cuando alguien envía una consulta
- **Clics en WhatsApp** - Desde header, sección contacto, footer, etc.
- **Clics en email** - Cuando alguien hace clic en info@kryofix.com
- **Páginas visitadas** - Qué páginas ve la gente
- **Dispositivos** - Móvil vs desktop
- **Ubicación** - De dónde vienen los visitantes

## 📋 Pasos para activar Google Analytics:

### 1. Crear cuenta de Google Analytics:
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Haz clic en "Empezar"
3. Crea una cuenta para "KryoFix"
4. Configura una propiedad para tu sitio web
5. Copia el **ID de medición** (formato: G-XXXXXXXXXX)

### 2. Configurar en el sitio:
1. Abre el archivo `.env.local`
2. Reemplaza `G-XXXXXXXXXX` con tu ID real:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TU_ID_REAL_AQUI
   ```
3. Reinicia el servidor: `npm run dev`

### 3. Verificar que funciona:
1. Ve a tu sitio web
2. En Google Analytics, ve a "Tiempo real"
3. Deberías ver tu visita en tiempo real
4. Prueba hacer clic en WhatsApp, enviar formulario, etc.

## 📈 Qué vas a poder ver:

### 📊 Métricas principales:
- **Visitantes únicos** por día/semana/mes
- **Páginas más visitadas**
- **Tiempo en el sitio**
- **Dispositivos más usados** (móvil/desktop)
- **Ubicación de visitantes**

### 🎯 Conversiones rastreadas:
- `contact_form_submit` - Formularios enviados
- `whatsapp_click_header_desktop` - WhatsApp desde header desktop
- `whatsapp_click_header_mobile` - WhatsApp desde header móvil
- `whatsapp_click_contact_section` - WhatsApp desde sección contacto
- `whatsapp_click_footer` - WhatsApp desde footer
- `whatsapp_click_confirmation_message` - WhatsApp desde mensaje confirmación
- `whatsapp_click_quick_response` - WhatsApp desde mensaje respuesta rápida
- `email_click` - Clics en email

### 📱 Ejemplo de reporte semanal:
```
Esta semana:
- 150 visitantes únicos
- 25 formularios enviados (17% conversión)
- 45 clics en WhatsApp (30% conversión)
- 80% visitantes desde móvil
- Página más visitada: /servicios
```

## 🔧 Configuraciones adicionales recomendadas:

### En Google Analytics:
1. **Configurar objetivos** para conversiones
2. **Crear audiencias** para remarketing
3. **Configurar alertas** para picos de tráfico
4. **Conectar con Google Ads** si haces publicidad

### Reportes útiles:
- **Adquisición** → De dónde vienen los visitantes
- **Comportamiento** → Qué páginas ven
- **Conversiones** → Cuántos se convierten en leads
- **Tiempo real** → Actividad actual

## 🎯 Próximos pasos opcionales:

1. **Google Search Console** - Para SEO
2. **Meta Pixel** - Para publicidad en Facebook/Instagram
3. **Google Tag Manager** - Para seguimiento avanzado
4. **Hotjar** - Para ver cómo usan el sitio

## ❓ ¿Necesitas ayuda?

Si tienes problemas configurando Google Analytics, puedes:
1. Seguir la [guía oficial de Google](https://support.google.com/analytics/answer/9304153)
2. Contactarme para ayuda adicional

¡Tu sitio ya está preparado para el seguimiento completo! 🚀
