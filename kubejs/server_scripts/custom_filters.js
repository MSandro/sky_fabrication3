let $ItemFiltersAPI = java('dev.latvian.mods.itemfilters.api.ItemFiltersAPI')

$ItemFiltersAPI.registerCustomFilter('deep_drawer', item => {
    let isDeepDrawer = false;
    if (item == Item.of("extended_drawers:single_drawer")) {
        if (item.nbt) {
            if (item.nbt.BlockEntityTag) {
                if (item.nbt.BlockEntityTag.items[0].amount >= 2147483648) {
                    isDeepDrawer = true;
                }
            }
        }
    }
  return isDeepDrawer;
})