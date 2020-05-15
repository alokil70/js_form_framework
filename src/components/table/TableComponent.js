import {AppComponent} from '@core/AppComponent'

export class TableComponent extends AppComponent {
    static className = 'app__table'
    toHTML() {
        return '<h1>table</h1>'
    }
}
