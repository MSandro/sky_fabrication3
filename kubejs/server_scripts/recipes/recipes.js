onEvent('recipes', (event) => {
  // Chunk Loaders
  event.remove({output: 'spatialharvesters:chunk_loader'});
  event.remove({output: 'techreborn:chunk_loader'})
  event.remove({output: 'kibe:chunk_loader'})

  // Create
  event.remove({output: 'create:andesite_alloy', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'minecraft:black_dye', type: 'create:milling'});

  // KIBE
  event.replaceInput({type: 'minecraft:crafting_shaped'}, "kibe:tank", "modern_industrialization:aluminum_tank")

  // CONFLICTS
  event.remove({output: 'betteranimalsplus:fried_egg', input: 'minecraft:egg'});
  event.remove({output: 'additionaladditions:fried_egg'});
  event.remove({output: 'blockus:legacy_stonecutter'});
  event.shapeless('blockus:legacy_stonecutter', ['minecraft:stonecutter']);

  // FabricaeExNihilo
  event.remove({output: 'indrev:nikolite_dust', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'modern_industrialization:platinum_tiny_dust', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'techreborn:yellow_garnet_gem', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'techreborn:ruby_gem', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'techreborn:sapphire_gem', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'techreborn:red_garnet_gem', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'techreborn:peridot_gem', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'fabricaeexnihilo:raw_iridium_piece', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'fabricaeexnihilo:raw_gold_piece', type: 'fabricaeexnihilo:sieve'});
  event.remove({output: 'techreborn:platinum_small_dust', type: 'fabricaeexnihilo:sieve'});

  // COMPRESS
  const DelCompressem = [
    "compress:bundle_of_sticks",
    "compress:bag_with_blaze_rods",
    "compress:bag_with_ender_pearls",
    "compress:yarn_ball"
  ]
  DelCompressem.forEach(id => event.remove({output: id}));
  // RESOURCEFUL_TOOLS
  event.remove({output: 'resourceful_tools:bamboo_sheet'});
  event.remove({output: 'resourceful_tools:ream_of_paper'});
  event.remove({output: 'resourceful_tools:powder_steel', type: 'minecraft:crafting_shaped'});

  // MI Drills
  event.remove({output: 'modern_industrialization:gold_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:gold_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:aluminum_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:aluminum_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:bronze_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:bronze_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:copper_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:copper_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:stainless_steel_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:stainless_steel_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:steel_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:steel_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:titanium_drill', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'modern_industrialization:titanium_drill_head', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'ae2:quartz_ore', type: 'modern_industrialization:quarry'})
  event.remove({output: 'indrev:nikolite_ore', type: 'modern_industrialization:quarry'})

  // MI Dusts
  event.remove({output: 'modern_industrialization:steel_dust', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'modern_industrialization:uncooked_steel_dust', type: 'minecraft:crafting_shapeless'})
  event.remove({output: 'modern_industrialization:bronze_dust', type: 'minecraft:crafting_shapeless'})
  event.remove({output: 'modern_industrialization:bronze_tiny_dust', type: 'minecraft:crafting_shapeless'})
  event.remove({output: 'modern_industrialization:raw_tungsten', type: 'minecraft:crafting_shapeless'})

  // MI Misc
  event.remove({output: 'modern_industrialization:bronze_machine_casing', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'modern_industrialization:bronze_boiler', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'modern_industrialization:forge_hammer', type: 'minecraft:crafting_shaped'});
  event.remove({type: 'modern_industrialization:forge_hammer'});

  // Alloy Forgery
  event.remove({output: 'alloy_forgery:bricks_forge_controller'})
  event.remove({output: 'alloy_forgery:deepslate_bricks_forge_controller'})
  event.remove({output: 'alloy_forgery:polished_blackstone_forge_controller'})
  event.remove({output: 'alloy_forgery:stone_bricks_forge_controller'})

  // MC
  event.remove({output: 'minecraft:blaze_rod', input: 'minecraft:blaze_powder', type: 'minecraft:crafting_shapeless'});
  event.shapeless('minecraft:blaze_rod', ['minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:blaze_powder', 'minecraft:blaze_powder']);
  event.remove({output: 'minecraft:bundle', type: 'minecraft:crafting_shaped'});

  // Tech Reborn
  event.remove({output: 'techreborn:basic_machine_frame', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'techreborn:glowstone_small_dust', type: 'minecraft:crafting_shapeless'});
  event.remove({output: 'techreborn:brass_dust', type: 'minecraft:crafting_shapeless'});
  event.remove({output: 'techreborn:refined_iron_ingot', type: 'minecraft:smelting'});
  event.remove({output: 'techreborn:refined_iron_storage_block', type: 'minecraft:smelting'});
  event.remove({output: 'techreborn:refined_iron_ingot', type: 'minecraft:blasting'});
  event.remove({output: 'techreborn:refined_iron_storage_block', type: 'minecraft:blasting'});

  // Extractinator
  event.replaceInput({}, 'the_extractinator:silt', 'fabricaeexnihilo:silt')
  event.replaceInput({}, 'the_extractinator:slush', 'fabricaeexnihilo:dust')

  // Improved Stations
  event.remove({output: 'improved-stations:furnace_slab', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'improved-stations:furnace_slab', type: 'minecraft:crafting_shapeless'});
  event.remove({output: 'improved-stations:smoker_slab', type: 'minecraft:crafting_shapeless'});
  event.remove({output: 'improved-stations:blast_furnace_slab', type: 'minecraft:crafting_shapeless'});
})
