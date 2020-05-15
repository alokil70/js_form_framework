import {AppComponent} from '@core/AppComponent'

export class ToolbarComponent extends AppComponent {
    static className = 'app__toolbar'
    toHTML() {
        return '<h1>toolbar</h1>'
    }
}
