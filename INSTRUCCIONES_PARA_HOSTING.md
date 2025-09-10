# 🚀 INSTRUCCIONES PARA SUBIR SITIO KRYOFIX

## 📋 INFORMACIÓN DEL PROYECTO

**Sitio web:** KryoFix - Servicios de Aire Acondicionado  
**Tecnología:** Next.js 15 (React)  
**Tipo:** Sitio web estático optimizado  
**Dominio sugerido:** kryofix.com / kryofix.com.ar  

---

## 🔧 REQUISITOS TÉCNICOS

### **Hosting recomendado:**
- **Node.js 18+** (para build)
- **Hosting estático** (HTML/CSS/JS)
- **SSL/HTTPS** obligatorio
- **Compresión gzip** habilitada

### **Opciones de hosting:**
1. **Vercel** (RECOMENDADO - GRATIS)
2. **Netlify** (GRATIS)
3. **Hostinger, GoDaddy** (tradicional)

---

## 📦 ARCHIVOS INCLUIDOS

```
kryofix-com-main/
├── src/                    # Código fuente
├── public/                 # Imágenes y recursos
├── .env.local             # Variables de entorno (IMPORTANTE)
├── package.json           # Dependencias
├── next.config.js         # Configuración
└── INSTRUCCIONES_PARA_HOSTING.md
```

---

## 🚀 OPCIÓN A: VERCEL (RECOMENDADO - MÁS FÁCIL)

### **Pasos para el administrador:**

1. **Crear cuenta en Vercel:**
   - Ir a: https://vercel.com
   - Registrarse con email

2. **Subir proyecto:**
   - Clic en "New Project"
   - Arrastrar carpeta del proyecto
   - Vercel detecta automáticamente Next.js

3. **Configurar variables de entorno:**
   - En dashboard → Settings → Environment Variables
   - Agregar: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-DK5PFNPQ93`

4. **Deploy:**
   - Clic "Deploy"
   - ¡Listo en 2-3 minutos!

5. **Dominio personalizado:**
   - Settings → Domains
   - Agregar dominio comprado
   - Configurar DNS según instrucciones

---

## 🏢 OPCIÓN B: HOSTING TRADICIONAL

### **Pasos para el administrador:**

1. **Generar archivos estáticos:**
   ```bash
   cd kryofix-com-main
   npm install
   npm run build
   npm run export  # Si es necesario
   ```

2. **Subir archivos:**
   - Carpeta `out/` o `.next/` → Raíz del hosting
   - Configurar como sitio estático

3. **Configurar servidor:**
   - Habilitar compresión gzip
   - Configurar SSL/HTTPS
   - Redirecciones 404 → index.html

---

## ⚙️ CONFIGURACIONES IMPORTANTES

### **Variables de entorno (.env.local):**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-DK5PFNPQ93
```

### **Dominios de imágenes permitidos:**
- `img.icons8.com` (ya configurado en next.config.js)

### **Redirecciones necesarias:**
- `/` → Página principal
- `/contacto` → Formulario de contacto
- `/servicios` → Lista de servicios
- `/nosotros` → Información de la empresa

---

## 📧 CONFIGURACIÓN DE FORMULARIO

### **Servicio usado:** Formspree
- **Endpoint:** https://formspree.io/f/xdkogqpz
- **Email destino:** info@kryofix.com
- **Ya configurado y funcionando**

---

## 📊 GOOGLE ANALYTICS

### **ID configurado:** G-DK5PFNPQ93
- **Seguimiento de:**
  - Visitantes y páginas vistas
  - Clics en WhatsApp
  - Formularios enviados
  - Clics en email

---

## 🔍 VERIFICACIÓN POST-LANZAMIENTO

### **Checklist para verificar:**
- [ ] Sitio carga correctamente
- [ ] Todas las páginas funcionan
- [ ] Formulario envía emails
- [ ] WhatsApp abre correctamente
- [ ] Íconos se ven bien
- [ ] Responsive en móvil
- [ ] SSL/HTTPS activo
- [ ] Google Analytics registra visitas

---

## 📞 CONTACTO TÉCNICO

**Si hay problemas técnicos:**
- Revisar consola del navegador (F12)
- Verificar variables de entorno
- Comprobar configuración de dominio
- Verificar SSL/HTTPS

---

## 🎯 RESULTADO ESPERADO

**Sitio web profesional con:**
- ✅ 4 páginas optimizadas
- ✅ Formulario de contacto funcional
- ✅ Enlaces de WhatsApp operativos
- ✅ Diseño responsive
- ✅ Google Analytics configurado
- ✅ SEO optimizado
- ✅ Performance alta

**¡Listo para recibir clientes!** 🚀
