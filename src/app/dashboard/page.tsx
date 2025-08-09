"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";
import { UserIcon } from "@/components/icons/Icons";
import { AuthService } from "@/services/authService";

const DashboardPage = () => {
  const [user, setUser] = useState<{ name: string; phone: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      router.push("/auth");
    } else {
      setUser(currentUser);
    }
  }, [router]);

  const handleLogout = () => {
    AuthService.logout();
    router.push("/auth");
  };

  if (!user) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboardCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dashboard</h1>
        </div>

        <div className={styles.welcomeSection}>
          <div className={styles.welcomeIcon}>
            <UserIcon />
          </div>
          <h2 className={styles.welcomeText}>
            Dear <span className={styles.userName}>{user.name}</span>
          </h2>
          <p className={styles.message}>Welcome to your admin panel</p>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Phone Number</div>
            <div className={styles.infoValue}>{user.phone}</div>
          </div>
          
          <div className={styles.infoRow}>
            <div className={styles.infoLabel}>Status Account</div>
            <div className={styles.activeStatus}>Active</div>
          </div>
        </div>

        <button className={styles.logoutButton} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;