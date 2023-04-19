//priority: 12
function pulverize(event, output, input) {
  if (input.includes("#")) {
    var json = {
      type: "indrev:pulverize",
      ingredients: {
        tag: (input == '#c:concrete_powders') ? "c:concrete_powder" : input.substring(1)
      },
      output: output,
      processTime: 150
    };
    event.custom(json);
  } else {
    var json = {
      type: "indrev:pulverize",
      ingredients: Item.of(input).toJson(),
      output: output,
      processTime: 150
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
