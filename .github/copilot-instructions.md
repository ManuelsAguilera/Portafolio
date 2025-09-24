# Copilot Instructions for Portafolio Repository

## Repository Overview

This is a **personal portfolio website** for Manuel Aguilera, built as a modern Angular 20.3.0 single-page application. The repository contains approximately 50 source files with a typical Angular project structure using TypeScript, TailwindCSS v4, and PostCSS for styling.

**Technologies:**
- **Frontend Framework:** Angular 20.3.0 with TypeScript 5.9.2
- **Styling:** TailwindCSS v4.1.13 with custom theme and PostCSS
- **Testing:** Jasmine with Karma test runner
- **Build System:** Angular CLI 20.3.2 with esbuild
- **Package Manager:** npm 10.8.2
- **Runtime:** Node.js 20.19.5

**Repository Size:** Small (~50 files), quick to build and navigate.

## Build and Development Instructions

### Prerequisites
Always run `npm install` before any other commands to ensure dependencies are installed.

### Development Server
```bash
npm start
# or
ng serve
```
- Starts development server on http://localhost:4200/
- Enables hot reload and file watching
- Build time: ~3-4 seconds
- **Note:** Requires internet access initially for font loading

### Building
```bash
# Development build (RECOMMENDED for local development)
npm run build -- --configuration=development

# Production build (may fail without internet access)
npm run build
```

**Critical Build Issues:**
- **Production builds fail** without internet access due to Google Fonts inlining in `src/styles.css:1`
- **Workaround:** Always use development configuration for offline builds
- Development builds output to `dist/Portafolio/` (~1.4MB)
- Build artifacts should be ignored in commits

