export type UserRole = "admin" | "user";
export type UserStatus = "active" | "pending" | "deactivated";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserInput {
  role?: UserRole;
  status?: UserStatus;
}
