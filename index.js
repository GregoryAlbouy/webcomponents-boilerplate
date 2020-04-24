import { loadComponents } from './modules/component-loader.js'
import { MyComponent } from './components/my-component/my-component.c.js'

// dummy app
const start = () => document.body.appendChild(new MyComponent())

loadComponents().then(start)

