# ReactJS - Text Box Component

ReactJS based Text Box component used to specify an input field where the user can enter data.

## Table of contents

- [Browser Support](#browser-support)
- [Demo](#demo)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Available Props](#available-props)
- [Methods](#methods)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#Keywords)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 83.0 ✔                                                                                   | 77.0 ✔                                                                                      | 13.1.1 ✔                                                                                 | 83.0 ✔                                                                             | 11.9 ✔                                                                                                                       |

## Demo

[![](input.gif)](https://github.com/weblineindia/ReactJS-Text-Box/input.gif)

## Getting started

Install the npm package:

```bash
npm install react-weblineindia-text-box
#OR
yarn add react-weblineindia-text-box
```

## Usage

Use the `<react-weblineindia-text-box>` component:

```js
import React ,{ Component } from 'react';
import TextBox from 'react-weblineindia-text-box'

class Test extends Component {
    constructor(props) {
    super(props);
    this.state = {
      vData: ""
    };
    onChange(event){
      this.setState({
        vData : event.target.value
      })
    }
    render(){
    return (
      <div>
        <TextBox 
          value ={this.state.vData}
          onChange={this.onChange.bind(this)}
          placeholder ="Input here"
        />
      </div>
    )}
}
```

## Available Props

| Prop         | Type    | default | Description                                    |
| ------------ | ------- | ------- | ---------------------------------------------- |
| id           | String  |         | ID for the input                               |
| name         | String  |         | Name for the input                              |
| value        | string  |         | Value of the component                         |
| classname    | object  |         | Class to the input                             |
| placeholder  | String  |         | The input field will get this placeholder text |
| hide         | Boolean | false   | Hide component                                 |
| disabled     | Boolean | false   | Disable component                              |
| tabindex     | Number  | 0       | Tab index of the component                     |
| maxlength    | Number  | 25      | The input maxlength                            |
| regex        | RegExp  |         | The input regex                                |
| autocomplete | String  | off     | The input of autocomplelete                    |
| type         | String  | text    | Type for the input                             |
| isnumberonly | Boolean | false   | The input field will get number value          |

## Methods

| Name     | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| onFocus    | Gets triggered when the autocomplete input field receives focus. |
| onBlur     | Gets triggered when the autocomplete input field loses focus.    |
| onChange   | Gets triggered when the autocomplete results got changed.        |
| onKeypress | Gets triggered when a key gets pressed.                          |
| onKeyDown  | Gets triggered when a key gets down.                             |
| onKeyUp    | Gets triggered when a key gets up.                             |

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html)

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/ReactJS-Text-Box/blob/master/LICENSE

## Keywords

react-weblineindia-textbox, react-weblineindia-text-box, react-textbox, text-input, reactjs-input, react-input-field, react-text-input
