class Event {
    constructor() {
        this.callbacks = []
    }

    // 订阅
    on(callback) {
        this.callbacks.push(callback)
    }

    // 发布
    emit() {
        this.callbacks.forEach(cd => {
            cd()
        })
    }

}



let event = new Event();

event.on('')