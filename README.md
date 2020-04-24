# Web components boilerplate

Ready-to-use components in vanilla JavaScript.

## About

Web components allow to create **natively** custom tags having their own template, style and behaviour.
The ability to customize, encapsulate in the Shadow DOM and reuse them makes it a powerful feature.  
But it comes with two drawbacks: 
* Every component require the same repetitive configuration
* HTML, CSS & JavaScript are mixed in the same js file

The present boilerplate is a pattern I created that intent to solve these issues. Basically it consists of a pre-configured class `AutoloadingComponent` that loads automatically the separate HTML & CSS files, that components only need to extend — instead of `HTMLElement` — to be ready to use. All components are defined and their template pre-loaded in `component-loader.js`

## Create a new component

* In `/components`, copy the provided placeholder and replace all occurences of `my-component` with the actual component tag name
* In `*.c.js` rename the class and update the configured `TAGNAME` and `PATH` accordingly
* In `/modules/component-loader.js` import the `*.c.js` file and add the class to the `component` array

That's it, the component is ready to use! You can now fill HTML and CSS files and see the result.


## Details

### component directory

The component directory **must** contain both the HTML and the CSS files, which must be named `[tag-name].c.[html|css]`
The class representing the component must have a `config` static property describing the component's tag name and directory path:
```javascript
export class XXX extends AutoloadingComponent
{
    // ...
}
XXX.config = {
    TAGNAME: 'component-tagname'
    PATH: './path/to/component/directory'
}
```
Warning: the `PATH` is relative to the *entry point* of the app, **not** the current file!

### `autoloading-component.js`

This class is designed as an abstract class and shouln't be directly instanciated.  
It provides its derived classes with a loadTemplate() function that loads separate html and css files. The process is optimized by fetching *parallely* and *once* the files before storing their content as a string. loadTemplate() is best called before appending the component but should work anyway. The constructor is pre-filled with template/shadowRoot routine, making its derivates ready-to-use as soon as the custom element is defined.

### `component-loader.js`

This file has two purposes:
* Define the components
* Preaload their template in parallel

It returns a promise that allow to start an app once all templates are loaded, as showed in the `index.js` file.

### `index.js`

Entry point of a dummy application.