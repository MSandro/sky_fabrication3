//////////////////////////////////////////////////////////////////////////
// SF4 REI Unification Script.                                        //
//////////////////////////////////////////////////////////////////////////
const DELETED_ITEMS = ["techreborn:aluminum_storage_block", "techreborn:aluminum_dust", "techreborn:aluminum_ingot", "techreborn:aluminum_nugget",
 "techreborn:aluminum_plate", "techreborn:bauxite_dust", "indrev:bronze_block", "techreborn:bronze_storage_block", "indrev:bronze_dust",
  "techreborn:bronze_dust", "indrev:bronze_ingot", "techreborn:bronze_ingot", "indrev:bronze_nugget", "techreborn:bronze_nugget", "indrev:bronze_plate",
  "techreborn:bronze_plate", "indrev:coal_dust", "techreborn:coal_dust", "indrev:copper_dust", "create:copper_nugget", "indrev:copper_nugget",
  "techreborn:copper_nugget", "create:copper_sheet", "indrev:copper_plate", "techreborn:copper_plate",
  "indrev:diamond_dust", "techreborn:diamond_dust", "techreborn:diamond_plate", "indrev:electrum_block", "techreborn:electrum_storage_block",
  "indrev:electrum_dust", "techreborn:electrum_dust", "indrev:electrum_ingot", "techreborn:electrum_ingot", "indrev:electrum_nugget", "techreborn:electrum_nugget",
  "indrev:electrum_plate", "techreborn:electrum_plate", "techreborn:emerald_dust", "techreborn:emerald_plate", "indrev:gold_dust", "create:golden_sheet",
  "indrev:gold_plate", "techreborn:gold_plate", "techreborn:invar_storage_block", "techreborn:invar_dust", "techreborn:invar_ingot", "techreborn:invar_nugget",
  "techreborn:invar_plate", "techreborn:iridium_storage_block", "techreborn:iridium_ingot", "techreborn:iridium_nugget", "techreborn:iridium_plate",
  "techreborn:raw_iridium", "techreborn:raw_iridium_storage_block", "indrev:iron_dust", "create:iron_sheet", "indrev:iron_plate", "techreborn:iron_plate",
  "techreborn:lapis_plate", "indrev:lead_block", "techreborn:lead_storage_block", "indrev:lead_dust", "indrev:lead_ingot", "techreborn:lead_ingot",
  "indrev:lead_nugget", "techreborn:lead_nugget", "indrev:lead_plate", "techreborn:lead_plate", "indrev:raw_lead", "techreborn:raw_lead",
  "techreborn:raw_lead_storage_block", "techreborn:manganese_dust", "techreborn:nickel_storage_block", "techreborn:nickel_dust", "techreborn:nickel_ingot",
  "techreborn:nickel_nugget", "techreborn:nickel_plate", "techreborn:platinum_storage_block", "techreborn:platinum_dust", "techreborn:platinum_ingot",
  "techreborn:platinum_nugget", "techreborn:platinum_plate", "techreborn:quartz_dust", "techreborn:ruby_dust", "techreborn:silicon_plate", "bewitchment:silver_block",
  "indrev:silver_block", "techreborn:silver_storage_block", "indrev:silver_dust", "bewitchment:silver_ingot", "indrev:silver_ingot", "techreborn:silver_ingot",
  "bewitchment:silver_nugget", "indrev:silver_nugget", "techreborn:silver_nugget", "indrev:silver_plate", "techreborn:silver_plate", "indrev:raw_silver",
  "techreborn:raw_silver", "bewitchment:raw_silver_block", "techreborn:raw_silver_storage_block", "indrev:steel_block", "techreborn:steel_storage_block",
  "indrev:steel_dust", "techreborn:steel_dust", "indrev:steel_ingot", "techreborn:steel_ingot", "indrev:steel_nugget", "techreborn:steel_nugget", "indrev:steel_plate",
  "techreborn:steel_plate", "indrev:sulfur_dust", "techreborn:sulfur_dust", "indrev:tin_block", "techreborn:tin_storage_block", "indrev:tin_dust", "indrev:tin_ingot",
  "techreborn:tin_ingot", "indrev:tin_nugget", "techreborn:tin_nugget", "indrev:tin_plate", "techreborn:tin_plate", "indrev:raw_tin", "techreborn:raw_tin",
  "techreborn:raw_tin_storage_block", "techreborn:titanium_storage_block", "techreborn:titanium_dust", "techreborn:titanium_ingot", "techreborn:titanium_nugget",
  "techreborn:titanium_plate", "indrev:tungsten_block", "techreborn:tungsten_storage_block", "indrev:tungsten_dust", "indrev:tungsten_ingot",
  "techreborn:tungsten_ingot", "indrev:tungsten_nugget", "techreborn:tungsten_nugget", "indrev:tungsten_plate", "techreborn:tungsten_plate",
  "indrev:raw_tungsten", "techreborn:raw_tungsten", "techreborn:raw_tungsten_storage_block", "bewitchment:salt_block", "bewitchment:salt",
  "techreborn:carbon_plate", "create:brass_block", "createplus:brass_dust", "create:brass_ingot", "create:brass_nugget", "create:brass_sheet",
  "create:zinc_block", "createplus:zinc_dust", "create:zinc_ingot", "create:zinc_nugget", "techreborn:bauxite_ore", "techreborn:deepslate_bauxite_ore",
  "techreborn:iridium_ore", "techreborn:deepslate_iridium_ore", "indrev:lead_ore", "indrev:deepslate_lead_ore", "techreborn:lead_ore",
  "techreborn:deepslate_lead_ore", "bewitchment:silver_ore", "bewitchment:deepslate_silver_ore", "techreborn:silver_ore", "techreborn:deepslate_silver_ore",
  "indrev:tin_ore", "indrev:deepslate_tin_ore", "techreborn:tin_ore", "techreborn:deepslate_tin_ore", "indrev:tungsten_ore", "indrev:deepslate_tungsten_ore",
  "techreborn:tungsten_ore", "techreborn:deepslate_tungsten_ore", "bewitchment:salt_ore", "bewitchment:deepslate_salt_ore", "croptopia:salt_ore",
  "improved-stations:crafting_station_slab", "improved-stations:crafting_station", "improved-stations:furnace_slab", "improved-stations:smoker_slab",
  "improved-stations:blast_furnace_slab", "modern_industrialization:forge_hammer", "modern_industrialization:iron_hammer", "modern_industrialization:steel_hammer",
  "modern_industrialization:diamond_hammer", "modern_industrialization:netherite_hammer"];

