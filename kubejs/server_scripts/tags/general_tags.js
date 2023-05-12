////////////////////////
/// Made by MSandro ///
////////////////////////


onEvent('tags.items', event => {

  event.removeAllTagsFrom('betterend:thallasium_ingot')

  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')
  // Adds tags to some Modern Industrialization metals, so they can be used as a Tinker's material.
  // If it isn't a material, it makes it meltable!
  event.add('c:ingots/steel', 'modern_industrialization:steel_ingot')
  event.add('c:storage_blocks/steel', 'modern_industrialization:steel_block')
  event.add('c:plates/steel', 'modern_industrialization:steel_plate')
  event.add('c:dusts/steel', 'modern_industrialization:steel_dust')
  event.add('c:nuggets/steel', 'modern_industrialization:steel_nugget')
  event.add('c:rods/steel', 'modern_industrialization:steel_rod')
  
  event.add('c:ingots/electrum', 'modern_industrialization:electrum_ingot')
  event.add('c:storage_blocks/electrum', 'modern_industrialization:electrum_block')
  event.add('c:plates/electrum', 'modern_industrialization:electrum_plate')
  event.add('c:dusts/electrum', 'modern_industrialization:electrum_dust')
  event.add('c:nuggets/electrum', 'modern_industrialization:electrum_nugget')
  
  event.add('c:ingots/silver', 'modern_industrialization:silver_ingot')
  event.add('c:storage_blocks/silver', 'modern_industrialization:silver_block')
  event.add('c:plates/silver', 'modern_industrialization:silver_plate')
  event.add('c:dusts/silver', 'modern_industrialization:silver_dust')
  event.add('c:nuggets/silver', 'modern_industrialization:silver_nugget')
  event.add('c:raw_materials/silver', 'modern_industrialization:raw_silver')
  event.add('c:storage_blocks/raw_silver', 'modern_industrialization:raw_silver_block')
  
  event.add('c:ingots/lead', 'modern_industrialization:lead_ingot')
  event.add('c:storage_blocks/lead', 'modern_industrialization:lead_block')
  event.add('c:plates/lead', 'modern_industrialization:lead_plate')
  event.add('c:dusts/lead', 'modern_industrialization:lead_dust')
  event.add('c:nuggets/lead', 'modern_industrialization:lead_nugget')
  event.add('c:raw_materials/lead', 'modern_industrialization:raw_lead')
  event.add('c:storage_blocks/raw_lead', 'modern_industrialization:raw_lead_block')
  event.add('c:ores/lead', 'modern_industrialization:lead_ore')
  event.add('c:ores/lead', 'modern_industrialization:deepslate_lead_ore')
  
  event.add('c:ingots/invar', 'modern_industrialization:invar_ingot')
  event.add('c:storage_blocks/invar', 'modern_industrialization:invar_block')
  event.add('c:plates/invar', 'modern_industrialization:invar_plate')
  event.add('c:dusts/invar', 'modern_industrialization:invar_dust')
  event.add('c:nuggets/invar', 'modern_industrialization:invar_nugget')
  event.add('c:rods/invar', 'modern_industrialization:invar_rod')
  
  event.add('c:ingots/bronze', 'modern_industrialization:bronze_ingot')
  event.add('c:storage_blocks/bronze', 'modern_industrialization:bronze_block')
  event.add('c:plates/bronze', 'modern_industrialization:bronze_plate')
  event.add('c:dusts/bronze', 'modern_industrialization:bronze_dust')
  event.add('c:nuggets/bronze', 'modern_industrialization:bronze_nugget')
  event.add('c:rods/bronze', 'modern_industrialization:bronze_rod')
  
  event.add('c:ingots/platinum', 'modern_industrialization:platinum_ingot')
  event.add('c:storage_blocks/platinum', 'modern_industrialization:platinum_block')
  event.add('c:plates/platinum', 'modern_industrialization:platinum_plate')
  event.add('c:dusts/platinum', 'modern_industrialization:platinum_dust')
  event.add('c:nuggets/platinum', 'modern_industrialization:platinum_nugget')
  // Not adding ores intentionally, should be processed using EBFs and Vacuum Freezers.
  
  event.add('c:ingots/tungsten', 'modern_industrialization:tungsten_ingot')
  event.add('c:storage_blocks/tungsten', 'modern_industrialization:tungsten_block')
  event.add('c:plates/tungsten', 'modern_industrialization:tungsten_plate')
  event.add('c:dusts/tungsten', 'modern_industrialization:tungsten_dust')
  event.add('c:nuggets/tungsten', 'modern_industrialization:tungsten_nugget')
  event.add('c:raw_materials/tungsten', 'modern_industrialization:raw_tungsten')
  event.add('c:storage_blocks/raw_tungsten', 'modern_industrialization:raw_tungsten_block')
  
  event.add('c:ingots/uranium', 'modern_industrialization:uranium_ingot')
  event.add('c:storage_blocks/uranium', 'modern_industrialization:uranium_block')
  event.add('c:dusts/uranium', 'modern_industrialization:uranium_dust')
  event.add('c:nuggets/uranium', 'modern_industrialization:uranium_nugget')
  event.add('c:raw_materials/uranium', 'modern_industrialization:raw_uranium')
  event.add('c:storage_blocks/raw_uranium', 'modern_industrialization:raw_uranium_block')
  event.add('c:ores/uranium', 'modern_industrialization:uranium_ore')
  event.add('c:ores/uranium', 'modern_industrialization:deepslate_uranium_ore')
  
  event.add('c:ingots/aluminum', 'modern_industrialization:aluminum_ingot')
  event.add('c:storage_blocks/aluminum', 'modern_industrialization:aluminum_block')
  event.add('c:plates/aluminum', 'modern_industrialization:aluminum_plate')
  event.add('c:dusts/aluminum', 'modern_industrialization:aluminum_dust')
  event.add('c:nuggets/aluminum', 'modern_industrialization:aluminum_nugget')
  event.add('c:rods/aluminum', 'modern_industrialization:aluminum_rod')
  
  event.add('c:ingots/nickel', 'modern_industrialization:nickel_ingot')
  event.add('c:storage_blocks/nickel', 'modern_industrialization:nickel_block')
  event.add('c:plates/nickel', 'modern_industrialization:nickel_plate')
  event.add('c:dusts/nickel', 'modern_industrialization:nickel_dust')
  event.add('c:nuggets/nickel', 'modern_industrialization:nickel_nugget')
  event.add('c:raw_materials/nickel', 'modern_industrialization:raw_nickel')
  event.add('c:storage_blocks/raw_nickel', 'modern_industrialization:raw_nickel_block')
  event.add('c:ores/nickel', 'modern_industrialization:nickel_ore')
  event.add('c:ores/nickel', 'modern_industrialization:deepslate_nickel_ore')
  
  event.add('c:ingots/tin', 'modern_industrialization:tin_ingot')
  event.add('c:storage_blocks/tin', 'modern_industrialization:tin_block')
  event.add('c:plates/tin', 'modern_industrialization:tin_plate')
  event.add('c:dusts/tin', 'modern_industrialization:tin_dust')
  event.add('c:nuggets/tin', 'modern_industrialization:tin_nugget')
  event.add('c:rods/tin', 'modern_industrialization:tin_rod')
  event.add('c:raw_materials/tin', 'modern_industrialization:raw_tin')
  event.add('c:storage_blocks/raw_tin', 'modern_industrialization:raw_tin_block')
  event.add('c:ores/tin', 'modern_industrialization:tin_ore')
  event.add('c:ores/tin', 'modern_industrialization:deepslate_tin_ore')
  
  event.add('c:dusts/copper', 'modern_industrialization:copper_dust')
  event.add('c:dusts/iron', 'modern_industrialization:iron_dust')
  event.add('c:dusts/gold', 'modern_industrialization:gold_dust')
  event.add('c:dusts/diamond', 'modern_industrialization:diamond_dust')
  event.add('c:dusts/emerald', 'modern_industrialization:emerald_dust')
  
  // Makes Tinker's Tools, well, valid tools for ex. Inventorio.
  event.add('fabric:pickaxes', 'tconstruct:pickaxe')
  event.add('fabric:pickaxes', 'tconstruct:sledge_hammer')
  event.add('fabric:pickaxes', 'tconstruct:vein_hammer')
  event.add('fabric:axes', 'tconstruct:mattock')
  event.add('fabric:shovels', 'tconstruct:mattock')
  event.add('fabric:hoes', 'tconstruct:mattock')
  event.add('fabric:pickaxes', 'tconstruct:pickadze')
  event.add('fabric:shovels', 'tconstruct:pickadze')
  event.add('fabric:shovels', 'tconstruct:excavator')
  event.add('fabric:axes', 'tconstruct:hand_axe')
  event.add('fabric:axes', 'tconstruct:broad_axe')
  event.add('fabric:shears', 'tconstruct:kama')
  event.add('fabric:hoes', 'tconstruct:scythe')
  event.add('fabric:shears', 'tconstruct:scythe')
  event.add('fabric:swords', 'tconstruct:dagger')
  event.add('fabric:swords', 'tconstruct:sword')
  event.add('fabric:swords', 'tconstruct:cleaver')
  
  event.add('farmersdelight:straw_harvesters', 'kubejs:bone_knife')
  event.add('c:tools/knives', 'kubejs:bone_knife')

  const barrels = ["betternether:stalagnate_barrel", "betternether:willow_barrel", "betternether:rubeus_barrel", "betternether:nether_reed_barrel",
    "betternether:wart_barrel", "betternether:mushroom_fir_barrel", "betternether:nether_mushroom_barrel", "betternether:anchor_tree_barrel",
    "betternether:nether_sakura_barrel", "betterend:mossy_glowshroom_barrel", "betterend:pythadendron_barrel", "betterend:end_lotus_barrel",
    "betterend:lacugrove_barrel", "betterend:dragon_tree_barrel", "betterend:tenanea_barrel", "betterend:helix_tree_barrel", "betterend:umbrella_tree_barrel",
    "betterend:jellyshroom_barrel", "betterend:lucernia_barrel"]
  barrels.forEach(barrel => {
    event.add('charm:barrels', barrel)
  })

  // Diesel superheats Blaze Burners
  event.add('create:blaze_burner_fuel/special', ['modern_industrialization:bucket_diesel', 'modern_industrialization:bucket_boosted_diesel', 'techreborn:diesel_bucket', 'techreborn:nitro_diesel_bucket'])
  
  // Because for some reason, if the file that would override Spectrum's tags controlling "Not available in Survival Yet" tooltips, it would remove ALL of those tooltips, here are removals of this tag for Moonstone-related stuff. And a spawner too, since it is craftable due to Conjuring integration.
  
  event.remove("spectrum:coming_soon_tooltip", ['spectrum:moonstone_block', 'spectrum:budding_moonstone', 'spectrum:small_moonstone_bud', 'spectrum:medium_moonstone_bud', 'spectrum:large_moonstone_bud', 'spectrum:moonstone_cluster', 'spectrum:moonstone_powder', 'spectrum:moonstone_shard', 'spectrum:moonstone_sugar_stick', 'spectrum:moonstone_storage_block', 'spectrum:spawner'])
});

// Tags required for Knightmetal and Fiery melting recipes to function.
onEvent('tags.fluids', event => {
  event.add('c:molten_fiery', 'twilightforest:molten_fiery')
  event.add('c:fiery_essence', 'twilightforest:fiery_essence')
  event.add('c:molten_knightmetal', 'twilightforest:molten_knightmetal')
  event.add('c:plantoil',  'createaddition:seed_oil')
});