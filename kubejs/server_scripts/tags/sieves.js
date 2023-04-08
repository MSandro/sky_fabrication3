// Adds all sieves to a common tag so it can be used as a tag in Create Sifter recipe.
onEvent('item.tags', event => {
  const sieves = ['fabricaeexnihilo:crimson_sieve', 'fabricaeexnihilo:dark_oak_sieve', 'fabricaeexnihilo:oak_sieve', 'fabricaeexnihilo:birch_sieve', 'fabricaeexnihilo:warped_sieve', 'fabricaeexnihilo:spruce_sieve', 'fabricaeexnihilo:jungle_sieve', 'fabricaeexnihilo:rubber_sieve', 'fabricaeexnihilo:acacia_sieve'];
  sieves.forEach(sieve => {
      event.add('c:sieves', sieve);
  })
})