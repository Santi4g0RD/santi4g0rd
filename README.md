## Hi there 👋

### <a href="https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/">Santiago A. Ruiz Diaz</a> | IT & Cybersecurity Portfolio

📄 [1-Page Resume](./Santiago_Ruiz_Diaz_Resume.pdf) &nbsp;|&nbsp; 📋 [Full CV](./Santiago_Ruiz_Diaz_CV.pdf) &nbsp;|&nbsp; 🔗 [LinkedIn](https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/)

I'm passionate about cybersecurity and driven to solve real-world security challenges through hands-on projects. With a focus on threat detection, incident response, and OT/ICS environments, I build and test practical solutions that reflect today's evolving threat landscape.

🔍 My work focuses on:
- Threat detection & log analysis (SIEM use cases)
- Incident response & attack simulation
- OT/ICS & Building Management System (BMS) security
- Vulnerability assessment & remediation
- STIG compliance & system hardening

Feel free to explore my projects to see how I approach security from both operational and technical perspectives.

## 🔒 DISA STIG Compliance & System Hardening

### <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Win11%20STIG%20Project"> DISA STIG: System Hardening — 12 Windows 11 Controls Automated with PowerShell on Azure </a>

Implemented and verified 12 DISA STIG security controls on a Windows 11 Azure VM using PowerShell. Each script targets a specific STIG finding, applies the required configuration via registry or security policy, and was validated before and after execution.

| # | STIG-ID | Category | Control | Result |
|---|---------|----------|---------|--------|
| 1 | WN11-AU-000500 | Audit & Logging | Application event log ≥ 32768 KB | ✅ Pass |
| 2 | WN11-AU-000505 | Audit & Logging | Security event log ≥ 1024000 KB | ✅ Pass |
| 3 | WN11-AU-000510 | Audit & Logging | System event log ≥ 32768 KB | ✅ Pass |
| 4 | WN11-AC-000005 | Account Policy | Account lockout duration ≥ 15 min | ✅ Pass |
| 5 | WN11-AC-000010 | Account Policy | Account lockout threshold ≤ 3 attempts | ✅ Pass |
| 6 | WN11-AC-000015 | Account Policy | Reset lockout counter ≥ 15 min | ✅ Pass |
| 7 | WN11-CC-000005 | Component Config | Disable camera access from lock screen | ✅ Pass |
| 8 | WN11-CC-000197 | Component Config | Disable voice activation above lock screen | ✅ Pass |
| 9 | WN11-SO-000005 | Security Options | Disable built-in Guest account | ✅ Pass |
| 10 | WN11-SO-000070 | Security Options | UAC credential prompt on secure desktop | ✅ Pass |
| 11 | WN11-CC-000030 | Component Config | Disable Autoplay for non-volume devices | ✅ Pass |
| 12 | WN11-SO-000075 | Security Options | Block unencrypted passwords to SMB servers | ✅ Pass |

---

## 🛡️ Vulnerability Management Projects (Nessus + Azure)

- <a href="https://github.com/Santi4g0RD/Vulnerability-Management-Program-Implementation/tree/main"> Vulnerability Management Program </a>

## 🚨 Threat Hunting and Security Operations

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-TOR">Threat Hunt: TOR Browser Detection — Unauthorized Proxy Usage on Corporate Workstation</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Signal-After-Noise">Threat Hunt: Signal After The Noise — Post-Intrusion Hunt, Dual C2, LSASS Dump</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Rocky-Clinic-OpenEMR">Threat Hunt: Rocky Clinic OpenEMR Breach — Full-Chain Linux/Docker Compromise</a>
