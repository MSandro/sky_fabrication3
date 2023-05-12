// Adds all items that are in c:pickaxes, c:axes, c:shovels, c:hoes and c:shears tag to the mambience:is_tool tag for fancy tool equiping sound.

onEvent('item.tags', event => {
  const pickaxes = event.get('c:pickaxes').getObjectIds()
  const axes = event.get('c:axes').getObjectIds()
  const shovels = event.get('c:shovels').getObjectIds()
  const hoes = event.get('c:hoes').getObjectIds()
  const shears = event.get('c:shears').getObjectIds()
  pickaxes.forEach(tool => {
    event.add('mambience:is_tool', tool)
  })
  axes.forEach(tool => {
    event.add('mambience:is_tool', tool)
  })
  shovels.forEach(tool => {
    event.add('mambience:is_tool', tool)
  })
  hoes.forEach(tool => {
    event.add('mambience:is_tool', tool)
  })
  shears.forEach(tool => {
    event.add('mambience:is_tool', tool)
  })
})