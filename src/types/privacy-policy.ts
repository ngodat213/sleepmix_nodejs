export interface PrivacyPolicySection {
  title: string;
  content: string;
  items?: string[];
}

export interface PrivacyPolicy {
  id: string;
  appName: string;
  lastUpdated: string;
  sections: PrivacyPolicySection[];
  contactEmail: string;
} 