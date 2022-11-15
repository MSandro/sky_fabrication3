//priority: 0
//if you are an server owner, just edit line 3 in this file. Don't touch anything else!
let packMode = 'normal';
//set packMode to 'normal' or 'expert'!

// CODE
const normalConfig = {
    mode: 'normal',
    message: 'Valid modes are normal and expert.'
};
const expertConfig = {
    mode: 'expert',
    message: 'Valid modes are normal and expert.'
};

const configName = 'mode.json';

console.log(`PackMode: initializing...`);
if (!global.isServer) {
  console.log("PackMode: Client is loading mode.json")
  let config = json.read(configName);

  if (!config || !config.mode) {
      json.write(configName, normalConfig);
      console.log(`Created new ${configName}`);
      config = normalConfig;
  }
  if (config.mode == 'none') {
      json.write(configName, normalConfig);
      config.mode = normalConfig.mode;
      console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal' and 'expert'.`);
  }

  packMode = config.mode;
}
global.isExpertMode = packMode == 'expert';
console.log(`Current packmode is: ${packMode}`);

onEvent('server.custom_command', event => {
	if (!event.server.isDedicated()) {
		if (event.id == 'Expert') {
		  if (!global.isExpertMode) {
			  json.write(configName, expertConfig);
			  event.player.tell("Switching Pack-Mode: Expert ...");
        event.player.tell("Note: game will freeze in the next few seconds");
        event.server.runCommandSilent(`reload`);
			  event.player.tell("Done!");
		  } else {
			  event.player.tell("Pack-Mode already set to Expert");
		  }
		}
		if (event.id == 'Normal') {
		  if (global.isExpertMode) {
			  json.write(configName, normalConfig);
			  event.player.tell("Switching Pack-Mode: Normal ...");
        event.server.runCommandSilent(`reload`);
			  event.player.tell("Done!");
			} else {
			  event.player.tell("Pack-Mode already set to Normal");
		  }
		}
    if (event.id == 'GetPackmode') {
		  if (global.isExpertMode) {
			  event.player.tell("Expert Mode");
			} else {
			  event.player.tell("Normal Mode");
		  }
		}
	}
})
