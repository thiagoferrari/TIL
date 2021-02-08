class RemoteControl {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    // METODOS DE INSTÂNCIA:
    up_volume() {
        this.volume += 2
    }

    down_volume() {
        this.volume -= 2
    }

    
    // METODOS STATIC: ONLY AVALIABLE IN object RemoteControl
    static mute_tv(val){
        this.volume = val
    }
}

const control1 = new RemoteControl('lg')

control1.up_volume()
control1.up_volume()
control1.up_volume()
control1.up_volume()
control1.up_volume()

console.log(`actual volume in object control1: ${control1.volume}`)

RemoteControl.mute_tv(-5)

console.log(`actual volume in object RemoteControl: ${RemoteControl.volume}`)