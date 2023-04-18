onEvent('recipes', (event) => {
  // Chunk Loaders removals
  event.remove({output: 'spatialharvesters:chunk_loader'});
  event.remove({output: 'techreborn:chunk_loader'})
  event.remove({output: 'kibe:chunk_loader'})

  // Create removals
  event.remove({output: 'create:andesite_alloy', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'minecraft:black_dye', type: 'create:milling'});
  event.remove({output: 'minecraft:bone_meal', type: 'create:milling'});

  // KIBE - Aluminum Tanks in place of Kibe Tanks
  event.replaceInput({type: 'minecraft:crafting_shaped'}, "kibe:tank", "modern_industrialization:aluminum_tank")

  // CONFLICTS
  event.remove({output: 'betteranimalsplus:fried_egg', input: 'minecraft:egg'});
  event.remove({output: 'additionaladditions:fried_egg'});
  event.remove({output: 'blockus:legacy_stonecutter'});
  event.shapeless('blockus:legacy_stonecutter', ['minecraft:stonecutter']);

  // FabricaeExNihilo removals
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

  // COMPRESSEM removals
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
  event.remove({output: 'modern_industrialization:tungsten_dust', type: 'minecraft:crafting_shaped'})
  event.shapeless('modern_industrialization:tungsten_dust', ['modern_industrialization:tungsten_tiny_dust', 'modern_industrialization:tungsten_tiny_dust',
  'modern_industrialization:tungsten_tiny_dust', 'modern_industrialization:tungsten_tiny_dust']);
  event.remove({output: 'modern_industrialization:tungsten_tiny_dust', type: 'minecraft:crafting_shaped'})
  event.shapeless('4x modern_industrialization:tungsten_tiny_dust', ['modern_industrialization:tungsten_dust']);

  // MI Misc
  event.remove({output: 'modern_industrialization:bronze_machine_casing', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'modern_industrialization:bronze_boiler', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'modern_industrialization:forge_hammer'});
  event.remove({type: 'modern_industrialization:forge_hammer'});
  event.replaceInput({}, 'modern_industrialization:forge_hammer', 'minecraft:anvil')

  // Advanced Reborn
  event.remove({input: 'advanced_reborn:advanced_forge_hammer', type: 'minecraft:crafting_shapeless'});
  event.remove({input: 'advanced_reborn:forge_hammer', type: 'minecraft:crafting_shapeless'});

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
  event.remove({input: 'the_extractinator:silt'});
  event.remove({input: 'the_extractinator:slush'});

  // Improved Stations
  event.remove({output: 'improved-stations:furnace_slab', type: 'minecraft:crafting_shaped'});
  event.remove({output: 'improved-stations:furnace_slab', type: 'minecraft:crafting_shapeless'});
  event.remove({output: 'improved-stations:smoker_slab', type: 'minecraft:crafting_shapeless'});
  event.remove({output: 'improved-stations:blast_furnace_slab', type: 'minecraft:crafting_shapeless'});
  event.remove({output: "improved-stations:crafting_station"});
  event.remove({output: "improved-stations:crafting_station_slab"});
  event.shapeless('2x improved-stations:crafting_station_slab', ['#tconstruct:tables']);

  // Tinkers' Construct (Hephaestus)
  event.remove({id: "tconstruct:smeltery/casting/scorched/polished_from_magma"});
  event.remove({id: "tconstruct:smeltery/casting/scorched/brick_composite"});
  event.remove({id: "tconstruct:smeltery/casting/scorched/stone_from_magma"});
  event.remove({id: "tconstruct:smeltery/casting/seared/cobble/block"});
  event.remove({id: "tconstruct:smeltery/casting/seared/cobble/slab"});
  event.remove({id: "tconstruct:smeltery/casting/seared/cobble/stairs"});
  event.remove({id: "tconstruct:smeltery/casting/seared/cobble/wall"});
  event.remove({id: "tconstruct:smeltery/casting/seared/cobble/block"});
  event.remove({id: "tconstruct:smeltery/casting/seared/stone/block_from_clay"});
  event.remove({id: "tconstruct:smeltery/casting/seared/stone/slab"});
  event.remove({id: "tconstruct:smeltery/casting/seared/stone/stairs"});
  event.remove({id: "tconstruct:smeltery/casting/seared/bricks/block"});
  event.remove({id: "tconstruct:smeltery/casting/seared/bricks/slab"});
  event.remove({id: "tconstruct:smeltery/casting/seared/bricks/stairs"});
  event.remove({id: "tconstruct:smeltery/casting/seared/bricks/wall"});
  event.remove({id: "tconstruct:smeltery/casting/seared/brick_composite"});
  event.remove({id: "tconstruct:smeltery/casting/seared/grout"});
  event.remove({id: "tconstruct:smeltery/seared/seared_brick_kiln"});

  // Create Sifter removals
  let toRemove = ["dirt_strig_mesh_waterlogged", "gravel_andesite_mesh", "gravel_brass_mesh", "gravel_zinc_mesh", "sand_andesite_mesh", "sand_brass_mesh", "sand_string_mesh", "sand_zinc_mesh"];
  toRemove.forEach(item => {
    event.remove({id: `createsifter:sifting/${item}`});
  })

  // Alloy Forgery removals
  toRemove = ["aluminium_ingot_from_ores", "platinum_ingot_from_ores", "platinum_ingot_from_raw_ores"]
  toRemove.forEach(item => {
    event.remove({id: `alloy_forgery:compat/${item}`});
  })
  toRemove = ["brass_from_ores", "brass_from_raw_ores", "bronze_from_ores", "bronze_from_raw_ores", "electrum_from_ores", "electrum_from_raw_ores",
  "invar_from_ores", "invar_from_raw_ores", "steel_from_ingots", "steel_from_ores", "steel_from_raw_ores"]
  toRemove.forEach(item => {
    event.remove({id: `alloy_forgery:compat/alloys/${item}`});
  })
  // Nether Quartz Compressing
  const compressed_quartz = ["kubejs:compressed_quartz_block_1", "kubejs:compressed_quartz_block_2", "kubejs:compressed_quartz_block_3",
  "kubejs:compressed_quartz_block_4", "kubejs:compressed_quartz_block_5"];
  compressed_quartz.forEach((block, i) => {
    event.shaped(block, [
      "BBB",
      "BBB",
      "BBB"
    ], {
      B: (i == 0) ? 'minecraft:quartz_block' : compressed_quartz[i-1]
    });
    event.shapeless((i == 0) ? '9x minecraft:quartz_block' : `9x ${compressed_quartz[i-1]}`, block);
  }),

  // Remove Osseous Bricks shaped crafting recipe because it conflicts with Full Bone Block recipe.
  // The Osseous Bricks are still craftable using a Stonecutter.
  event.remove({output: "architects_palette:osseous_bricks", type: 'minecraft:crafting_shaped'});

  // CreatePlus AE2 compat recipe fix + remove random salvage from processors
  event.remove({id: "createplus:ae2/sequenced_assembly/mixing/calculation_processor"});
  event.remove({id: "createplus:ae2/sequenced_assembly/mixing/logic_processor"});
  event.remove({id: "createplus:ae2/sequenced_assembly/mixing/engineering_processor"});

  let inter = 'kubejs:incomplete_logic_processor';
  event.recipes.createSequencedAssembly(
    "ae2:logic_processor",
    "ae2:printed_silicon",[
		event.recipes.createDeploying(inter,[inter,"ae2:printed_logic_processor"]),
		event.recipes.createDeploying(inter,[inter,'minecraft:redstone']),
		event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1);

  inter = 'kubejs:incomplete_engineering_processor';
  event.recipes.createSequencedAssembly(
    "ae2:engineering_processor",
    "ae2:printed_silicon",[
		event.recipes.createDeploying(inter,[inter,"ae2:printed_engineering_processor"]),
		event.recipes.createDeploying(inter,[inter,'minecraft:redstone']),
		event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1);

  inter = 'kubejs:incomplete_calculation_processor';
  event.recipes.createSequencedAssembly(
    "ae2:calculation_processor",
    "ae2:printed_silicon",[
		event.recipes.createDeploying(inter,[inter,"ae2:printed_calculation_processor"]),
		event.recipes.createDeploying(inter,[inter,'minecraft:redstone']),
		event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter).loops(1);

  // Yeet the impossible Create Mixer recipe for the Infinity Catalyst
  event.custom({
    "type": "artis:big_bench_shapeless",
    "result": {
      "item": "kubejs:infinity_catalyst"
    },
    "ingredients": [
      {
        "item": "kubejs:diamond_lattice"
      },
      {
        "item": "kubejs:crystal_matrix_ingot"
      },
      {
        "item": "kubejs:neutronium_ingot"
      },
      {
        "item": "kubejs:ultimate_stew"
      },
      {
        "item": "kubejs:cosmic_meatballs"
      },
      {
        "item": "kubejs:fish_and_chips"
      },
      {
        "item": "kubejs:endest_pearl"
      },
      {
        "item": "kubejs:record_fragment"
      },
      {
        "item": "kubejs:iron_singularity"
      },
      {
        "item": "kubejs:golden_singularity"
      },
      {
        "item": "kubejs:lapis_singularity"
      },
      {
        "item": "kubejs:redstone_singularity"
      },
      {
        "item": "kubejs:diamond_singularity"
      },
      {
        "item": "kubejs:emerald_singularity"
      },
      {
        "item": "kubejs:nether_quartz_singularity"
      },
      {
        "item": "spectrum:germinated_jade_vine_seeds"
      },
      {
        "item": "dml-refabricated:glitch_ingot"
      }
    ]
  }
  ).id('kubejs:infinity_catalyst_manual_only')
})
