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

/** Four students shown on every course card. */
export const courseLearners: Avatar[] = [
  avatar("student-1"),
  avatar("student-2"),
  avatar("student-3"),
  avatar("student-4"),
];

export const testimonialAvatars = {
  sarah: avatar("student-3"),
  james: avatar("student-5"),
  alex: avatar("student-6"),
};
