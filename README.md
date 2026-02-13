# 🎴 Generador de Cartas Aleatorias

En este proyecto relizaremos un generador dinamico de cartas aleatorias basado en eventos del ciclo de vida del navegador. Al activarse el evento.onLoad, el motor ejecuta una logica de seleccion aleatoria entre los 4 palos de cartas que existen y la numeracion (2-9) incluyendo las letras (A, J, K). Usaremos una clase base .card para estilos estructurales, mientras que la identidad de cada palo se gestiona mediante clases CSS específicas.

## 🎯 Características

- ✨ Generación aleatoria de cartas (13 valores × 4 palos)
- 🎨 Ajuste dinámico de tamaño (ancho y alto personalizables)
- ⏱️ Auto-refresco configurable cada 10 segundos
- 🃏 Animación visual del mazo de cartas apilado
- 📱 Diseño responsive y moderno
- 🎭 Animaciones suaves de reparto de cartas

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados + Google Fonts
- **Tailwind CSS** - Framework de utilidades (CDN)
- **JavaScript (Vanilla)** - Lógica de la aplicación con `window.onload`

## 📦 Estructura del Proyecto
```
generador_de_cartas/
├── index.html          # Estructura principal
├── style.css           # Estilos personalizados
├── app.js              # Lógica JavaScript
└── README.md           # Documentación
```

## 🚀 Cómo usar

1. Clona el repositorio:
```bash
   git clone https://github.com/LinaR3/generador_de_cartas.git
```

2. Navega a la carpeta:
```bash
   cd generador_de_cartas
```

3. Abre `index.html` en tu navegador favorito

4. ¡Disfruta generando cartas aleatorias! 🎉

## 📝 Funcionalidades

### Generar Carta
- **Manual:** Click en el botón "Generar Nueva Carta"
- **Automático:** Espera 10 segundos (si está activado)

### Ajustar Tamaño
- **Ancho:** 150px - 500px
- **Alto:** 250px - 700px
- Usa los controles deslizantes en el panel

### Auto-refresco
- Activa/desactiva con el switch toggle
- Contador regresivo visible (10s → 0s)
- Estado "Pausado" cuando está desactivado

## 🎨 Paleta de Colores

| Palo     | Color   | Código HEX |
|----------|---------|------------|
| ♥ Corazón | Rojo    | `#ef4444`  |
| ♦ Diamante| Rojo    | `#ef4444`  |
| ♠ Pica    | Negro   | `#1e293b`  |
| ♣ Trébol  | Negro   | `#1e293b`  |

## 🧩 Componentes JavaScript

### Variables Globales
```javascript
const values = ["A", "2", "3", ..., "K"];  // 13 valores
const suits = [♥, ♦, ♠, ♣];                 // 4 palos
```

### Funciones Principales
- `window.onload()` - Inicialización
- `generateCard()` - Genera carta aleatoria
- `updateSize()` - Ajusta dimensiones
- `startTimerLoop()` - Maneja el temporizador

## 🎓 Aprendizajes Implementados

- [x] Uso de `window.onload` para inicialización
- [x] Manipulación del DOM con JavaScript
- [x] Event Listeners para interactividad
- [x] Animaciones con Web Animations API
- [x] Diseño responsive con Tailwind CSS
- [x] Gestión de estados (auto-refresh on/off)

## 👨‍💻 Autor

**Tu Nombre**  
📧 Email: linareinap@gmail.com 
🐙 GitHub: [@LinaR3](https://github.com/LinaR3)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!