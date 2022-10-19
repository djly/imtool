/* eslint-disable camelcase */
import defense_0_0 from "assets/images/emblems/defense_0_0.png";
import defense_0_1 from "assets/images/emblems/defense_0_1.png";
import defense_1_0 from "assets/images/emblems/defense_1_0.png";
import defense_1_1 from "assets/images/emblems/defense_1_1.png";
import defense_1_2 from "assets/images/emblems/defense_1_2.png";
import defense_2_0 from "assets/images/emblems/defense_2_0.png";
import defense_2_1 from "assets/images/emblems/defense_2_1.png";
import defense_2_2 from "assets/images/emblems/defense_2_2.png";
import defense_3_0 from "assets/images/emblems/defense_3_0.png";
import defense_3_1 from "assets/images/emblems/defense_3_1.png";
import defense_3_2 from "assets/images/emblems/defense_3_2.png";
import defense_4_0 from "assets/images/emblems/defense_4_0.png";
import defense_4_1 from "assets/images/emblems/defense_4_1.png";
import defense_4_2 from "assets/images/emblems/defense_4_2.png";
import defense_5_0 from "assets/images/emblems/defense_5_0.png";
import defense_5_1 from "assets/images/emblems/defense_5_1.png";

/* eslint-disable camelcase */
export default function defenseTree() {
  return {
    name: "Defense",
    tiers: [
      {
        tier: 1,
        maxInTier: 2,
        maxInGroup: 1,
        skills: [
          {
            name: "name1",
            desc: (
              <div>
                Def Enhancement
                <br />
                <br /> Def+2%/4%/6%
              </div>
            ),
            img: defense_0_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Res Enhancement Effect
                <br />
                <br /> Res +1.5%/3%/4.5%
              </div>
            ),
            img: defense_0_1,
            max: 3,
          },
        ],
      },
      {
        tier: 2,
        maxInTier: 3,
        maxInGroup: 2,
        skills: [
          {
            name: "name1",
            desc: (
              <div>
                Armor Of Thorns
                <br />
                <br /> DMG Reflect +2%/4%/6%
              </div>
            ),
            img: defense_1_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Curse Counter charge
                <br />
                <br /> DoT received -3%/6%/9%
              </div>
            ),
            img: defense_1_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Cut Loss In TIme
                <br />
                <br /> Healed Effect +3%/6%/9%
              </div>
            ),
            img: defense_1_2,
            max: 3,
          },
        ],
      },
      {
        tier: 3,
        maxInTier: 3,
        maxInGroup: 2,
        skills: [
          {
            name: "name1",
            desc: (
              <div>
                Harsh Transition
                <br />
                <br /> When an ally dies, DMG taken - 2%/4%/6%, This effect cannot stack.
              </div>
            ),
            img: defense_2_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Sacrifice The Dead
                <br />
                <br /> Restores Self 3%/6%/9% of max HP for every ally dead.
              </div>
            ),
            img: defense_2_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                No Fear
                <br />
                <br /> Beofre the end of the first turn of each wave, Effect Res +3%/6%/9%
              </div>
            ),
            img: defense_2_2,
            max: 3,
          },
        ],
      },
      {
        tier: 4,
        maxInTier: 3,
        maxInGroup: 2,
        skills: [
          {
            name: "name1",
            desc: (
              <div>
                Posterior
                <br />
                <br /> For Enemies Whose DEF is lower than Self, DMG taken -1.5%3%/4.5%
              </div>
            ),
            img: defense_3_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Under God&apos;s Wing
                <br />
                <br /> When self HP is higher than 50%, Tenacity +5%/10%/15%
              </div>
            ),
            img: defense_3_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Move with Burden
                <br />
                <br /> Control Res +4%/8%/12%
              </div>
            ),
            img: defense_3_2,
            max: 3,
          },
        ],
      },
      {
        tier: 5,
        maxInTier: 1,
        maxInGroup: 1,
        skills: [
          {
            name: "name1",
            desc: (
              <div>
                Grittiness
                <br />
                <br /> DMG received -3%/6%/9%, When the turn ends, the effect -1%/2%/3%
              </div>
            ),
            img: defense_4_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Spontaneous Recovery
                <br />
                <br /> Restores self 2%/4%/6% Max HP at the beginning of the first 3 turns of each
                wave.
              </div>
            ),
            img: defense_4_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Unremitting Efforts
                <br />
                <br /> When self HP is reduced by 25% or more by direct DMG of a single Skill,
                restores self hp by 3%/6%/9% of Max HP
              </div>
            ),
            img: defense_4_2,
            max: 3,
          },
        ],
      },
      {
        tier: 6,
        maxInTier: 1,
        maxInGroup: 1,
        skills: [
          {
            name: "name1",
            desc: (
              <div>
                Rugged Tenacity
                <br />
                <br /> Max HP +8%/16%/24%
              </div>
            ),
            img: defense_5_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Tough Skin
                <br />
                <br /> Shares 80% of the damage taken by an ally with less than 20%/25%/30% HP for 1
                turn of this ally. This skill has a 2 turn cooldown, and each target can only be
                protected by 1 hero at the same time.
              </div>
            ),
            img: defense_5_1,
            max: 3,
          },
        ],
      },
    ],
  };
}
