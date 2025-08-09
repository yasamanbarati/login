"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./auth.module.scss";
import { LogoIcon } from "@/components/icons/Icons";
import { AuthService } from "@/services/authService";
import { Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";

const AuthPage = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const rememberedPhone = AuthService.getRememberedPhone();
    if (rememberedPhone) {
      setPhone(rememberedPhone);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async () => {
    if (!AuthService.validatePhone(phone)) {
      setError("The phone number is not valid (correct format: 09123456789)");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await AuthService.login(phone);

      if (rememberMe) {
        AuthService.rememberPhone(phone);
      } else {
        AuthService.forgetPhone();
      }

      router.push("/dashboard");
    } catch (err) {
      setError("Error communicating with the server");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <LogoIcon />
        </div>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>
          Welcome! Please enter your information
        </p>

        <div className={styles.inputBox}>
          <label className={styles.inputLabel}>
            Phone number<span className={styles.star}>*</span>
          </label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="09123456789"
            error={error || undefined}
            maxLength={11}
          />
        </div>

        <Button
          onClick={handleLogin}
          loading={loading}
          disabled={phone.length < 11}
        >
          Login
        </Button>

        <div className={styles.signupLink}>
          Don't have an account? <a>Register</a>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;