import React from 'react'
import ReactDom from 'react-dom'
import IsdcAccessibility from './main.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Accessibility {
    constructor(domId, options) {
        this._domId = domId;
        this._urlAccessibility = options.urlAccessibility
    }

    set urlAccessibility(value) {
        this._urlAccessibility = value;
    }
    view() {
        ReactDom.render(
            <MuiThemeProvider>
                <IsdcAccessibility
                    urlAccessibility={this._urlAccessibility}
                />
            </MuiThemeProvider>, document.getElementById(this._domId)
        );
    }
}

module.exports = Accessibility;