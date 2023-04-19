// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

let BONE_TIER;

onEvent('item.registry.tool_tiers', event => {
  BONE_TIER = event.add('bone', tier => {
    tier.uses = 96
    tier.speed = 5.0
    tier.attackDamageBonus = 1.0
    tier.level = 1
    tier.enchantmentValue = 8
    tier.repairIngredient = 'minecraft:bone'
  })
})

onEvent('item.registry', event => {
  event.create('skyfabrication_logo').displayName('Sky FABRICation');
  //event.create('sky_island_activator').displayName('Sky-Island Activator');

  event.create('info_mark').displayName('Info Mark');
  event.create('crystal_matrix_ingot', 'basic').displayName('Crystal Matrix Ingot');
  event.create('diamond_lattice', 'basic').displayName('Diamond Lattice');
  event.create('diamond_singularity', 'basic').displayName('Diamond Singularity');
  event.create('emerald_singularity', 'basic').displayName('Emerald Singularity');
  event.create('golden_singularity', 'basic').displayName('Golden Singularity');
  event.create('iron_singularity', 'basic').displayName('Iron Singularity');
  event.create('lapis_singularity', 'basic').displayName('Lapis Singularity');
  event.create('nether_quartz_singularity', 'basic').displayName('Nether Quartz Singularity');
  event.create('redstone_singularity', 'basic').displayName('Redstone Singularity');
  event.create('endest_pearl', 'basic').displayName('Endest Pearl');
  event.create('infinity_catalyst', 'basic').displayName('Infinity Catalyst');
  event.create('infinity_ingot', 'basic').displayName('Infinity Ingot');
  event.create('neutronium_ingot', 'basic').displayName('Neutronium Ingot');
  event.create('neutronium_nugget', 'basic').displayName('Neutronium Nugget');
  event.create('pileof_neutrons', 'basic').displayName('Pile of Neutrons');
  event.create('record_fragment', 'basic').displayName('Record Fragment');
  
  // Additional Purified Ores
  event.create('nickel_purified_ore', 'basic').displayName('Purified Nickel Ore');
  event.create('zinc_purified_ore', 'basic').displayName('Purified Zinc Ore');
  event.create('cobalt_purified_ore', 'basic').displayName('Purified Cobalt Ore');
  event.create('uranium_purified_ore', 'basic').displayName('Purified Uranium Ore');
  
  // Create Sifter-compatible Meshes
  
  event.create('diamond_mesh','createsifter:mesh').displayName('Diamond Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1","createsifter:item/diamond_mesh").texture("0","minecraft:block/oak_planks");
  event.create('emerald_mesh','createsifter:mesh').displayName('Emerald Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1","createsifter:item/emerald_mesh").texture("0","minecraft:block/oak_planks");
  event.create('netherite_mesh','createsifter:mesh').displayName('Netherite Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1","createsifter:item/netherite_mesh").texture("0","minecraft:block/oak_planks");
  event.create('copper_mesh','createsifter:mesh').displayName('Copper Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1","createsifter:item/copper_mesh").texture("0","minecraft:block/oak_planks");
  event.create('carbon_mesh','createsifter:mesh').displayName('Carbon Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1","createsifter:item/carbon_mesh").texture("0","minecraft:block/oak_planks");

  event.create('incomplete_logic_processor').displayName('Incomplete Logic Processor').texture("ae2:item/printed_silicon");
  event.create('incomplete_engineering_processor').displayName('Incomplete Engineering Processor').texture("ae2:item/printed_silicon");
  event.create('incomplete_calculation_processor').displayName('Incomplete Calculation Processor').texture("ae2:item/printed_silicon");

  //event.create('bone_knife', "hoe").displayName('Bone Knife').tier("wood").unstackable().attackDamageBaseline(2).speedBaseline(-1.8).maxDamage(96);
  // Food
  event.create('fish_and_chips').displayName('Ultimate Fish and Chips').food(foodBuilder => {foodBuilder.hunger(15).saturation(15.0).alwaysEdible()});
  event.create('cosmic_meatballs').displayName('Cosmic Meatballs').food(food => {
  food.hunger(20).saturation(20)
  .effect("minecraft:strength", 30000, 0, 1.0)});
  event.create('ultimate_stew').displayName('Ultimate Stew').food(food => {
  food.hunger(20).saturation(20)
  .effect("minecraft:regeneration", 3000, 0, 1.0)
  .effect("minecraft:resistance", 3000, 0, 1.0)});
})

// This custom knife wouldn't be possible without the help of Reveter#1305, thank you!

const $DeferredRegister = java('dev.architectury.registry.registries.DeferredRegister')
const $Tiers = java('net.minecraft.world.item.Tiers')
const $Item = java('net.minecraft.world.item.Item')
const $CreativeModeTab = java('net.minecraft.world.item.CreativeModeTab')
const $Registry = java('net.minecraft.core.Registry')
const $KnifeItem = java('com.nhoryzon.mc.farmersdelight.item.KnifeItem')

let ITEMS = $DeferredRegister.create('kubejs', $Registry.ITEM_REGISTRY)
ITEMS['register(net.minecraft.class_2960,java.util.function.Supplier)']('kubejs:bone_knife', () => {
  return new $KnifeItem($Tiers.STONE)
})
ITEMS.register()
