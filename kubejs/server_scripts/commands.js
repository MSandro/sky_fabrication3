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
        Commands.literal("enableExpertMode")
      .executes(ctx => {
        let level = ctx.source.level.asKJS()
        let player = ctx.source.entity.asKJS();
        if (!level.isDedicated()) {
          if (!global.isExpertMode) {
            json.write(configName, expertConfig);
            player.tell("Switching Pack-Mode: Expert ...");
            player.tell("Note: game will freeze in the next few seconds");
            server.runCommandSilent(`reload`);
            player.tell("Done!");
          } else {
            player.tell("Pack-Mode already set to Expert");
          }
        } else {
          player.tell("COmmand not available!");
        }
      })
    )
    event.register(
        Commands.literal("enableNormalMode")
      .executes(ctx => {
        let level = ctx.source.level.asKJS()
        let player = ctx.source.entity.asKJS();
        if (!level.isDedicated()) {
          if (global.isExpertMode) {
            json.write(configName, normalConfig);
            player.tell("Switching Pack-Mode: Normal ...");
            server.runCommandSilent(`reload`);
            player.tell("Done!");
          } else {
            player.tell("Pack-Mode already set to Normal");
          }
        } else {
          player.tell("COmmand not available!");
        }
      })
    )
    event.register(
        Commands.literal("GetPackmode")
      .executes(ctx => {
        let player = ctx.source.entity.asKJS();
        if (global.isExpertMode) {
          player.tell("Expert Mode");
        } else {
          player.tell("Normal Mode");
        }
      })
    )
})
