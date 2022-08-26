onEvent('server.custom_command', event => {
  if (!event.player.getTags().contains('island'))
  {
  	// Add the gamestage
  	event.player.getTags().add('island');
    event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run skyislands home ${event.player.name.text}`);
		if (event.id == 'treeIsland') {
				event.player.getTags().add('treeIsland');
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 71 ~1 minecraft:dirt`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 72 ~1 minecraft:oak_sapling`);
				event.player.data.ftbquests.addProgress('5DB597A4B3A2F623', 1);
				generalTasks(event, 'minecraft:oak_slab', 71);
			}
		if (event.id == 'bambooIsland') {
				event.player.getTags().add('bambooIsland');
				event.server.runCommandSilent(`schematic load bamboo_island`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 71 ~1 minecraft:podzol`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 72 ~1 minecraft:bamboo_sapling`);
				event.player.data.ftbquests.addProgress('56B5556B44C046F2', 1);
				generalTasks(event, 'blockus:bamboo_slab', 71);
			}
		if (event.id == 'fishingIsland') {
				event.player.getTags().add('fishingIsland');
				event.server.runCommandSilent(`schematic load bamboo_island`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 71 ~1 twilightforest:hollow_oak_log_vertical`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 72 ~1 twilightforest:hollow_oak_log_vertical[waterlogged=true]`);
				event.server.runCommandSilent(`item replace entity ${event.player.name.text} container.8 with minecraft:string 4`);
				event.server.runCommandSilent(`item replace entity ${event.player.name.text} container.7 with travelersbackpack:standard`);
				event.server.runCommandSilent(`item replace entity ${event.player.name.text} container.6 with gofish:celestial_rod`);
				event.player.data.ftbquests.addProgress('251CD869A0906B24', 1);
				generalTasks(event, 'minecraft:oak_slab', 72);
		}
		if (event.id == 'gogIsland') {
      event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run skyislands home ${event.player.name.text}`);
      let d = { //this defines the position the strucututre will spawn at.
          x: Math.floor(event.player.x)+1,
          y: 70, //this is constant, but it doesnt have to be
          z: Math.floor(event.player.z)+1,
          id: event.player.id
      }
      event.server.scheduleInTicks(1, c => { //make sure the chunks are loaded before trying to set the block
          c.server.runCommandSilent(`setblock ${d.x} ${d.y - 5} ${d.z} minecraft:structure_block{ignoreEntities:1b,powered:0b,seed:0L,posX:0,mode:"LOAD",posY:1,sizeX:12,posZ:0,integrity:1.0f,showair:0b,name:"botania:island",id:"minecraft:structure_block",sizeY:10,sizeZ:12,showboundingbox:0b}`)
          c.server.runCommandSilent(`setblock ${d.x} ${d.y - 6} ${d.z} minecraft:redstone_block`)
          c.server.runCommandSilent(`fill ${d.x} ${d.y} ${d.z} ${d.x} ${d.y - 6} ${d.z} air`)//get rid of the structure and redstone block

          c.server.runCommandSilent(`tp ${d.id} ${d.x+2} 74 ${d.z+2}`) //these numbers should be half the size of the structure, so the player and spawn ends up in the middle. will need tweaking for your structure.
          event.server.runCommandSilent(`origin gui ${event.player.name.text}`);
          c.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run spawnpoint ${d.id}`);
      })
    }
	}
})

function generalTasks(event, slab, slabY) {
    event.server.runCommandSilent(`origin gui ${event.player.name.text}`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 70 ~1 minecraft:obsidian`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 ${slabY} ~2 ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 ${slabY} ~ ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~2 ${slabY} ~1 ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~ ${slabY} ~1 ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~ ${slabY} ~ ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~2 ${slabY} ~2 ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~ ${slabY} ~2 ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~2 ${slabY} ~ ${slab}[type=bottom]`);
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run tp ${event.player.name.text} ~ 74 ~`);
    event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run spawnpoint ${event.player.name.text}`);
}
