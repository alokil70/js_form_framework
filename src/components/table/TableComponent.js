import {AppComponent} from '@core/AppComponent'

export class TableComponent extends AppComponent {
    static className = 'app__table'

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: ['input']
        })
    }

    toHTML() {
        return `<div class="row">
                <div class="row-info">

                </div>
                <div class="row-data">
                    <div class="column">A</div>
                    <div class="column">B</div>
                    <div class="column">C</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    1
                </div>
                <div class="row-data">
                    <div class="cell selected">A1</div>
                    <div class="cell">A1</div>
                    <div class="cell">A1</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    2
                </div>
                <div class="row-data">
                    <div class="cell selected" contenteditable="true">A1</div>
                    <div class="cell"contenteditable="true">A1</div>
                    <div class="cell" contenteditable="true">A1</div>
                </div>
            </div>`
    }
}
