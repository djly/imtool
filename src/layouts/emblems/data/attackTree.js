/* eslint-disable camelcase */

import attack_0_0 from "assets/images/emblems/attack_0_0.png";
import attack_0_1 from "assets/images/emblems/attack_0_1.png";
import attack_1_0 from "assets/images/emblems/attack_1_0.png";
import attack_1_1 from "assets/images/emblems/attack_1_1.png";
import attack_1_2 from "assets/images/emblems/attack_1_2.png";
import attack_2_0 from "assets/images/emblems/attack_2_0.png";
import attack_2_1 from "assets/images/emblems/attack_2_1.png";
import attack_2_2 from "assets/images/emblems/attack_2_2.png";
import attack_3_0 from "assets/images/emblems/attack_3_0.png";
import attack_3_1 from "assets/images/emblems/attack_3_1.png";
import attack_3_2 from "assets/images/emblems/attack_3_2.png";
import attack_4_0 from "assets/images/emblems/attack_4_0.png";
import attack_4_1 from "assets/images/emblems/attack_4_1.png";
import attack_4_2 from "assets/images/emblems/attack_4_2.png";
import attack_5_0 from "assets/images/emblems/attack_5_0.png";
import attack_5_1 from "assets/images/emblems/attack_5_1.png";

export default function attackTree() {
  return {
    name: "Attack",
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
                Crit Enhancement
                <br />
                <br /> C.Rate + 1.5%/3%/4.5%
              </div>
            ),
            img: attack_0_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Atk Enhancement
                <br />
                <br /> Atk +2%/4%/6%
              </div>
            ),
            img: attack_0_1,
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
                Unexpected Attack
                <br />
                <br /> When self HP is full, DMG dealt +2%/4%/6%
              </div>
            ),
            img: attack_1_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Shield Slam
                <br />
                <br /> When attacking a target with shield, Dmg Dealt +4%/8%/12%
              </div>
            ),
            img: attack_1_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Berserk Blood
                <br />
                <br /> DMG Dealt +2%/4%/6% DMG taken +3%/6%/9%
              </div>
            ),
            img: attack_1_2,
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
                Arrogant
                <br />
                <br /> Before the end of the first turn of each wave, Direct DMG dealt +3%/6%/9%
              </div>
            ),
            img: attack_2_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Practice Makes Perfect
                <br />
                <br /> Direct DMG Dealt +4%/8%/12% in the next turn for every target killed. This
                effect cannot be stacked.
              </div>
            ),
            img: attack_2_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                The Last Stand
                <br />
                <br /> At the start of the turn, self DoT DMG dealt +0.6%/1.2%/1.8%, Up to 5 times
              </div>
            ),
            img: attack_2_2,
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
                Strength Buildup
                <br />
                <br /> When self has a buff, DMG dealt +1.5%/3%/4.5%
              </div>
            ),
            img: attack_3_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Victory Rush
                <br />
                <br /> For targets under Control status, Direct DMG dealt +3%/6%/9%
              </div>
            ),
            img: attack_3_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Pay Off Old Scores
                <br />
                <br /> For targets with a DoT debuff, DoT Dealt +3%/6%/9%
              </div>
            ),
            img: attack_3_2,
            max: 3,
          },
        ],
      },
      {
        tier: 5,
        maxInTier: 3,
        maxInGroup: 2,
        skills: [
          {
            name: "name1",
            desc: (
              <div>
                Brave Enemies
                <br />
                <br /> When attacking targets whose HP is higher then self, DMG dealt +2%/4%/6%
              </div>
            ),
            img: attack_4_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Weak Point
                <br />
                <br /> When attacking targets whose HP is above 50%, DoT +3%/6%/9%
              </div>
            ),
            img: attack_4_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                New Lease Of Life
                <br />
                <br /> When attacking targets with less than 50% HP, Direct DMG Dealt +3%/6%/9%
              </div>
            ),
            img: attack_4_2,
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
                Crack DMG
                <br />
                <br /> C.DMG +8%/16%/24%
              </div>
            ),
            img: attack_5_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Long-term Basis
                <br />
                <br /> Mastery +10%/20%/30%
              </div>
            ),
            img: attack_5_1,
            max: 3,
          },
        ],
      },
    ],
  };
}
