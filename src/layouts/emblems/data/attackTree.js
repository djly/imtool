/* eslint-disable camelcase */
export default function attackTree() {
  const attack_1_1 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_1_2 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_2_1 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_2_2 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_2_3 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_3_1 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_3_2 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_3_3 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_4_1 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_4_2 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_4_3 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_5_1 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_5_2 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_5_3 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_6_1 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";
  const attack_6_2 =
    "https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png";

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
            desc: "description",
            img: attack_1_1,
            max: 3,
          },
          {
            name: "name2",
            desc: "description",
            img: attack_1_2,
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
            desc: "description",
            img: attack_2_1,
            max: 3,
          },
          {
            name: "name2",
            desc: "description",
            img: attack_2_2,
            max: 3,
          },
          {
            name: "name3",
            desc: "description",
            img: attack_2_3,
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
            desc: "description",
            img: attack_3_1,
            max: 3,
          },
          {
            name: "name2",
            desc: "description",
            img: attack_3_2,
            max: 3,
          },
          {
            name: "name3",
            desc: "description",
            img: attack_3_3,
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
            desc: "description",
            img: attack_4_1,
            max: 3,
          },
          {
            name: "name2",
            desc: "description",
            img: attack_4_2,
            max: 3,
          },
          {
            name: "name3",
            desc: "description",
            img: attack_4_3,
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
            desc: "description",
            img: attack_5_1,
            max: 3,
          },
          {
            name: "name2",
            desc: "description",
            img: attack_5_2,
            max: 3,
          },
          {
            name: "name3",
            desc: "description",
            img: attack_5_3,
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
            desc: "description",
            img: attack_6_1,
            max: 3,
          },
          {
            name: "name2",
            desc: "description",
            img: attack_6_2,
            max: 3,
          },
        ],
      },
    ],
  };
}
