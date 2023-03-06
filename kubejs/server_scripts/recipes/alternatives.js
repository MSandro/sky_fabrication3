//priority: 12
function pulverize(event, output, input) {
  if (!input.includes("#")) {
    var json = {
      type: "indrev:pulverize",
      ingredients: Item.of(input).toJson(),
      output: output,
      processTime: 200
    };
    event.custom(json);
  }
}

onEvent('recipes', event => {
  event.forEachRecipe({type:'fabricaeexnihilo:hammer'}, recipe =>{
    let output = recipe.originalRecipeResult
    let parsedObject = JSON.parse(recipe.json);
    let input = parsedObject.block;
    console.log(`input ${input}, output ${output}`);
    pulverize(event, output, input);
  })
})
