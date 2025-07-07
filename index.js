const x = 14
const y = 4

function random(from, to) {
    return Math.floor((Math.random() * (to - from) + from) * 100) / 100
}

const randRange = random(y, x)

console.log(randRange)

for (let i = 1; i < 64; i++) {
    console.log(random(32, 64))
}
