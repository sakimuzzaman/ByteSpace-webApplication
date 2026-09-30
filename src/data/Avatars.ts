export type Avatar = { src: string };

const avatar = (name: string): Avatar => ({ src: `/avatars/${name}.png` });

/** Seven faces shown in the Happy Students cards. */

export const happyStudents: Avatar[] = [
  avatar("avatar-1"),
  avatar("avatar-2"),
  avatar("avatar-3"),
  avatar("avatar-4"),
  avatar("avatar-5"),
  avatar("avatar-6"),
  avatar("avatar-7"),
];

/** Four learners shown on every course card. */
export const courseLearners: Avatar[] = [
  avatar("student-2"),
  avatar("learner-1"),
  avatar("learner-2"),
  avatar("learner-3"),
];

export const testimonialAvatars = {
  sarah: avatar("learner-2"),
  james: avatar("james"),
  alex: avatar("alex"),
};
