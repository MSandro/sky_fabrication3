////////////////////////
/// Made by MSandro  ///
////////////////////////

onEvent('player.tick', event => {
	if (event.player.y < -65.0) {
		event.player.data.ftbquests.addProgress('5880F2C9D23E6209', 1)
		event.server.schedule(5, event.server, function (callback) {
			callback.server.runCommandSilent(`execute as ${event.player.name.string} in ${event.level.dimension} run tp ${event.player.name.string} ${event.player.x} 260 ${event.player.z}`);
			if (global.isExpertMode) {
				callback.server.runCommandSilent(`effect give ${event.player.name.string} minecraft:wither 4`);
			} else {
				callback.server.runCommandSilent(`effect give ${event.player.name.string} minecraft:hunger 10 10`);
			}
		})
	}
})
