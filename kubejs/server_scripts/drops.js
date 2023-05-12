onEvent('block.break', event => {
	if(event.entity.isPlayer() && !event.player.isCreativeMode()){
		if(event.block.id == "alloy_forgery:prismarine_bricks_forge_controller" && event.entity.getMainHandItem().toString().includes("pickaxe")){
			event.server.runCommandSilent(`summon item ${event.block.x} ${event.block.y+0.7} ${event.block.z} {Item:{id:"alloy_forgery:prismarine_bricks_forge_controller",Count:1b}}`);
    }
		if(event.block.id == "chiselsandbits:bit_storage" ){
			event.server.runCommandSilent(`summon item ${event.block.x} ${event.block.y+0.7} ${event.block.z} {Item:{id:"chiselsandbits:bit_storage",Count:1b}}`);
    }
		if(event.block.id == "chiselsandbits:modification_table" ){
			event.server.runCommandSilent(`summon item ${event.block.x} ${event.block.y+0.7} ${event.block.z} {Item:{id:"chiselsandbits:modification_table",Count:1b}}`);
		}
		if(event.block.id == "chiselsandbits:chiseled_printer" ){
			event.server.runCommandSilent(`summon item ${event.block.x} ${event.block.y+0.7} ${event.block.z} {Item:{id:"chiselsandbits:chiseled_printer",Count:1b}}`);
		}
  }
});
