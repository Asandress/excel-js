console.log('module.js')

async function start() {
    return await Promise.resolve('working')
}

start().then(console.log)