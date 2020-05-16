import {AppComponent} from '@core/AppComponent'

export class InputbarComponent extends AppComponent {
    static className = 'app__inputbar'

    constructor($root) {
        super($root, {
            name: 'Inputbar',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `<div class="info">fx</div>
            <div class="input"
                 spellcheck="false"
                 contenteditable="true"
            ></div>`
    }

    onInput(event) {
        console.log('inputbar event', event)
    }
}
