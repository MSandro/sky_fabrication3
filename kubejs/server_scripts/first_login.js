// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var firstJoinMessage = "Welcome to Sky FABRICation 3, open the Quest-Book and claim the first Quest to unlock your inventory!";

onEvent('player.logged_in', event => {
  console.log("login script started ...");
  if (!event.player.getTags().contains('first_login'))
  {
  	// Add the gamestage
  	event.player.getTags().add('first_login');

  	// Run Commands
  	console.log(`executing commands ... for ${event.player.name.text}`);
    event.server.schedule(10, event.server, function(callback) {
    	if (!event.server.isDedicated()) {
        callback.server.runCommandSilent(`blabber dialogue start minecraft:islands ${event.player.name.text}`)
      } else {
        callback.server.runCommandSilent(`blabber dialogue start minecraft:start ${event.player.name.text}`)
      }
      callback.server.runCommandSilent(`locki lock inventory ${event.player.name.text}`);
      callback.server.runCommandSilent(`locki unlock inventory.hands.main_hand ${event.player.name.text}`);
      callback.server.runCommandSilent(`clear ${event.player.name.text} patchouli:guide_book`);
  	  callback.server.runCommandSilent(`item replace entity ${event.player.name.text} container.0 with ftbquests:book`);
  	  callback.server.runCommandSilent(`item replace entity ${event.player.name.text} container.1 with air`);
    })
	  event.player.tell(firstJoinMessage);
  }
})
