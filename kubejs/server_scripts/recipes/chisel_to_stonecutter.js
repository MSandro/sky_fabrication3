onEvent('recipes', event => {
  const chisel = Ingredient.of(`#chisel:chiseled_blocks`).getStacks().toArray();

  chisel.forEach(item => {
    var material = item.id.split('/')[1];
    if (material == "purpur") {
      event.stonecutting(item.id, `minecraft:purpur_block`, 1);
    } else {
      event.stonecutting(item.id, `minecraft:${material}`, 1);
    }
  });

  const factory = Ingredient.of(`#factory_blocks:chiseled_blocks`).getStacks().toArray();

  factory.forEach(item => {
      event.stonecutting(item.id, 'factory_blocks:factory', 1);
  });
});
