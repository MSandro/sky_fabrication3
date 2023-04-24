const ONE_ITEM = 200
// Add burn time to TR and MI Diesels so they can be used in furnaces and to superheat Blaze Burners.
onEvent('item.modification', event => {
    event.modify('modern_industrialization:bucket_diesel', item => {
      item.burnTime = 100 * ONE_ITEM
    });
    event.modify('modern_industrialization:bucket_boosted_diesel', item => {
      item.burnTime = 200 * ONE_ITEM
    });
    event.modify('techreborn:diesel_bucket', item => {
      item.burnTime = 100 * ONE_ITEM
    });
    event.modify('techreborn:nitro_diesel_bucket', item => {
      item.burnTime = 200 * ONE_ITEM
    });
    event.modify('kubejs:bone_knife', item => {
      item.tier = tierOptions => {
        tierOptions.uses = 96
        tierOptions.speed = 5.0
        tierOptions.attackDamageBonus = 1.0
        tierOptions.level = 1
        tierOptions.enchantmentValue = 8
        tierOptions.repairIngredient = Ingredient.of('minecraft:bone')
      }
    })
  })

onEvent('block.modification', event => {
  event.modify("fabricaeexnihilo:rubber_crucible", block => {
    block.material = "bone",
    block.requiresTool = true
    }),
  event.modify("fabricaeexnihilo:rubber_strainer", block => {
    block.material = "bone",
    block.requiresTool = true
    })
})