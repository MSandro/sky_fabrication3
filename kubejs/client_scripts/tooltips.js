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
    
    
})