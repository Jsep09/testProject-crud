export interface ApiResponse {
  status: string;
  data: Users[];
}

export interface Users {
  id: number;
  firstname: string;
  lastname: string;
  nickname: string;
  birthdate: string;
  age: string;
  gender: string;
  create_at: string;
  update_at: string;
}
