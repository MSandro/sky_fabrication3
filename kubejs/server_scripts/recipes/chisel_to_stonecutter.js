onEvent('recipes', event => {
  const chisel = Ingredient.of(`#chisel:chiseled_blocks`).getStacks().toArray();

  chisel.forEach(item => {
    var material = item.id.split('/')[1];
      event.stonecutting(item.id, `minecraft:${material}`, 1);
  });

  const factory = Ingredient.of(`#factory_blocks:chiseled_blocks`).getStacks().toArray();

  factory.forEach(item => {
      event.stonecutting(item.id, 'factory_blocks:factory', 1);
  });
});
