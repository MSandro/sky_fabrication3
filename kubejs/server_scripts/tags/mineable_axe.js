onEvent('block.tags', event => {
  //sieves
  const wood_types = ["oak", "birch", "spruce", "jungle", "acacia", "dark_oak", "crimson", "warped"]
  
  wood_types.forEach(wood_type => {
    event.add('minecraft:mineable/axe', `fabricaeexnihilo:${wood_type}_sieve`),
    event.add('minecraft:mineable/axe', `fabricaeexnihilo:${wood_type}_barrel`),
    event.add('minecraft:mineable/axe', `fabricaeexnihilo:${wood_type}_crucible`),
    event.add('minecraft:mineable/axe', `fabricaeexnihilo:${wood_type}_strainer`)
  }),
  event.add('minecraft:mineable/axe', 'fabricaeexnihilo:rubber_sieve'),
  event.add('minecraft:mineable/axe', 'fabricaeexnihilo:rubber_barrel')
})