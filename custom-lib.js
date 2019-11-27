import { createElement } from './customlib/vdom.js'

let nextUnittoWork = null

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
/**
 * 
 * @param {IdleDeadline} deadline 
 */
function workLoop(deadline) {
    let shouldYield = false
    while(nextUnittoWork && !shouldYield) {
        nextUnittoWork = performUnitOfWork(nextUnittoWork)
        shouldYield = deadline.timeRemaining() < 1
    }
    requestIdleCallback(workLoop)
}
/**
 *  Idlecallback
 */
requestIdleCallback(workLoop)
/**
 * Perform a task and return the next task 
 * @param {*} nextUnittoWork 
 * @return {object|null}
 */
function performUnitOfWork(nextUnittoWork) {
    console.log('perform unit of work', nextUnitOfWork)
    return null; 
}
window.customLib = {
    createElement,
    render
}