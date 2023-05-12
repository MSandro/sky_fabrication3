# Sky FABRICation 3 - 0.6.0 Update

<ul>
    <li>A new "expert" mode for those who like to spend more time with the earlygame.</li>
    <li>Many Questbook edits, including a redesigned Create chapter, corrections and updates for some of the quests, 2 new Endgame Quest Chapters: Spatial Harvesters and Endgame.</li>
    <li>Added some of the MI Metals as materials for Hephaestus/Tinker's Construct Tools, making them also meltable.</li>
    <li>TODO: New Hephaestus Tool Materials: Steeleaf, Fiery, Knightmetal, Neutronium and Infinity.</li>
    <li>Fixed Hephaestus "Step Up" ability.</li>
    <li>Hephaestus tools are now able to be equipped in Inventorio slots and are able to vein-mine using FTB Ultimine.</li>
    <li>Rebalanced Industrial Revolution's ore processing:
        <ul>
            <li>Industrial Smelter is renamed to Industrial Smeltery, it now melts metals into their Hephaestus molten form, at the rate of regular Smeltery by default.</li>
            <li>Condenser is renamed to Ingot Former, now it forms ingots from molten metals.</li>
            <li>Purified Ore Chunks now are made from raw ore instead of ore blocks. The purification -> melting -> ingot forming process allows for getting 2 ingots from 1 raw ore, giving some competition to Modern Industrialization's ore processing.</li>
            <li>For clarification: MI gives 1.5 ingots per raw ore, Hephaestus gives 1.33 ingots per raw ore, new IndRev ore processing can give 2 ingots per raw ore.</li>
            <li>For ore purification you now need to use MI's Sulfuric Acid instead of IndRev one, the IndRev has been disabled.</li>
            <li>4 new purified ore chunks have been added: Uranium, Nickel, Zinc and Cobalt.</li>
        </ul>
    </li>
    <li>3 Copper + 1 Tin -> 4 Bronze if you use an End Stone Brick Forge.</li>
    <li>Blacklisted Cardboard Boxes, AE2 Cables and MI machines from Carrier mod carrying.</li>
    <li>Retextured IndRev's Purified Ore Chunks to better match their ore counterparts.</li>
    <li>Retextured and renamed AE2Additions items and blocks to be consistent with each other and with AE2.</li>
    <li>Properly localized Spectrum, FabricaeExNihilo and TechReborn fluids.</li>
    <li>Given quite a lot of tags to items to add functions:
        <ul>
            <li>Added tool tags to Hephaestus tools for them to be able to be equipped in Inventorio Slots.</li>
            <li>Given mambience sword/tool/bow tags to give non-vanilla swords/tools/bows fancy sound effects.</li>
            <li>Added material tags to some of the MI metals to make them Hephaestus materials.</li>
        </ul>
    </li>
    <li>Removed redundant items, fluids and TR Fluid Cells from REI.</li>
    <li>Record Fragment recipe now accepts any music disc, instead of only disc 13.</li>
    <li>An ability to recycle Croparia Seeds in the MI Centrifuge, since Croparia one works on its own proprietary energy system and it's super slow. Also gives transparency, what are the odds of getting a fruit from recycling a seed!</li>
    <li>DML Data Model changes for balance with Simulacrum:
        <ul>
            <li>Basic: 8 -> 16</li>
            <li>Advanced: 16 -> 128</li>
            <li>Superior: 32 -> 256</li>
            <li>Self-Aware: 64 -> 512</li>
        </ul>
    </li>
	<li>Changed C:C&A Diamond Grit in Diamond Mesh's recipe to MI Diamond Dust.</li>
	<li>Changed Netherite Mesh's recipe: now it requires you to cast 3 Netherite Ingots on the Diamond Mesh. This improves the timing of the mesh, because previously it was too late to be useful.</li>
	<li>Processing ores in Alloy Forge now yields correct ingots! Yay!</li>
	<li>Spectrum's Stratine Ore and Hephaestus' Cobalt Ore are now obtainable using a Gold Drill.</li>
</ul>

- Added the ability to craft large table Endgame crafting recipes using large Mechanical Crafting recipes (Crafting ingredients only).
- REI does not feel good about rendering 9x9 recipes correctly... ![Infinity Ingot](https://user-images.githubusercontent.com/125081901/219349425-0beedaa4-7b3f-423f-82cc-74ee30ac1b47.png)

## For developers/debugging:
- A hidden quest chapter containing every Spectrum progression trigger located in the "spectrum:progression" invisible advancement tree.

## Not fixed:
- Lack of Void Blossom boss,
- Absolutely broken Croparia Items,
- Poor MI Diesel Drill breaking speed.
