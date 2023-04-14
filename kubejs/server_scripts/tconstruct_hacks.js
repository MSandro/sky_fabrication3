//@ts-check
function getMethods(obj) {
    var result = [];
    for (var id in obj) {
      try {
        if (typeof(obj[id]) == "function") {
          result.push(id + ": " + obj[id].toString() + '\n');
        }
      } catch (err) {
        result.push(id + ": inaccessible");
      }
    }
    return result;
  }

//var counter = 0;

onEvent("player.tick", event => {
  //if (counter == 0) {
    if (event.player.mainHandItem.nbt) { //Can't do cleanly because else it errors.
      if (event.player.mainHandItem.nbt.tic_modifiers) { // If a tool has tic_modifiers tag, aka if it's a Tinker's tool
        let looting = 0;
        event.player.mainHandItem.nbt.tic_modifiers.forEach(element => {
          if (element.name == "tconstruct:looting" || element.name == "tconstruct:luck") {
            looting += element.level
          };
        });
        let nbt_map = NBT.accessTagMap(event.player.mainHandItem.nbt)
        if (!event.player.mainHandItem.nbt.Enchantments && looting != 0) {
          let compound = NBT.compoundTag();
          compound.put('id', NBT.stringTag("minecraft:looting"));
          compound.put('lvl', NBT.shortTag(looting));
          let enchList = NBT.listTag();
          enchList.push(compound);
          nbt_map.put('Enchantments', enchList);
        } else {
          if (!looting) {
            event.player.mainHandItem.nbt.remove('Enchantments');
          } else if (event.player.mainHandItem.nbt.Enchantments[0].lvl != looting) {
            event.player.mainHandItem.nbt.Enchantments[0].lvl = looting;
          }
        }

        //event.player.tell(nbt_map);
        //counter++;
        // Add NBT tags: HideFlags = 1, Enchantments:Enchantments:[{id:"minecraft:looting",lvl:looting}]
      }
    }
  })