////////////////////////
/// Made by MSandro  ///
////////////////////////

onEvent('entity.spawned', event => {
    if (event.entity && event.entity.type == 'twilightforest:hydra') {
      event.server.runCommandSilent(`execute in ${event.level.dimension} run fill ${Math.round(event.entity.x)-30} -20 ${Math.round(event.entity.z)-30} ${Math.round(event.entity.x)+30} -20 ${Math.round(event.entity.z+30)} minecraft:obsidian`);
    }
})
