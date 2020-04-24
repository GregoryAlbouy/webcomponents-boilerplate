import { AutoloadingComponent }  from '../autoloading-component.js'

// Rename class
export class MyComponent extends AutoloadingComponent
{
    // static config = {
    //     TAGNAME: 'my-component',
    //     PATH: './components/my-component/'
    // }


    // No need to configure me, I'm ready yet!
}

// Update TAGNAME and PATH values
MyComponent.config = {
    TAGNAME: 'my-component',
    PATH: './components/my-component/'
}