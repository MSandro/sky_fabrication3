
////////////////////////
/// Made by Team AOF ///
////////////////////////


onEvent('recipes', (event) => {
  REP(event, 'farmersdelight:tomato', 'croptopia:tomato')
  REP(event, 'farmersdelight:cabbage', 'croptopia:cabbage')
  REP(event, 'farmersdelight:rice', 'croptopia:rice')
  REP(event, 'farmersdelight:onion', 'croptopia:onion')
  REP(event, 'farmersdelight:bacon', 'croptopia:bacon')
  REP(event, 'farmersdelight:cooked_bacon', 'croptopia:cooked_bacon')
  REP(event, 'farmersdelight:garlic', 'bewitchment:garlic')
});

onEvent('tags.blocks', event => {
    // Farmland
    event.add('c:farmland', ['farmersdelight:rich_soil_farmland'])
    event.add('c:farmland', ['farmingforblockheads:fertilized_farmland_rich'])
    event.add('c:farmland', ['farmingforblockheads:fertilized_farmland_rich_stable'])
    event.add('c:farmland', ['farmingforblockheads:fertilized_farmland_healthy'])
    event.add('c:farmland', ['farmingforblockheads:fertilized_farmland_healthy_stable'])
    event.add('c:farmland', ['farmingforblockheads:fertilized_farmland_stable'])
});

onEvent('tags.items', event => {
    // Milk
    event.add('fabric:milk', ['croptopia:milk_bottle'])
    event.add('fabric:milk', ['croptopia:soy_milk'])
    event.add('c:milks', ['farmersdelight:milk_bottle'])
});
