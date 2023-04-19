// priority: 0
onEvent('block.registry', event => {
  event.create('neutronium_block').material('metal').hardness(0.5).displayName('Neutronium Block').tagBlock('minecraft:mineable/pickaxe');
  event.create('infinity_block').material('metal').hardness(0.5).displayName('Infinity Block').tagBlock('minecraft:mineable/pickaxe');
  event.create('crystal_matrix').material('metal').hardness(0.5).displayName('Crystal Matrix').tagBlock('minecraft:mineable/pickaxe');
  event.create('unknown').material('stone').hardness(10.0).displayName('Unknown Block').unbreakable();
  event.create('end_portal_locked').material('metal').hardness(10.0).displayName('Locked End Portal').unbreakable().transparent(true).renderType('cutout').defaultCutout().notSolid();
  event.create('island_marker').material('metal').hardness(10.0).displayName('Island Marker').unbreakable().transparent(true).noCollision().noItem().transparent(true).renderType('cutout').defaultCutout().notSolid();
  // Compressed Quartz Blocks
  event.create('compressed_quartz_block_1').material('stone').hardness(0.8).displayName('Compressed Block of Quartz (x1)').tagBlock('minecraft:mineable/pickaxe');
  event.create('compressed_quartz_block_2').material('stone').hardness(0.8).displayName('Compressed Block of Quartz (x2)').tagBlock('minecraft:mineable/pickaxe');
  event.create('compressed_quartz_block_3').material('stone').hardness(0.8).displayName('Compressed Block of Quartz (x3)').tagBlock('minecraft:mineable/pickaxe');
  event.create('compressed_quartz_block_4').material('stone').hardness(0.8).displayName('Compressed Block of Quartz (x4)').tagBlock('minecraft:mineable/pickaxe');
  event.create('compressed_quartz_block_5').material('stone').hardness(0.8).displayName('Compressed Block of Quartz (x5)').tagBlock('minecraft:mineable/pickaxe');

  event.create('bone_pillars').material('bone').hardness(2.0).displayName('Bone Pillars').model('kubejs:block/bone_pillars').transparent(true).requiresTool(true).noValidSpawns(true).renderType('cutout').defaultCutout().box(14, 0, 0, 16, 16, 2, true).box(14, 0, 14, 16, 16, 16, true).box(0, 0, 14, 2, 16, 16, true).box(0, 0, 0, 2, 16, 2, true)
})

function tick(random, type, r) {
  var aboveBlock = random.level.getBlock(random.block.pos.x,random.block.pos.y+1,random.block.pos.z).getId();
  console.log(aboveBlock);
  if (Math.floor(Math.random() * r) == 0 && !aboveBlock.contains("air")) {
    random.block.set(type);
    random.server.runCommandSilent(`execute in ${random.level.dimension} run playsound minecraft:block.candle.break block @a ${random.block.pos.x} ${random.block.pos.y} ${random.block.pos.z}`);
  }
}
