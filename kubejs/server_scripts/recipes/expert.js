//priority: 10
onEvent('recipes', event => {
  if (global.isExpertMode) {

    //FURNACES
    event.remove({output: 'fabric-furnaces:iron_furnace', type: 'minecraft:crafting_shaped'});
  	event.shaped('fabric-furnaces:iron_furnace', [
        "BIB",
        "BFB",
        "BIB"
  	], {
  	  F: 'fabric-furnaces:fabric_furnace',
  	  B: 'minecraft:iron_block',
  	  I: 'minecraft:iron_ingot'
  	});
    event.remove({output: 'fabric-furnaces:gold_furnace', type: 'minecraft:crafting_shaped'});
  	event.shaped('fabric-furnaces:gold_furnace', [
        "BCB",
        "BFB",
        "CCC"
  	], {
  	  F: 'fabric-furnaces:iron_furnace',
  	  B: 'minecraft:gold_block',
  	  C: 'compress:compressed_gold_block_1'
  	});
    event.remove({output: 'fabric-furnaces:diamond_furnace', type: 'minecraft:crafting_shaped'});
  	event.shaped('fabric-furnaces:diamond_furnace', [
        "BCB",
        "BFB",
        "BCB"
  	], {
  	  F: 'fabric-furnaces:gold_furnace',
  	  B: 'minecraft:diamond_block',
  	  C: 'compress:compressed_diamond_block_1'
  	});
    event.remove({output: 'fabric-furnaces:obsidian_furnace', type: 'minecraft:crafting_shaped'});
  	event.shaped('fabric-furnaces:obsidian_furnace', [
        "BCB",
        "CFC",
        "BCB"
  	], {
  	  F: 'fabric-furnaces:diamond_furnace',
  	  B: 'minecraft:crying_obsidian',
  	  C: 'kibe:wither_proof_block'
  	});
    event.remove({output: 'fabric-furnaces:nether_furnace', type: 'minecraft:crafting_shaped'});
  	event.shaped('fabric-furnaces:nether_furnace', [
        "NSN",
        "BFB",
        "XCX"
  	], {
  	  F: 'fabric-furnaces:obsidian_furnace',
      X: 'minecraft:nether_brick',
  	  N: 'minecraft:nether_star',
  	  C: 'minecraft:magma_block',
      S: 'minecraft:soul_sand',
      B: 'blockus:blaze_lantern'
  	});
    event.remove({output: 'fabric-furnaces:emerald_furnace', type: 'minecraft:crafting_shaped'});
    event.shaped('fabric-furnaces:emerald_furnace', [
        "BCB",
        "BFB",
        "BCB"
    ], {
      F: 'fabric-furnaces:nether_furnace',
      B: 'minecraft:emerald_block',
      C: 'compress:compressed_emerald_block_1'
    });
    event.remove({output: 'fabric-furnaces:end_furnace', type: 'minecraft:crafting_shaped'});
    event.shaped('fabric-furnaces:end_furnace', [
        "PEP",
        "QFQ",
        "RCR"
    ], {
      F: 'fabric-furnaces:emerald_furnace',
      P: 'kubejs:endest_pearl',
      E: 'minecraft:dragon_egg',
      Q: 'endrem:wither_eye',
      C: 'things:hardening_catalyst',
      R: 'compress:compressed_end_stone_1',
    });
    event.remove({output: 'fabric-furnaces:ethereal_furnace', type: 'minecraft:crafting_shaped'});
    event.shaped('fabric-furnaces:ethereal_furnace', [
        "EHE",
        "QFQ",
        "RCR"
    ], {
      F: 'fabric-furnaces:end_furnace',
      H: 'minecraft:dragon_head',
      E: 'betterend:eternal_crystal',
      Q: 'modern_industrialization:iridium_machine_casing_pipe',
      C: 'blockus:nether_stars_block',
      R: 'charm:tube_sea_lantern'
    });

    // KIBE
    event.remove({output: 'kibe:entangled_tank', type: 'minecraft:crafting_shaped'});
    event.shaped('kibe:entangled_tank', [
        "EHE",
        "QFQ",
        "ECE"
    ], {
      F: 'modern_industrialization:aluminum_tank',
      H: 'ae2:quantum_entangled_singularity',
      E: 'minecraft:blaze_rod',
      Q: 'botania:third_eye',
      C: 'modern_industrialization:kanthal_block'
    });
    event.remove({output: 'kibe:entangled_chest', type: 'minecraft:crafting_shaped'});
    event.shaped('kibe:entangled_chest', [
        "EHE",
        "QFQ",
        "ECE"
    ], {
      F: 'minecraft:ender_chest',
      H: 'ae2:quantum_entangled_singularity',
      E: 'minecraft:blaze_rod',
      Q: 'botania:third_eye',
      C: 'modern_industrialization:kanthal_block'
    });

    //blockus
    event.remove({output: 'blockus:legacy_nether_reactor_core', type: 'minecraft:crafting_shaped'});
    event.shaped('blockus:legacy_nether_reactor_core', [
        "DID",
        "DBD",
        "DID"
    ], {
      D: "minecraft:diamond",
      I: "modern_industrialization:steel_block",
      B: "botania:blaze_block"
    });

    //KIBE
    event.replaceInput({output: 'kibe:golden_lasso'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'kibe:golden_lasso'}, 'minecraft:gold_nugget', 'minecraft:gold_block')
    event.replaceInput({output: 'kibe:cursed_lasso'}, 'kibe:cursed_droplets', 'minecraft:wither_skeleton_skull')
    event.replaceInput({output: 'kibe:diamond_lasso'}, 'minecraft:diamond', 'minecraft:diamond_block')

    //ExpandedStorage
    event.replaceInput({output: 'expandedstorage:old_iron_chest'}, 'minecraft:iron_ingot', 'minecraft:iron_block')
    event.replaceInput({output: 'expandedstorage:iron_chest'}, 'minecraft:iron_ingot', 'minecraft:iron_block')
    event.replaceInput({output: 'expandedstorage:iron_barrel'}, 'minecraft:iron_ingot', 'minecraft:iron_block')
    event.replaceInput({output: 'expandedstorage:wood_to_iron_conversion_kit'}, 'minecraft:iron_ingot', 'minecraft:iron_block')
    event.replaceInput({output: 'expandedstorage:old_gold_chest'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'expandedstorage:gold_chest'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'expandedstorage:gold_barrel'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'expandedstorage:wood_to_gold_conversion_kit'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'expandedstorage:iron_to_gold_conversion_kit'}, 'minecraft:gold_ingot', 'minecraft:gold_block')
    event.replaceInput({output: 'expandedstorage:old_diamond_chest'}, 'minecraft:diamond', 'minecraft:diamond_block')
    event.replaceInput({output: 'expandedstorage:diamond_chest'}, 'minecraft:diamond', 'minecraft:diamond_block')
    event.replaceInput({output: 'expandedstorage:diamond_barrel'}, 'minecraft:diamond', 'minecraft:diamond_block')
    event.replaceInput({output: 'expandedstorage:wood_to_diamond_conversion_kit'}, 'minecraft:diamond', 'minecraft:diamond_block')
    event.replaceInput({output: 'expandedstorage:gold_to_diamond_conversion_kit'}, 'minecraft:diamond', 'minecraft:diamond_block')
    event.replaceInput({output: 'expandedstorage:netherite_chest'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    event.replaceInput({output: 'expandedstorage:old_netherite_chest'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    event.replaceInput({output: 'expandedstorage:netherite_barrel'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    event.replaceInput({output: 'expandedstorage:wood_to_netherite_conversion_kit'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    event.replaceInput({output: 'expandedstorage:obsidian_to_netherite_conversion_kit'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    event.replaceInput({output: 'expandedstorage:diamond_to_netherite_conversion_kit'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    event.replaceInput({output: 'expandedstorage:gold_to_netherite_conversion_kit'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')
    event.replaceInput({output: 'expandedstorage:iron_to_netherite_conversion_kit'}, 'minecraft:netherite_ingot', 'minecraft:netherite_block')

    //huge thanks to Itplays#1148
    //improved stations
    event.remove({output: "improved-stations:crafting_table_slab"});
    event.stonecutting('improved-stations:crafting_table_slab', '#c:workbenches');
    //plate recipe
    event.remove({output: "minecraft:cauldren"})
    event.remove({output: "minecraft:iron_boots"})
    event.remove({output: "minecraft:iron_chestplate"})
    event.remove({output: "minecraft:iron_leggings"})
    event.remove({output: "minecraft:iron_helmet"})
    event.remove({output: "minecraft:iron_sword"})
    event.remove({output: "minecraft:iron_axe"})
    event.remove({output: "minecraft:iron_pickaxe"})
    event.remove({output: "minecraft:iron_shovel"})
    event.remove({output: "minecraft:iron_hoe"})

    event.shaped("minecraft:cauldron", [
        ["modern_industrialization:iron_plate",  null	,"modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate",  null	,"modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate","modern_industrialization:iron_plate"],
      ]);
    event.shaped("minecraft:iron_sword", [
        [null,"modern_industrialization:iron_plate"	,null],
        [null,"modern_industrialization:iron_plate",null],
        [null,"minecraft:stick",null],
     ]);
    event.shaped("minecraft:iron_axe", [
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate",null],
        ["modern_industrialization:iron_plate","minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:iron_pickaxe", [
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate","modern_industrialization:iron_plate"],
        [null,"minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:iron_shovel", [
        [null,"modern_industrialization:iron_plate",null],
        [null,"minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:iron_hoe", [
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate",null],
        [null,"minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:iron_boots", [
        [null,null,null],
        ["modern_industrialization:iron_plate",null,"modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate",null,"modern_industrialization:iron_plate"],
      ]);
    event.shaped("minecraft:iron_leggings", [
        ["modern_industrialization:iron_plate",null,"modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate",null,"modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate","modern_industrialization:iron_plate"],
      ]);
    event.shaped("minecraft:iron_chestplate", [
        ["modern_industrialization:iron_plate",null,"modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate","modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate","modern_industrialization:iron_plate"],
      ]);
    event.shaped("minecraft:iron_helmet", [
        ["modern_industrialization:iron_plate","modern_industrialization:iron_plate","modern_industrialization:iron_plate"],
        ["modern_industrialization:iron_plate",null,"modern_industrialization:iron_plate"],
        [null,null,null],
      ]);

    //diamond equipment WIP (maybe diamond plates)
    event.remove({output: "minecraft:diamond_boots"})
    event.remove({output: "minecraft:diamond_leggings"})
    event.remove({output: "minecraft:diamond_chestplate"})
    event.remove({output: "minecraft:diamond_helmet"})
    event.remove({output: "minecraft:diamond_sword"})
    event.remove({output: "minecraft:diamond_axe"})
    event.remove({output: "minecraft:diamond_pickaxe"})
    event.remove({output: "minecraft:diamond_shovel"})
    event.remove({output: "minecraft:diamond_hoe"})

    event.shaped("minecraft:diamond_boots", [
        [null,null,null],
        ["modern_industrialization:diamond_plate",null,"modern_industrialization:diamond_plate"],
        ["modern_industrialization:diamond_plate",null,"modern_industrialization:diamond_plate"],
      ]);

    event.shaped("minecraft:diamond_leggings", [
        ["modern_industrialization:diamond_plate","modern_industrialization:diamond_plate","modern_industrialization:diamond_plate"],
        ["modern_industrialization:diamond_plate",null,"modern_industrialization:diamond_plate"],
        ["modern_industrialization:diamond_plate",null,"modern_industrialization:diamond_plate"],
      ]);
    event.shaped("minecraft:diamond_chestplate", [
        ["modern_industrialization:diamond_plate",null,"modern_industrialization:diamond_plate"],
        ["modern_industrialization:diamond_plate","modern_industrialization:diamond_plate","modern_industrialization:diamond_plate"],
        ["modern_industrialization:diamond_plate","modern_industrialization:diamond_plate","modern_industrialization:diamond_plate"],
      ]);
    event.shaped("minecraft:diamond_helmet", [
        ["modern_industrialization:diamond_plate","modern_industrialization:diamond_plate","modern_industrialization:diamond_plate"],
        ["modern_industrialization:diamond_plate",null,"modern_industrialization:diamond_plate"],
        [null,null,null],
      ]);

    event.shaped("minecraft:diamond_sword", [
        [null,"modern_industrialization:diamond_plate",null],
        [null,"modern_industrialization:diamond_plate",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:diamond_axe", [
        ["modern_industrialization:diamond_plate","modern_industrialization:diamond_plate",null],
        ["modern_industrialization:diamond_plate","minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:diamond_pickaxe", [
        ["modern_industrialization:diamond_plate","modern_industrialization:diamond_plate","modern_industrialization:diamond_plate"],
        [null,"minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:diamond_shovel", [
        [null,"modern_industrialization:diamond_plate",null],
        [null,"minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);
    event.shaped("minecraft:diamond_hoe", [
        ["modern_industrialization:diamond_plate","modern_industrialization:diamond_plate",null],
        [null,"minecraft:stick",null],
        [null,"minecraft:stick",null],
      ]);

    event.remove({output: "#kibe:sleeping_bed"})

    //MODERN INDUSTRIALIZATION
    event.remove({output: "minecraft:charcoal"})
     event.custom({
     "type" : "modern_industrialization:coke_oven",
      "eu" : 2,
      "duration" : 600,
      "item_inputs" : {
        "item" : "#minecraft:logs_that_burn",
        "amount" : 16
      },
      "fluid_outputs" : {
          "fluid" : "modern_industrialization:creosote",
          "amount" : 500,
          "probability" : 0.1
      },
      "item_outputs" : {
        "item" : "minecraft:charcoal",
        "amount" : 16
        }
    });

    //wands
    event.remove({output:"wands:stone_wand"});
    event.remove({output:"wands:iron_wand"});

    //earlygame
    event.remove({output: "minecraft:cobblestone"})
    event.remove({output: "minecraft:andesite"})
    event.remove({output: "minecraft:basalt"})
    event.remove({output: "minecraft:blackstone"})
    event.remove({output: "minecraft:calcite"})
    event.remove({output: "minecraft:deepslate"})
    event.remove({output: "minecraft:diorite"})
    event.remove({output: "minecraft:granite"})
    event.remove({output: "minecraft:tuff"})

    event.shaped("minecraft:cobblestone", [
       ["fabricaeexnihilo:stone_pebble","fabricaeexnihilo:stone_pebble","fabricaeexnihilo:stone_pebble"],
       ["fabricaeexnihilo:stone_pebble","fabricaeexnihilo:stone_pebble","fabricaeexnihilo:stone_pebble"],
       ["fabricaeexnihilo:stone_pebble","fabricaeexnihilo:stone_pebble","fabricaeexnihilo:stone_pebble"],
       ]);
    event.shaped("minecraft:andesite", [
       ["fabricaeexnihilo:andesite_pebble","fabricaeexnihilo:andesite_pebble","fabricaeexnihilo:andesite_pebble"],
       ["fabricaeexnihilo:andesite_pebble","fabricaeexnihilo:andesite_pebble","fabricaeexnihilo:andesite_pebble"],
       ["fabricaeexnihilo:andesite_pebble","fabricaeexnihilo:andesite_pebble","fabricaeexnihilo:andesite_pebble"],
       ]);
    event.shaped("minecraft:basalt", [
       ["fabricaeexnihilo:basalt_pebble","fabricaeexnihilo:basalt_pebble","fabricaeexnihilo:basalt_pebble"],
       ["fabricaeexnihilo:basalt_pebble","fabricaeexnihilo:basalt_pebble","fabricaeexnihilo:basalt_pebble"],
       ["fabricaeexnihilo:basalt_pebble","fabricaeexnihilo:basalt_pebble","fabricaeexnihilo:basalt_pebble"],
       ]);
    event.shaped("minecraft:blackstone", [
       ["fabricaeexnihilo:blackstone_pebble","fabricaeexnihilo:blackstone_pebble","fabricaeexnihilo:blackstone_pebble"],
       ["fabricaeexnihilo:blackstone_pebble","fabricaeexnihilo:blackstone_pebble","fabricaeexnihilo:blackstone_pebble"],
       ["fabricaeexnihilo:blackstone_pebble","fabricaeexnihilo:blackstone_pebble","fabricaeexnihilo:blackstone_pebble"],
       ]);
    event.shaped("minecraft:calcite", [
       ["fabricaeexnihilo:calcite_pebble","fabricaeexnihilo:calcite_pebble","fabricaeexnihilo:calcite_pebble"],
       ["fabricaeexnihilo:calcite_pebble","fabricaeexnihilo:calcite_pebble","fabricaeexnihilo:calcite_pebble"],
       ["fabricaeexnihilo:calcite_pebble","fabricaeexnihilo:calcite_pebble","fabricaeexnihilo:calcite_pebble"],
       ]);
    event.shaped("minecraft:deepslate", [
       ["fabricaeexnihilo:deepslate_pebble","fabricaeexnihilo:deepslate_pebble","fabricaeexnihilo:deepslate_pebble"],
       ["fabricaeexnihilo:deepslate_pebble","fabricaeexnihilo:deepslate_pebble","fabricaeexnihilo:deepslate_pebble"],
       ["fabricaeexnihilo:deepslate_pebble","fabricaeexnihilo:deepslate_pebble","fabricaeexnihilo:deepslate_pebble"],
       ]);
    event.shaped("minecraft:diorite", [
       ["fabricaeexnihilo:diorite_pebble","fabricaeexnihilo:diorite_pebble","fabricaeexnihilo:diorite_pebble"],
       ["fabricaeexnihilo:diorite_pebble","fabricaeexnihilo:diorite_pebble","fabricaeexnihilo:diorite_pebble"],
       ["fabricaeexnihilo:diorite_pebble","fabricaeexnihilo:diorite_pebble","fabricaeexnihilo:diorite_pebble"],
       ]);
    event.shaped("minecraft:granite", [
       ["fabricaeexnihilo:granite_pebble","fabricaeexnihilo:granite_pebble","fabricaeexnihilo:granite_pebble"],
       ["fabricaeexnihilo:granite_pebble","fabricaeexnihilo:granite_pebble","fabricaeexnihilo:granite_pebble"],
       ["fabricaeexnihilo:granite_pebble","fabricaeexnihilo:granite_pebble","fabricaeexnihilo:granite_pebble"],
       ]);
    event.shaped("minecraft:tuff", [
       ["fabricaeexnihilo:tuff_pebble","fabricaeexnihilo:tuff_pebble","fabricaeexnihilo:tuff_pebble"],
       ["fabricaeexnihilo:tuff_pebble","fabricaeexnihilo:tuff_pebble","fabricaeexnihilo:tuff_pebble"],
       ["fabricaeexnihilo:tuff_pebble","fabricaeexnihilo:tuff_pebble","fabricaeexnihilo:tuff_pebble"],
       ]);

    event.remove({output:"fabriccaeexnihilo:porcelain"});
    event.shaped("fabricaeexnihilo:porcelain", [
       ["minecraft:bone_meal","minecraft:bone_meal","minecraft:bone_meal"],
       ["minecraft:bone_meal","minecraft:clay","minecraft:bone_meal"],
       ["minecraft:bone_meal","minecraft:bone_meal","minecraft:bone_meal"],
    ]);
    event.remove({output: "minecraft:flint_and_steel"})
    event.shapeless("minecraft:flint_and_steel", [
    	    "modern_industrialization:steel_ingot",
            "minecraft:flint",
            ]);
    //event.remove({output: "minecraft:coarse_dirt"});
    //event.remove({output: "techreborn:brass_ingot", type:"minecraft:smelting"});  (funktioniert irgendwie nicht)
    //event.remove({output:"create:goggles"});
    event.remove({output: "fabricaeexnihilo:blaze_doll"})
  } else {
    event.replaceInput({output: 'techreborn:basic_tank_unit'}, 'techreborn:basic_storage_unit', 'modern_industrialization:bronze_tank')
    event.replaceInput({output: 'spatialharvesters:casing'}, 'modern_industrialization:quantum_upgrade', 'modern_industrialization:quantum_circuit')
  }
});
