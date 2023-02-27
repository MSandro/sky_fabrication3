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
