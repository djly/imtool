/* eslint-disable camelcase */

import support_0_0 from "assets/images/emblems/support_0_0.png";
import support_0_1 from "assets/images/emblems/support_0_1.png";
import support_1_0 from "assets/images/emblems/support_1_0.png";
import support_1_1 from "assets/images/emblems/support_1_1.png";
import support_1_2 from "assets/images/emblems/support_1_2.png";
import support_2_0 from "assets/images/emblems/support_2_0.png";
import support_2_1 from "assets/images/emblems/support_2_1.png";
import support_2_2 from "assets/images/emblems/support_2_2.png";
import support_3_0 from "assets/images/emblems/support_3_0.png";
import support_3_1 from "assets/images/emblems/support_3_1.png";
import support_3_2 from "assets/images/emblems/support_3_2.png";
import support_4_0 from "assets/images/emblems/support_4_0.png";
import support_4_1 from "assets/images/emblems/support_4_1.png";
import support_4_2 from "assets/images/emblems/support_4_2.png";
import support_5_0 from "assets/images/emblems/support_5_0.png";
import support_5_1 from "assets/images/emblems/support_5_1.png";

export default function supportTree() {
  return {
    name: "Support",
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
                HP enhancement
                <br />
                <br /> HP+2%/4%/6%
              </div>
            ),
            img: support_0_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Hit Enhancement
                <br />
                <br /> Effect Hit 1.5%/3%/4.5%
              </div>
            ),
            img: support_0_1,
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
                Healing Enchancement
                <br />
                <br /> When self has a shield, DMG taken -2%/4%/6%
              </div>
            ),
            img: support_1_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Shield Enhancement
                <br />
                <br /> Shield Effect +3%/6%/9%
              </div>
            ),
            img: support_1_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Meditation
                <br />
                <br /> Healing Effect +3%/6%/9%
              </div>
            ),
            img: support_1_2,
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
                The Rescuer
                <br />
                <br /> Before the end of the first turn of each wave, Effect Hit +2%/4%/6%
              </div>
            ),
            img: support_2_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Pennies From Heaven
                <br />
                <br /> For allies with less than 50% HP Healing Effect +3%/6%/9%
              </div>
            ),
            img: support_2_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Selfish
                <br />
                <br /> When Inflicting a lay of buff or debuff successfully, self SPD increases by
                3/6/9/ for 1 turn, up to 5 times.
              </div>
            ),
            img: support_2_2,
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
                Hard Survival
                <br />
                <br /> Turn Meter reduction take -5%/10%/15%
              </div>
            ),
            img: support_3_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Posterior
                <br />
                <br /> For Enemies Whose DEF is lower than Self, DMG taken -1.5%3%/4.5%
              </div>
            ),
            img: support_3_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                Magic Touch
                <br />
                <br /> There is a 4%/8%/12% chance to reduce the cooldown of this skill by 1 turn
                when casting skills.
              </div>
            ),
            img: support_3_2,
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
                Sacred Winds
                <br />
                <br /> There is a 10%/20%/30% chance to remove 1 layer of non-control debuff from
                self at random at the end of each turn.
              </div>
            ),
            img: support_4_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Better and better
                <br />
                <br /> When inflicting an attribute debuff/buff successfully, there is a 6%/12%/18%
                chance to increase the duration by 1 turn.
              </div>
            ),
            img: support_4_1,
            max: 3,
          },
          {
            name: "name3",
            desc: (
              <div>
                More is Better
                <br />
                <br /> For targets with lower SPD than self, Effect Hit +3%/6%/9%
              </div>
            ),
            img: support_4_2,
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
                Urgent Treatment
                <br />
                <br /> Healing Effect +8%/16%/24%
              </div>
            ),
            img: support_5_0,
            max: 3,
          },
          {
            name: "name2",
            desc: (
              <div>
                Blue Streak
                <br />
                <br /> SPD +25/50/75
              </div>
            ),
            img: support_5_1,
            max: 3,
          },
        ],
      },
    ],
  };
}
