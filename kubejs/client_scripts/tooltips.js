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
})