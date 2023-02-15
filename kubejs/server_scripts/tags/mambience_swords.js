// Adds all items that are in c:swords tag to the mambience:is_sword tag for fancy sword equiping sound.
// Excluded are Omni-Tool, Diesel Chainsaw and TR Chainsaws/
onEvent('item.tags', event => {
  const swords = event.get('c:swords').getObjectIds()
  const blacklist1 = Ingredient.of(/.*omni_tool.*/)
  const blacklist2 = Ingredient.of(/.*chainsaw.*/)
  swords.forEach(sword => {
    if (!((blacklist1.test(sword)) || (blacklist2.test(sword)))) {
      event.add('mambience:is_sword', sword)
    }
  })
})