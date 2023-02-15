// Adds all bows to the mambience:is_bow tag for fancy bow equiping sound.
onEvent('item.tags', event => {
  const bows = ['botania:livingwood_bow', 'botania:crystal_bow', 'dragonloot:dragon_bow', 'gateofbabylon:stone_bow', 'gateofbabylon:iron_bow', 'gateofbabylon:golden_bow', 'gateofbabylon:diamond_bow', 'gateofbabylon:netherite_bow', 'spectrum:bedrock_bow', 'twilightforest:triple_bow', 'twilightforest:ice_bow', 'twilightforest:ender_bow', 'twilightforest:seeker_bow']
  bows.forEach(bow => {
      event.add('mambience:is_bow', bow)
  })
})