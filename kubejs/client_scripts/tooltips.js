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

onEvent('item.tooltip', tooltip => {
	tooltip.add(['spectrum:onyx_shard', 'spectrum:budding_citrine', 'spectrum:budding_topaz', 'minecraft:budding_amethyst', 'spectrum:budding_moonstone'], Text.gray('Only craftable on new moon nights.'))
	tooltip.add(['iron-jetpacks:citrine_jetpack', 'iron-jetpacks:crystal_jetpack', 'iron-jetpacks:soul_jetpack'], Text.gray('LV Tier'))
	tooltip.add(['iron-jetpacks:gaia_jetpack'], Text.gray('MV Tier'))
	tooltip.add(['iron-jetpacks:aeternium_jetpack'], Text.gray('HV Tier'))
	tooltip.add(['iron-jetpacks:ultimate_jetpack', 'buildinggadgets:gadget_building', 'buildinggadgets:gadget_exchanging', 'buildinggadgets:gadget_copy_paste', 'buildinggadgets:gadget_destruction', 'kibe:angel_ring'], Text.gray('EV Tier'))
	tooltip.add(['iron-jetpacks:neutronium_jetpack',  'spatialharvesters:casing'], Text.white('Quantum Tier'))
	tooltip.add(['iron-jetpacks:creative_jetpack'], Text.gray('\u00A7c' + 'I' + '\u00A76' + 'n' + '\u00A7e' + 'f' + '\u00A7a' + 'i' + '\u00A7b' + 'n' + '\u00A73' + 'i' + '\u00A79' + 't' + '\u00A71' + 'y' + '\u00A7r' + ' Tier'))
	tooltip.addAdvanced('indrev:smelter_mk4', (item, advanced, text) => {
		if (tooltip.shift) {
			text.add(1, Text.gray('Can melt ores, ingots and some of their derivatives.'))
			text.add(2, Text.gray('Cannot melt non-metals nor tool parts.'))
		}
	})
	tooltip.addAdvanced('indrev:condenser_mk4', (item, advanced, text) => {
		if (tooltip.shift) {
			text.add(1, Text.gray('Can form ingots from molten metals.'))
		}
	})
	tooltip.add(['spectrum:spawner'], Text.white('\u00A76'+'Kind of available in Survival now'))
	tooltip.addAdvanced('modern_industrialization:configurable_chest', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, Text.gray('Press [Shift] for info'))
		} else {
			text.add(1, Text.gray('A 27-slot inventory with slot locking and adjustable stack sizes.'))
			text.add(2, Text.gray('Has an auto-extraction capability.'))
		}
	})
    
    const buggedMeshes = ["kubejs:diamond_mesh", "kubejs:netherite_mesh", "kubejs:copper_mesh", "kubejs:emerald_mesh", "kubejs:carbon_mesh"]
    
    buggedMeshes.forEach(mesh => {
        tooltip.addAdvanced(mesh, (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, Text.gray('Press [Shift] for info'))
		} else {
			text.add(1, Text.gray('Does not render correctly in Create Sifter because of a bug in the mod.'))
		}
	})
    })
    
    const customHephIngots = ["twilightforest:knightmetal_ingot", "twilightforest:fiery_ingot"]
    
    customHephIngots.forEach(ingot => {
        tooltip.addAdvanced(ingot, (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, Text.gray('Press [Shift] for info'))
		} else {
			text.add(1, Text.gray('Will not work as a repair material for Hephaestus tools.'));
            text.add(2, Text.gray('Use Repair kits for that.'))
		}
	})
    })
    
    tooltip.addAdvanced('createsifter:sifter', (item, advanced, text) => {
		if (!tooltip.shift) {
			text.add(1, Text.gray('§8Hold [§7Shift§8] for Summary§r'))
		} else {
            text.add(1, Text.gray('§8Hold [§fShift§8] for Summary§r'))
            text.add(2, Text.gray(''))
			text.add(3, Text.gray('§5Accepts §dCreate Sifter§5 and §dKubeJS§5 meshes.§r'))
			text.add(4, Text.gray('§5Extract items using §dblacklistable pipes§5, §dBrass Funnels§5 or §dSmart Chutes§5 to automate.§r'))
            text.add(5, Text.gray(''))
            text.add(6, Text.gray('§4The REI recipe view will §cnot§4 show the §cWaterlogged§4 requirement for some recipes,'))
            text.add(7, Text.gray("§4so check the §coutputs' Item Tooltips§4 to check for that requirement."))
		}
	})
    
    const needWaterlog = ['fabricaeexnihilo:sugarcane_seeds', 'minecraft:lily_pad', 'fabricaeexnihilo:sea_pickle_seeds', 'fabricaeexnihilo:kelp_seeds', 'minecraft:prismarine_shard']
    needWaterlog.forEach(item => {
        tooltip.add(item, Text.gray('§9Requires a §bWaterlogged§9 sieve to obtain.§r'))
    })

    tooltip.add('minecraft:prismarine_crystals', Text.gray('§9Better rates with a §bWaterlogged§9 sieve.§r'))
    
	function getCapacity(upgrade, drawerSlots) {
		switch (upgrade) {
			case "extended_drawers:downgrade": return '64';
			case "minecraft:air": return (1024/drawerSlots).toString();
   			case "extended_drawers:t1_upgrade": return (2*1024/drawerSlots).toString();
			case "extended_drawers:t2_upgrade": return (4*1024/drawerSlots).toString();
			case "extended_drawers:t3_upgrade": return (8*1024/drawerSlots).toString();
			case "extended_drawers:t4_upgrade": return (16*1024/drawerSlots).toString();
			case "kubejs:s1_upgrade": return (32*1024/drawerSlots).toString();
			case "kubejs:s2_upgrade": return (256*1024/drawerSlots).toString();
			case "kubejs:s3_upgrade": return (512*1024/drawerSlots).toString();
			case "kubejs:s4_upgrade": return ((2**21)*1024/drawerSlots).toString();
			case "extended_drawers:creative_upgrade": return '9223372036854775807';
   			default: return('Invalid upgrade!');
		}
	}

	const drawerUpgrades = ['extended_drawers:t1_upgrade', 'extended_drawers:t2_upgrade', 'extended_drawers:t3_upgrade', 'extended_drawers:t4_upgrade',
		'kubejs:s1_upgrade', 'kubejs:s2_upgrade', 'kubejs:s3_upgrade', 'kubejs:s4_upgrade']
	const capacities = ['2', '4', '8', '16', '32', '256', '512', '2²¹']

	tooltip.addAdvanced(["extended_drawers:single_drawer", "extended_drawers:double_drawer", "extended_drawers:quad_drawer"], (item, advanced, text) => {
		if (item.nbt?.BlockEntityTag?.items) {
			let numItems = 0
			let slots = item.nbt?.BlockEntityTag?.items.length
			item.nbt?.BlockEntityTag?.items.forEach(item => {
				if (item.item.item != "minecraft:air") numItems++;
			})
			if (numItems != 0) {
				for(let i = 0; i < numItems + 1; i++) {
				text.remove(1)
			}
			}
			
			for(let i = 0; i < slots; i++) {
				text.add(1 + 2*i, Text.white('')
				.append(Text.gray((slots == 1) ? '' : (i+1).toString()))
				.append(Text.gray((slots == 1) ? '' : ': '))
				.append((item.nbt.BlockEntityTag.items[i].item.item != "minecraft:air") ? Text.white('')
				.append(Text.translate(Item.of(item.nbt.BlockEntityTag.items[i].item.item).item.descriptionId).gray())
				.append(Text.gray(': '))
				.append(item.nbt.BlockEntityTag.items[i].amount)
				.append(Text.gray('/'))
				.append(getCapacity(item.nbt.BlockEntityTag.items[i].upgrade,slots)) : Text.gray('Empty')))
				
				text.add(2 + 2*i, Text.white('')
				.append((item.nbt.BlockEntityTag.items[i].upgrade != "minecraft:air") ? Text.translate(Item.of(item.nbt.BlockEntityTag.items[i].upgrade).item.descriptionId) : 	Text.gray('No upgrade'))
				.append(item.nbt.BlockEntityTag.items[i].locked ? Text.gray(', ').append(Text.yellow('Locked')) : Text.darkGray(''))
				.append(item.nbt.BlockEntityTag.items[i].hidden ? Text.gray(', ').append(Text.darkGray('Hidden')) : Text.darkGray(''))
				.append(item.nbt.BlockEntityTag.items[i].voiding ? Text.gray(', ').append(Text.red('Voiding')) : Text.darkGray(''))
				)
				}
		} else {
			let slots = (item == "extended_drawers:single_drawer") ? 1 : (item == "extended_drawers:double_drawer") ? 2 : 4
			text.add(1, Text.gray('Capacity: ')
			.append(Text.white((1024/slots).toString()))
			.append(Text.white(' items'))
			.append(Text.gray((item == "extended_drawers:single_drawer") ? '' : ' per slot'))
			)
		}
	})

	drawerUpgrades.forEach((upgrade, index) => {
		const capacity = capacities[index];
		tooltip.add([upgrade], Text.gray(`Drawer Capacity: ${capacity}x`))
	});

	tooltip.add(['extended_drawers:downgrade'], Text.gray('Decreases storage capacity to 64.'))

	tooltip.addAdvanced('extended_drawers:creative_upgrade', (item, advanced, text) => {
		text.add(1, Text.gray('Increases storage capacity to: §fAlmost infinite!§r'))
		if (!tooltip.shift) {
			text.add(2, Text.gray('§8Hold [§7Shift§8] for extra info.§r'))
		} else {
            text.add(2, Text.gray('§8Hold [§fShift§8] for extra info.§r'))
            text.add(3, Text.gray(''))
			text.add(4, Text.gray("Actually, it's a very large number: §f9,223,372,036,854,775,807§r"))
		}
	})

    const toContain = [
		Text.translate("enchantment.minecraft.looting").getString(),
		Text.translate("modifier.tconstruct.luck.1").getString(),
		Text.translate("modifier.tconstruct.luck.2").getString(),
		Text.translate("modifier.tconstruct.luck.3").getString()
	]

	if (Text.translate("enchantment.minecraft.looting").getString() != Text.translate("modifier.tconstruct.looting").getString()) {
		toContain.push(Text.translate("modifier.tconstruct.looting").getString())
	}
	
	onEvent('item.tooltip', event => {
		event.addAdvanced(/^tconstruct:.*/, (stack, a, text) => {
			let del_indexes = [];
			let matches = 0;
			for (let i = text.size()-1; i > 0; i--) {
				let component = text.get(i)
				let k = component?.string
				toContain.forEach(e => {
					if(k.contains(e)) {
						matches++;
						if (e == Text.translate("enchantment.minecraft.looting").getString() || e == Text.translate("modifier.tconstruct.looting").getString()) {del_indexes.push(i);}
				}
				});
			}
			if (matches > 1) {
				text.remove(del_indexes[0]);
			}
		})
	})
})