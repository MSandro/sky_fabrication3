console.log("/// loaded interactions.js");
//onEvent("item.right_click", event => {
//})

onEvent('block.right_click', event => {
  if (event.item.id.contains('paria:greenhou')) {
    event.cancel()
  }
  if (event.item.id == "twilightforest:maze_map_focus" && event.block.id == "edenring:gravilite_block") {
    event.server.schedule(5, event.server, function (callback) {
      callback.server.runCommandSilent(`clear ${event.player.name.string} twilightforest:maze_map_focus 1`);
    });
  }
})
