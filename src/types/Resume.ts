export type Resume = {
  fullName: string;
  title: string;
  phoneNumber: string;
  location: string;
  email: string;
  website: {
    display: string;
    link: string;
  };
  summary: string;
  skills: string[];
  experience: {
    title: string;
    subtitle: string;
    actions: string[];
  }[];
};

export type Keys = {
  summary: string;
  mainSkills: string;
  projects: string;
};
