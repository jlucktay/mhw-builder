# Importing weapon stats from MHWDB

## Aim

Solve [this issue](https://github.com/TurkeyTickle/mhw-builder/issues/17) with a tool that does the following:

1. Get all weapon IDs from MHWDB, e.g. ```curl --silent --get "https://mhw-db.com/weapons" --data 'p={"id":true}' | jq 'sort_by(.id)' >> mhw-db.weapons.id.$(gdn).json```
1. Put the IDs into a stack/queue
1. Get each weapon's full info from MHWDB via HTTP call
1. Parse/unmarshal the useful fields per notes made below
1. Emit corresponding TSV line to suit mhw-builder

``` text
    type            WeaponType                  The weapon's type
weaponType

    rarity          Integer                     The rarity of the weapon
rarity

    name            String                      The name of the weapon
name

    attack          Attack                      Contains information about the attack values of the weapon
baseAttack

    elements        Array<WeaponElement>        An array containing element damage info for the weapon
element
elementBaseAttack
elementHidden

    durability      Array<WeaponSharpness>      An array of sharpness information, ordered by handicraft level; base sharpness can always be found at index 0
sharpnessLevels

    slots           Array<Slot>                 An array containing slot information for the weapon
slots

    attributes      WeaponAttributes            See WeaponAttributes for more information
baseAffinityPercent
baseDefense
elderseal



ailment
ailmentBaseAttack
ailmentHidden



skills

sharpnessDataNeeded
tags
```

## Further reading

[Here is some more info on projecting](https://docs.mhw-db.com/?shell#projecting-results).

This command will get only bow IDs:

``` shell
curl --silent --get "https://mhw-db.com/weapons" --data 'q={"type":"bow"}' --data 'p={"id":true,"name":true}' | jq 'sort_by(.id)' >> mhw-db.weapons.bow.$(gdn).json
```