### Testing
```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

**Known Test Issues:**
- **All tests currently fail** with Zone.js error (NG0908)
- Tests require additional Zone.js configuration not present in current setup
- 10 test suites exist but are not functional
- **Status:** Testing infrastructure needs Zone.js setup to work properly

### Other Commands
```bash
npm run watch     # Continuous development build
npm run deploy    # Deploys to maguilera.site via GitHub Pages
npm run ng        # Direct Angular CLI access
```

### Validation Steps
1. After code changes, always run development build: `npm run build -- --configuration=development`
2. Start dev server to visually verify changes: `npm start`
3. Check browser console for runtime errors
4. Test responsive design (mobile/desktop views in header component)

## Project Architecture and Layout

### Directory Structure
```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── header/         # Main navigation header
│   │   ├── building/       # "Under construction" component
│   │   └── target-hero/    # Hero section component
│   ├── pages/              # Route-specific page components
│   │   ├── home/           # Landing page
│   │   ├── proyectos/      # Projects page (uses building component)
│   │   ├── hobbies/        # Hobbies page (uses building component)
│   │   ├── contactame/     # Contact page
│   │   └── habilidades/    # Skills page
│   ├── app.ts              # Root component
│   ├── app.routes.ts       # Route configuration
│   ├── app.config.ts       # Application configuration
│   └── app.html/css        # Root component templates
├── styles.css              # Global styles with TailwindCSS
├── main.ts                 # Application bootstrap
└── index.html              # Main HTML template
```

### Configuration Files
- `angular.json` - Angular CLI configuration
- `package.json` - Dependencies and scripts  
- `tsconfig.json` - TypeScript configuration with strict mode
- `.postcssrc.json` - PostCSS configuration for TailwindCSS
- `.editorconfig` - Code formatting rules

### Key Architectural Elements

**Routing:** Defined in `src/app/app.routes.ts`
- `/` → Home component
- `/proyectos` → Proyectos (Projects) 
- `/hobbies` → Hobbies
- `/habilidades` → Habilidades (Skills)
- `/contactame` → Contactame (Contact)
- `/**` → Redirects to home

**Components Structure:**
- **Standalone components** (no NgModule usage)
- **Signal-based state** (modern Angular approach)
- **Responsive design** with mobile/desktop variants in header
- **TailwindCSS** with custom color palette (jagged-ice, ming, fern, fernier)

**Styling System:**
- Custom TailwindCSS theme in `src/styles.css`
- Custom animations: gliding, hero-text, bullet
- Dark/light theme support with CSS custom properties
- External font: Libre Baskerville from Google Fonts

### Development Notes

**Template Naming:** Components use `.html` files (not inline templates)
- Example: `header.ts` uses `templateUrl: './header.html'`

**TODO Items Found:**
- `src/app/components/header/header.html:55` - Mobile menu compatibility improvement needed

**External Dependencies:**
- Social media links to GitHub and LinkedIn (hardcoded)
- Custom domain deployment to maguilera.site
- Google Fonts dependency causes production build issues

### Common Development Tasks

**Adding New Pages:**
1. Create component in `src/app/pages/[name]/`
2. Add route in `src/app/app.routes.ts`
3. Import component in routes file
4. Add navigation link in header component if needed

**Styling Changes:**
- Modify `src/styles.css` for global styles
- Use TailwindCSS classes in component templates
- Custom colors available: jagged-ice, ming, fern, fernier variants

**Component Development:**
- All components are standalone (use `imports` array)
- Use Angular signals for reactive state
- Follow existing file naming: `[name].ts`, `[name].html`, `[name].css`

## Validation and CI/CD

**No automated CI/CD** pipelines are configured (no `.github/workflows/`).

**Manual Validation Steps:**
1. Run development build to check compilation
2. Start development server and test all routes
3. Check responsive design in browser dev tools
4. Verify no console errors
5. Test social media links and external references

**Pre-commit Checklist:**
- Development build succeeds
- No TypeScript compilation errors
- Application runs without console errors
- Responsive design works on mobile and desktop

---

## Instrucciones para Code Reviews y Explicaciones

**Idioma:** Todas las explicaciones de código, reviews y documentación deben estar en **español**.

### Formato para Reviews de Código

Cuando expliques cambios o hagas reviews, sigue esta estructura:

**1. Resumen del Cambio**
- Breve descripción de qué se modificó
- Razón del cambio (bug fix, nueva funcionalidad, mejora, etc.)

**2. Archivos Afectados**
- Lista los archivos modificados
- Menciona el tipo de cambio en cada archivo

**3. Detalles Técnicos**
- Explica la implementación técnica
- Menciona patrones de Angular utilizados
- Describe cambios en estilos/CSS si aplica
- Indica si se añadieron nuevas dependencias

**4. Impacto y Consideraciones**
- Efectos en la UI/UX
- Compatibilidad con responsive design
- Performance implications
- Posibles breaking changes

**5. Pasos de Validación**
- Cómo probar los cambios
- Comandos específicos a ejecutar
- Qué verificar en el navegador

### Ejemplos de Explicaciones

**Para nuevos componentes:**
```
Se creó el componente [NombreComponente] para [propósito]. Este componente utiliza 
signals de Angular y está configurado como standalone. Se añadió la ruta 
correspondiente en app.routes.ts y se actualizó la navegación en el header.
```

**Para cambios de estilos:**
```
Se modificaron los estilos en [archivo] para mejorar [aspecto]. Los cambios incluyen 
nuevas clases de TailwindCSS y custom properties para el tema dark/light. 
Es compatible con dispositivos móviles y desktop.
```

**Para fixes de bugs:**
```
Se solucionó el problema de [descripción del bug] que ocurría cuando [condición]. 
La solución implementa [método utilizado] y es retrocompatible con el código existente.
```

### Términos Técnicos en Español

Usa estos términos consistentemente:
- **Componente** (no "component")
- **Enrutamiento** (no "routing") 
- **Plantilla** (no "template")
- **Servicio** (no "service")
- **Directiva** (no "directive")
- **Pipe/Tubería** (no "pipe")
- **Señal** (no "signal")
- **Responsivo** (no "responsive")
- **Compilación** (no "build")
- **Despliegue** (no "deploy")

### Nivel de Detalle

**Para cambios menores:** Explicación concisa de 2-3 líneas
**Para cambios importantes:** Explicación detallada con contexto y justificación
**Para nuevas funcionalidades:** Documentación completa incluyendo ejemplos de uso

**Siempre incluye:**
- Por qué se hizo el cambio
- Cómo implementarlo/probarlo
- Qué esperar como resultado

---

**Trust these instructions** - they are comprehensive and tested. Only search the codebase if you encounter information gaps or errors in these instructions.
