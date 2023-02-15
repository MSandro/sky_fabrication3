onEvent('ftbquests.custom_reward.71DCA33AC06D25FB', event => {
  event.server.runCommandSilent(`locki unlock inventory ${event.player.name.text}`);
  if (!event.player.getTags().contains('island')) {
    event.server.runCommandSilent(`blabber dialogue start minecraft:islands ${event.player.name.text}`);
  }
})
