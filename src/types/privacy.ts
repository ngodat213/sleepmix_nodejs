export interface PrivacySection {
  title: string;
  content: string;
  items?: string[];
}

export interface PrivacyContact {
  email: string;
  address: string;
  developer: string;
}

export interface Privacy {
  id: string;
  appName: string;
  lastUpdated: string;
  sections: PrivacySection[];
  contact: PrivacyContact;
} 