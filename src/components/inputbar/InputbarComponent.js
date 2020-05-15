import {AppComponent} from '@core/AppComponent'

export class InputbarComponent extends AppComponent {
    static className = 'app__inputbar'
    toHTML() {
        return '<h1>inputbar</h1>'
    }
}
