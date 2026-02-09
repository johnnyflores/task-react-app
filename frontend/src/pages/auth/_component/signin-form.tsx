import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Input from "@/components/Input/Input";
import Label from "@/components/Label/Label";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome to Tasks App</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email" className="font-normal!">
            Email
          </Label>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="font-normal!">
            Password
          </Label>
          <Input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </form>
  );
}