const DELETED_ITEMS_CUSTOM = ["ae2things:cell_component_256k", "ae2things:item_storage_cell_256k", "ae2things:fluid_storage_cell_256k", "ae2things:portable_item_cell_256k", "ae2things:portable_item_cell_256k", "ae2things:portable_fluid_cell_256k", "ae2things:portable_fluid_cell_256k",
"alloy_forgery:bricks_forge_controller", "alloy_forgery:deepslate_bricks_forge_controller", "alloy_forgery:polished_blackstone_forge_controller", "alloy_forgery:stone_bricks_forge_controller",
"ae2things:cell_component_1024k", "ae2things:cell_component_4096k", "ae2things:portable_item_cell_1024k", "ae2things:portable_fluid_cell_1024k", "ae2things:portable_item_cell_4096k", "ae2things:portable_fluid_cell_4096k",
"ae2things:item_storage_cell_1024k", "ae2things:fluid_storage_cell_1024k", "ae2things:item_storage_cell_4096k", "ae2things:fluid_storage_cell_4096k", "kubejs:incomplete_calculation_processor", "kubejs:incomplete_logic_processor",
"kubejs:incomplete_engineering_processor"];
// v Removed IndRev chunks and fluids that are already in Tinker's/Hephaestus, to make it consistent with Tinker's, Netherite Chunks in Netherite Mesh's recipe has been replaced with Minecraft Ancient Debris //
const DELETED_ITEMS_TICPARITY = ["indrev:tin_chunk", "indrev:silver_chunk", "indrev:netherite_scrap_chunk", "indrev:netherite_scrap_dust", "indrev:lead_chunk",
 "indrev:iron_chunk", "indrev:gold_chunk", "indrev:copper_chunk", "indrev:molten_netherite_bucket", "indrev:molten_iron_bucket", "indrev:molten_gold_bucket",
 "indrev:molten_copper_bucket", "indrev:molten_silver_bucket", "indrev:molten_lead_bucket", "indrev:molten_tin_bucket", "indrev:methane_bucket", "indrev:oxygen_bucket",
 "indrev:hydrogen_bucket", "indrev:steam_bucket", "indrev:sulfuric_acid_bucket"];

