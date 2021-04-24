import $ from 'jquery'

class App {
    start() {
        console.log("started")
    }
}

$(() => { (new App).start() })
