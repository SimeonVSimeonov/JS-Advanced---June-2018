function carFactory(order) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];
    let carriages = [{type: "hatchback", color: order.color}, {type: "coupe", color: order.color}];
    let wheels = Math.floor(order.wheelsize) % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    return {
        model: order.model,
        engine: engines.filter(e => e.power >= order.power)[0],
        carriage: carriages.filter(c => c.type === order.carriage)[0],
        wheels: new Array(4).fill(wheels)
    }
}

console.log(carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));