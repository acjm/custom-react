import { createElement } from './customlib/vdom.js'

/**
 * Render the element into the DOM
 * @param {element} element 
 * @param {container} container 
 */
function render (element, container) {
    const dom = 
    element.type === 'TEXT_ELEMENT'
    ? document.createTextNode(element.props.nodeValue)
    : document.createElement(element.type)

    Object.keys(element.props).forEach(name => {
        if (name !==  'children') {
            dom[name] = element.props[name]
        }
    })
    
    element.props.children.forEach(child => {
        render(child, dom)
    })

    container.appendChild(dom)
}

window.customLib = {
    createElement,
    render
}