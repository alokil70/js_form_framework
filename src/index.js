import './assets/scss/index'
import {App} from '@/components/app/App'
import {HeaderComponent} from '@/components/header/HeaderComponent'
import {ToolbarComponent} from '@/components/toolbar/ToolbarComponent'
import {InputbarComponent} from '@/components/inputbar/InputbarComponent'
import {TableComponent} from '@/components/table/TableComponent'

const app = new App('#app', {
    components: [HeaderComponent, ToolbarComponent, InputbarComponent, TableComponent]
})

app.render()
