## Hi there 👋

### <a href="https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/">Santiago A. Ruiz Diaz</a> | IT & Cybersecurity Portfolio

📄 [1-Page Resume](./Santiago_Ruiz_Diaz_Resume.pdf) &nbsp;|&nbsp; 📋 [Full CV](./Santiago_Ruiz_Diaz_CV.pdf) &nbsp;|&nbsp; 🔗 [LinkedIn](https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/)

I'm passionate about cybersecurity and driven to solve real-world security challenges through hands-on projects. With a focus on threat detection, incident response, and OT/ICS environments, I build and test practical solutions that reflect today's evolving threat landscape.

🔍 My work focuses on:
- Threat detection & log analysis (SIEM use cases)
- Incident response & attack simulation
- OT/ICS & Building Management System (BMS) security
- Vulnerability assessment & remediation
- STIG compliance & system hardening (DISA, Windows, Linux)

Feel free to explore my projects to see how I approach security from both operational and technical perspectives.

## 🔒 DISA STIG Compliance & System Hardening (Windows 11 — Azure VM)

Automated 12 DISA STIG controls on a Windows 11 Azure VM using PowerShell. Each script targets a specific finding, sets the required registry value or policy, and was verified before and after execution.

**Audit & Logging**
| STIG-ID | Control | Script |
|---|---|---|
| WN11-AU-000500 | Application event log ≥ 32768 KB | [STIG-ID-WN11-AU-000500.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-AU-000500.ps1) |
| WN11-AU-000505 | Security event log ≥ 1024000 KB | [STIG-ID-WN11-AU-000505.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-AU-000505.ps1) |
| WN11-AU-000510 | System event log ≥ 32768 KB | [STIG-ID-WN11-AU-000510.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-AU-000510.ps1) |

**Account Policy**
| STIG-ID | Control | Script |
|---|---|---|
| WN11-AC-000005 | Account lockout duration ≥ 15 min | [STIG-ID-WN11-AC-000005.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-AC-000005.ps1) |
| WN11-AC-000010 | Account lockout threshold ≤ 3 attempts | [STIG-ID-WN11-AC-000010.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-AC-000010.ps1) |
| WN11-AC-000015 | Reset lockout counter ≥ 15 min | [STIG-ID-WN11-AC-000015.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-AC-000015.ps1) |

**Component Configuration**
| STIG-ID | Control | Script |
|---|---|---|
| WN11-CC-000005 | Disable camera access from lock screen | [STIG-ID-WN11-CC-000005.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-CC-000005.ps1) |
| WN11-CC-000030 | Disable Autoplay for non-volume devices | [STIG-ID-WN11-CC-000030.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-CC-000030.ps1) |
| WN11-CC-000197 | Disable voice activation above lock screen | [STIG-ID-WN11-CC-000197.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-CC-000197.ps1) |

**Security Options**
| STIG-ID | Control | Script |
|---|---|---|
| WN11-SO-000005 | Disable built-in Guest account | [STIG-ID-WN11-SO-000005.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-SO-000005.ps1) |
| WN11-SO-000070 | UAC credential prompt on secure desktop | [STIG-ID-WN11-SO-000070.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-SO-000070.ps1) |
| WN11-SO-000075 | Block unencrypted passwords to SMB servers | [STIG-ID-WN11-SO-000075.ps1](https://github.com/Santi4g0RD/stig-project/blob/master/STIG-ID-WN11-SO-000075.ps1) |

## 🛡️ Vulnerability Management Projects (Nessus + Azure)

- <a href="https://github.com/Santi4g0RD/Vulnerability-Management-Program-Implementation/tree/main"> Vulnerability Management Program </a>

## 🚨 Threat Hunting and Security Operations

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-TOR">Threat Hunt: TOR Browser Detection — Unauthorized Proxy Usage on Corporate Workstation</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Signal-After-Noise">Threat Hunt: Signal After The Noise — Post-Intrusion Hunt, Dual C2, LSASS Dump</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Rocky-Clinic-OpenEMR">Threat Hunt: Rocky Clinic OpenEMR Breach — Full-Chain Linux/Docker Compromise</a>