const DELETED_FLUIDS = ["indrev:molten_netherite_still", "indrev:molten_iron_still", "indrev:molten_gold_still", "indrev:molten_copper_still",
 "indrev:molten_silver_still", "indrev:molten_lead_still", "indrev:molten_tin_still", "indrev:methane_still", "indrev:oxygen_still", "indrev:hydrogen_still",
  "indrev:steam_still", "indrev:sulfuric_acid_still", "tconstruct:molten_refined_glowstone", "tconstruct:molten_signalum", "tconstruct:molten_lumium",
  "tconstruct:molten_enderium", "tconstruct:molten_pewter", "tconstruct:molten_osmium", "tconstruct:molten_porcelain", "decorative_blocks:thatch",
 "tconstruct:molten_constantan", "travelersbackpack:potion_still", "tconstruct:molten_refined_obsidian"];

const DelCompressem = [
  "compress:bundle_of_sticks",
  "compress:bag_with_blaze_rods",
  "compress:bag_with_ender_pearls",
  "compress:yarn_ball"
]

const DelOldMysticalCropsItems = [
  "mysticalcrops:advance_coal_block",
  "mysticalcrops:advance_coal",
  "mysticalcrops:advance_crystal",
  "mysticalcrops:advance_essence_block",
  "mysticalcrops:advance_essence",
  "mysticalcrops:advance_watering_can",
  "mysticalcrops:basic_coal_block",
  "mysticalcrops:basic_coal",
  "mysticalcrops:basic_crystal",
  "mysticalcrops:basic_essence_block",
  "mysticalcrops:basic_essence",
  "mysticalcrops:basic_watering_can",
  "mysticalcrops:botanical_ritual_table",
  "mysticalcrops:craft_seeds_tier_1",
  "mysticalcrops:craft_seeds_tier_2",
  "mysticalcrops:craft_seeds_tier_3",
  "mysticalcrops:craft_seeds_tier_4",
  "mysticalcrops:craft_seeds_tier_5",
  "mysticalcrops:essence_fruit_tier_1",
  "mysticalcrops:essence_fruit_tier_2",
  "mysticalcrops:essence_fruit_tier_3",
  "mysticalcrops:essence_fruit_tier_4",
  "mysticalcrops:essence_fruit_tier_5",
  "mysticalcrops:essence_seeds_tier_1",
  "mysticalcrops:essence_seeds_tier_2",
  "mysticalcrops:essence_seeds_tier_3",
  "mysticalcrops:essence_seeds_tier_4",
  "mysticalcrops:essence_seeds_tier_5",
  "mysticalcrops:ultra_essence",
  "mysticalcrops:ultimate_coal_block",
  "mysticalcrops:ultimate_coal",
  "mysticalcrops:ultimate_crystal",
  "mysticalcrops:ultimate_essence_block",
  "mysticalcrops:ultimate_essence",
  "mysticalcrops:ultimate_watering_can",
  "mysticalcrops:ultra_coal_block",
  "mysticalcrops:ultra_coal",
  "mysticalcrops:ultra_crystal",
  "mysticalcrops:ultra_essence_block",
  "mysticalcrops:ultra_watering_can",
  "mysticalcrops:uncommon_essence_block",
]

onEvent("rei.hide.items", event => {
  DelCompressem.forEach(id => event.hide(id));
  DelOldMysticalCropsItems.forEach(id => event.hide(id));
  DELETED_ITEMS.forEach(id => event.hide(id));
  DELETED_ITEMS_CUSTOM.forEach(id => event.hide(id));
	DELETED_ITEMS_TICPARITY.forEach(id => event.hide(id));
	DELETED_FLUIDS.forEach(id => event.hide(Item.of('techreborn:cell', `{fluid:"${id}"}`))); // Yeeted cells of deleted and not-existent on Fabric fluids away from REI
	event.hide(Item.of('techreborn:cell', '{fluid:"tconstruct:potion"}'))
});

onEvent("rei.hide.fluids", event => {
	DELETED_FLUIDS.forEach(id => event.hide(id));
});
