import {AppComponent} from '@core/AppComponent'

export class HeaderComponent extends AppComponent {
    static className = 'app__header'

    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `<input type="text" class="input" value="Новая таблица"/>
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>`
    }
}
