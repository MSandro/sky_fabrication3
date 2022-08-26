// priority: 0
onEvent('block.registry', event => {
  event.create('neutronium_block').material('metal').hardness(0.5).displayName('Neutronium Block').tagBlock('minecraft:mineable/pickaxe');
  event.create('infinity_block').material('metal').hardness(0.5).displayName('Infinity Block').tagBlock('minecraft:mineable/pickaxe');
  event.create('crystal_matrix').material('metal').hardness(0.5).displayName('Crystal Matrix').tagBlock('minecraft:mineable/pickaxe');
  event.create('unknown').material('stone').hardness(10.0).displayName('Unknown Block').unbreakable();
  event.create('end_portal_locked').material('metal').hardness(10.0).displayName('Locked End Portal').unbreakable().transparent(true).renderType('cutout').defaultCutout().notSolid();
  event.create('island_marker').material('metal').hardness(10.0).displayName('Island Marker').unbreakable().transparent(true).noCollision().noItem().transparent(true).renderType('cutout').defaultCutout().notSolid();
})

function tick(random, type, r) {
  var aboveBlock = random.level.getBlock(random.block.pos.x,random.block.pos.y+1,random.block.pos.z).getId();
  console.log(aboveBlock);
  if (Math.floor(Math.random() * r) == 0 && !aboveBlock.contains("air")) {
    random.block.set(type);
    random.server.runCommandSilent(`execute in ${random.level.dimension} run playsound minecraft:block.candle.break block @a ${random.block.pos.x} ${random.block.pos.y} ${random.block.pos.z}`);
  }
}
