onEvent('block.tags', event => {
  const blocks = ['ae2additions:1024k_crafting_storage', 'ae2additions:4096k_crafting_storage', 'ae2additions:16384k_crafting_storage', 'ae2additions:65536k_crafting_storage', "fabricaeexnihilo:rubber_crucible", "fabricaeexnihilo:rubber_strainer", "kubejs:bone_pillars"]
  blocks.forEach(block => {
      event.add('minecraft:mineable/pickaxe', block)
  })
})