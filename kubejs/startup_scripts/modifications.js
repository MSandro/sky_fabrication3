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
    })
  })

onEvent('block.modification', event => {
  event.modify("fabricaeexnihilo:rubber_crucible", block => {
    block.material = "bone",
    block.requiresTool = true,
    block.hardness = 2
    }),
  event.modify("fabricaeexnihilo:rubber_strainer", block => {
    block.material = "bone",
    block.requiresTool = true,
    block.hardness = 2
  })
})