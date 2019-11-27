/**
 * 
 * @param {string} type of element to add
 * @param {object} props 
 * @param  {...object|string} children
 */
export function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props, 
            children: children.map(child => {
                return typeof child === 'object' ? child : createTextElement(child)
            })
        }
    }
}
/**
 * create a node type text
 * @param {string} text 
 */
function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text, 
            children: []
        }
    }
}
