export type GetOtpProps = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export type CheckOtpProps = {
  username: string;
  otp_code: string;
};
