import {AppComponent} from '@core/AppComponent'

export class HeaderComponent extends AppComponent {
    static className = 'app__header'

    toHTML() {
        return '<h1>header</h1>'
    }
}
