
function REP(e, input, output) {
    e.replaceInput({type: "minecraft:crafting_shaped"}, input, output);
    e.replaceInput({type: "minecraft:crafting_shapeless"}, input, output);
    e.replaceOutput({type: "minecraft:crafting_shaped"}, input, output);
    e.replaceOutput({type: "minecraft:crafting_shapeless"}, input, output);
}
