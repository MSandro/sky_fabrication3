onEvent("block.registry", event => {
    event.create("crop_tin", "crop").displayName('Tin Seed')
        //Set the max age of the crop, and the box shape of each age
        /*.model('minecraft:block/crop')
        .texture('modern_industrialization:block/tin_block')*/
        .age(7, builder => {
            builder
                .shape(0, 0, 0, 0, 16, 2, 16)
                .shape(1, 0, 0, 0, 16, 4, 16)
                .shape(2, 0, 0, 0, 16, 6, 16)
                .shape(3, 0, 0, 0, 16, 8, 16)
                .shape(4, 0, 0, 0, 16, 10, 16)
                .shape(5, 0, 0, 0, 16, 12, 16)
                .shape(6, 0, 0, 0, 16, 14, 16)
                .shape(7, 0, 0, 0, 16, 16, 16)
        })
        //Returns if the crop can survive under the given condition
        //Used to determine if seeds can be planted, crops will decay etc.
        .survive((state, level, pos) => true)
        //When a random tick hits the crop, and the crop is about to grow
        //Normal randomTick event is disabled and warned as this overrides that to keep consistency
        //The returned value is the chance for crop to grow for this tick, calculated as chance = f/(25+f), when f > 25 chance = 1
        .growTick((tickevent) => 25)
        //If the seed will be dropped by the crop
        //Setting this will disable seed drops in loot table, and make the crop seed becomes Items.AIR (does not effect the seed item)
        //In info mods like TOP, no seed will be shown if no seed is dropped, however, auto-harvesting by resetting crop age is unaffected.
        .dropSeed(false)
        //The product of the crop, specifying multiple will result in independent drops
        //Function as how vanilla does, thus fortune will not effect this
        //Must not be an ItemStack instance, as items are not registered yet here
        .crop("modern_industrialization:tin_nugget", 1)
        .crop("kubejs:crop_tin_seed", 0.5)
        //Specify the texture of corresponding age
        .texture(0, "croparia:blocks/crop/crop_stage_0")
        .texture(1, "croparia:blocks/crop/crop_stage_1")
        .texture(2, "croparia:blocks/crop/crop_stage_2")
        .texture(3, "croparia:blocks/crop/crop_stage_3")
        .texture(4, "croparia:blocks/crop/crop_stage_4")
        .texture(5, "croparia:blocks/crop/quartz_stage_5")
        .texture(6, "croparia:blocks/crop/quartz_stage_6")
        .texture(7, "croparia:blocks/crop/quartz_stage_7")
        .item((seedItem) => {
            seedItem.texture("croparia:item/quartz_seed")
        })
})
