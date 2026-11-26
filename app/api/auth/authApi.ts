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

export type AuthResponse = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function login(data: LoginPayload): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const body = await response.json();

  return { ...body, ok: response.ok };
}

export async function register(data: RegisterPayload): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/cadastrar`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const body = await response.json();

  return { ...body, ok: response.ok };
}