interface FormField {
  type: string;
  placeholder: string;
  rows?: number;
}

interface Form {
  title: string;
  fields: FormField[];
}

interface Forms {
  newProjects: Form;
  generalInquiries: Form;
}

interface InfoItem {
  title: string;
  content?: string;
  link?: string;
}

interface SocialLink {
  name: string;
  url: string;
}

interface Social extends InfoItem {
  links: SocialLink[];
}

interface Info {
  address: InfoItem;
  email: InfoItem;
  social: Social;
}

export interface Contact {
  title: string;
  subtitle: {
    line1: string;
    line2: string;
    line3: string;
  };
  forms: Forms;
  info: Info;
} 