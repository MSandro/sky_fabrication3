function getMethods(obj) {
  var result = [];
  for (var id in obj) {
    try {
      if (typeof(obj[id]) == "function") {
        result.push(id + ": " + obj[id].toString());
      }
    } catch (err) {
      result.push(id + ": inaccessible");
    }
  }
  return result;
}

onEvent("command.registry", event => {//command registry event
    const { commands: Commands, arguments: Arguments} = event;
    event.register(
        Commands.literal("emergency")
		.executes(ctx => {
            let level = ctx.source.level.asKJS()
            let position = ctx.source.position
            let player = ctx.source.entity.asKJS()
            if (player.getTags().some(value => /^last_given/.test(value))) //Check if 5 minutes of in-game time elapsed since last use
            {
                let foundtag = player.getTags().find(value => /^last_given/.test(value))
                let lasttime = parseInt(foundtag.substring(11))
                let currtime = parseInt(level.time)
                let timediff = currtime - lasttime
                if (timediff > 6000) player.getTags().remove(foundtag);
                else {
                    let waittime = 6000 - timediff
                    let seconds = Math.floor(waittime/20)%60
                    let minutes = Math.floor(waittime/1200)
                    if (minutes > 0) player.tell(`§cPlease wait §e${minutes}m ${seconds}s§c before using this command again.§r`);
                    else player.tell(`§cPlease wait §e${seconds}s§c before using this command again.§r`);
                    return 0
                }
            }
            if (!player.getTags().some(value => /^last_given/.test(value)))
            {
                if (player.getTags().contains('island'))
                {
                    player.tell("§aEmergency item given!§r");
                    if (player.getTags().contains('treeIsland')) {
                        player.give('minecraft:oak_sapling');
                    }
                    else if (player.getTags().contains('bambooIsland')) {
                        player.give('minecraft:bamboo')
                    }
                    else if (player.getTags().contains('fishingIsland')) {
                        player.give('minecraft:fishing_rod')
                    }
                    player.getTags().add(`last_given_${level.time}`)
                }
                else {
                    player.tell("§4Something went wrong! Perhaps you don't have an island...§r");
                    return 0
                }
                return 1
            }
		})
    )
    event.register(
        Commands.literal("GetPackmode")
      .executes(ctx => {
        let player = ctx.source.entity.asKJS();
        if (global.isExpertMode) {
          player.tell("Current Packmode: Expert");
        } else {
          player.tell("Current Packmode: Normal");
        }
        return 0
      })
    )
})

onEvent('server.custom_command', event => {
  if (event.id == 'normal') {
    if (!event.server.isDedicated()) {
      if (global.isExpertMode) {
        JsonIO.write(configName, normalConfig);
        event.player.tell("Switching Pack-Mode: Normal ...");
        event.player.tell("Note: game will freeze in the next few seconds");
        event.server.runCommandSilent(`reload`);
        event.player.tell("Done!");
      } else {
        event.player.tell("Pack-Mode already set to Normal");
      }
    }
  }
  if (event.id == 'expert') {
    if (!event.server.isDedicated()) {
      if (!global.isExpertMode) {
        JsonIO.write(configName, expertConfig);
        event.player.tell("Switching Pack-Mode: Expert ...");
        event.player.tell("Note: game will freeze in the next few seconds");
        event.server.runCommandSilent(`reload`);
        event.player.tell("Done!");
      } else {
        player.tell("Pack-Mode already set to Expert");
      }
    }
  }
  if (!event.player.getTags().contains('island'))
  {
  	// Add the gamestage
  	event.player.getTags().add('island');
    event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run skyislands home ${event.player.name.text}`);
		if (event.id == 'treeIsland') {
        showPackModeDialogue(event);
				event.player.getTags().add('treeIsland');
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 71 ~1 minecraft:dirt`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 72 ~1 minecraft:oak_sapling`);
				event.player.data.ftbquests.addProgress('5DB597A4B3A2F623', 1);
				generalTasks(event, 'minecraft:oak_slab', 71);
		}
		if (event.id == 'bambooIsland') {
        showPackModeDialogue(event);
				event.player.getTags().add('bambooIsland');
				event.server.runCommandSilent(`schematic load bamboo_island`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 71 ~1 minecraft:podzol`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 72 ~1 minecraft:bamboo_sapling`);
				event.player.data.ftbquests.addProgress('56B5556B44C046F2', 1);
				generalTasks(event, 'blockus:bamboo_slab', 71);
		}
		if (event.id == 'fishingIsland') {
        showPackModeDialogue(event);
				event.player.getTags().add('fishingIsland');
				event.server.runCommandSilent(`schematic load bamboo_island`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 71 ~1 twilightforest:hollow_oak_log_vertical`);
				event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 72 ~1 twilightforest:hollow_oak_log_vertical[waterlogged=true]`);
				event.server.runCommandSilent(`item replace entity ${event.player.name.text} container.6 with gofish:celestial_rod`);
				event.player.data.ftbquests.addProgress('251CD869A0906B24', 1);
				generalTasks(event, 'minecraft:oak_slab', 72);
		}
		if (event.id == 'gogIsland') {
      showPackModeDialogue(event);
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
		event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~1 70 ~1 minecraft:obsidian`);
    event.server.runCommandSilent(`execute at ${event.player.name.text} in ${event.level.dimension} run setblock ~ 71 ~ minecraft:air`);
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

function showPackModeDialogue(event) {
  if (!event.server.isDedicated()) {
    event.server.scheduleInTicks(1, c => {
      c.server.runCommandSilent(`blabber dialogue start minecraft:packmode ${event.player.name.text}`)
    });
  }
}
