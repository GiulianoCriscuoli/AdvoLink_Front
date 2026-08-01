const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
};

export async function login(data: LoginPayload) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

export async function register(data: RegisterPayload) {
  const response = await fetch(`${API_URL}/cadastrar`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}