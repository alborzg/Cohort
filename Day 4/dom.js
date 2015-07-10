function builder(elementType, text, attributes, styles, selector) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    //selector
    var container = document.querySelector(selector);

    if(container) {
        container.appendChild(newElement);
    }

    return newElement;
}

builder("a", "link to google", {href: "http://www.google.com"}, {color: "red"}, '#foo');