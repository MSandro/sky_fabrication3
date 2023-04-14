onEvent('recipes', event => {
  event.remove({output:"createsifter:string_mesh"});
  event.remove({output:"createsifter:andesite_mesh"}); // Actually a flint mesh
  event.remove({output:"createsifter:zinc_mesh"});     // Actually an iron mesh
  event.remove({output:"createsifter:brass_mesh"});    // Actually a gold mesh
  
  const exNihiloMeshes = ["fabricaeexnihilo:string_mesh", "fabricaeexnihilo:flint_mesh", "fabricaeexnihilo:iron_mesh", "fabricaeexnihilo:gold_mesh", "fabricaeexnihilo:diamond_mesh", "fabricaeexnihilo:netherite_mesh", "fabricaeexnihilo:copper_mesh", "fabricaeexnihilo:emerald_mesh", "fabricaeexnihilo:carbon_mesh"];
  
  const sifterMeshes = ["createsifter:string_mesh", "createsifter:andesite_mesh", "createsifter:zinc_mesh", "createsifter:brass_mesh", "kubejs:diamond_mesh", "kubejs:netherite_mesh", "kubejs:copper_mesh", "kubejs:emerald_mesh", "kubejs:carbon_mesh"];
  
  exNihiloMeshes.forEach((xn_mesh, index) => {
  const sf_mesh = sifterMeshes[index];
  event.shapeless(xn_mesh, [sf_mesh]);
  event.shapeless(sf_mesh, [xn_mesh]);
});
})