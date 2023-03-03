
function REP(e, input, output) {
    e.replaceInput({type: "minecraft:crafting_shaped"}, input, output);
    e.replaceInput({type: "minecraft:crafting_shapeless"}, input, output);
    e.replaceOutput({type: "minecraft:crafting_shaped"}, input, output);
    e.replaceOutput({type: "minecraft:crafting_shapeless"}, input, output);
}

let inspect = (obj) => {
   if (typeof obj !== 'undefined') {
     let resultArray = []
     resultArray.push(`Inspecting: ${obj}`)

     let propertiesArray = []
     let functionsArray = []
     Object.keys(obj).forEach(key => {
       let keyType = typeof obj[key]
       if (keyType === 'string' || keyType === 'number' || keyType === 'object') {
         propertiesArray.push(`  ${key}: ${obj[key]}`)
       } else if (keyType === 'function' && !key.startsWith('func_')) {
         functionsArray.push(`  ${key}: unknown`)
       } else if (keyType === 'undefined') {
         propertiesArray.push(`  ${key}: undefined`)
       }
     })

     propertiesArray.sort()
     propertiesArray.unshift('=== Properties ===')
     functionsArray.sort()
     functionsArray.unshift('=== Functions ===')

     resultArray.push(propertiesArray.join('\n'))
     resultArray.push(functionsArray.join('\n'))
     console.info(resultArray.join('\n'))
   } else console.info('inspected object is undefined')
}
