import {AppComponent} from '@core/AppComponent'

export class ToolbarComponent extends AppComponent {
    static className = 'app__toolbar'

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['input']
        })
    }

    toHTML() {
        return `<div class="button">
                <i class="material-icons">format_bold</i>
            </div>
            <div class="button">
                <i class="material-icons">format_italic</i>
            </div>
            <div class="button">
                <i class="material-icons">format_underlined</i>
            </div>
            <div class="button">
                <i class="material-icons">format_align_left</i>
            </div>
            <div class="button">
                <i class="material-icons">format_align_center</i>
            </div>
            <div class="button">
                <i class="material-icons">format_align_right</i>
            </div>`
    }
}
