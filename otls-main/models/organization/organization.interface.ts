export interface Organization {
  name?: string;
  date_added: Date | string;
  organization: string;
  type: string;
  main_contact: string;
  location: string;
  members: number;
  renewal_date: Date | string;
  created_by: string;
  email?: string;
  phone?: string;
  address?: { region?: string; street?: string; zip?: string; value?: string };
}
