/**
 * This file has two purposes:
 * - Define the components
 * - Preaload their template in parallel
 * 
 * It returns a promise that allow to start an app once all templates are loaded
 */

// import ALL components here
import { MyComponent } from '../components/my-component/my-component.c.js'

export const loadComponents = () => {
    // list ALL components here
    const components = [
        MyComponent,
    ]
    
    const defineComponent = (component) => customElements.define(component.config.TAGNAME, component)

    const preloadTemplate = (component) => component.loadTemplate()

    components.forEach(defineComponent)

    // preloads the components in parallel
    return Promise.all(components.map(preloadTemplate))
}
