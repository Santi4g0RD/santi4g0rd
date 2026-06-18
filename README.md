## Hi there 👋

### <a href="https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/">Santiago A. Ruiz Diaz</a> | IT & Cybersecurity Portfolio

📄 [1-Page Resume](./Santiago_Ruiz_Diaz_Resume.pdf) &nbsp;|&nbsp; 📋 [Full CV](./Santiago_Ruiz_Diaz_CV.pdf) &nbsp;|&nbsp; 🔗 [LinkedIn](https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/)

Security Engineer intern with hands-on experience in threat hunting, incident response, SIEM/EDR analysis, and system hardening. I build labs that reflect real attack chains — then document findings as analyst-grade IR reports with containment and remediation recommendations.

🔍 My work covers:
- Threat hunting & incident investigation (Microsoft Sentinel, MDE, KQL)
- Active Directory attack path analysis (BloodHound, SharpHound)
- STIG compliance & automated system hardening (PowerShell, Bash)
- Vulnerability management (Nessus, Azure)
- OT/ICS & Building Management System (BMS) security

---

## 🪵 Splunk SOC Lab

<a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project"><img src="https://raw.githubusercontent.com/Santi4g0RD/SOC-Analyst-Projects/main/splunk-project/credential-attack-detection/dashboards/soc-overview-dashboard.png" alt="SOC Overview dashboard — Splunk Home Lab" width="700"></a>

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project">Splunk Home Lab — Self-hosted Proxmox lab (OPNsense firewall/IDS + Splunk Enterprise + Wazuh EDR), Windows (NetExec/SMB) and Linux (Hydra/SSH) brute force + password spray attacks, validated SPL detections with proof screenshots</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/atomic-red-team">Atomic Red Team — 9 MITRE ATT&CK techniques (Credential Access, Discovery, Execution, Persistence) simulated with Invoke-AtomicRedTeam and validated against Sysmon + Splunk telemetry, including two real detection gaps found and fixed</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/ad-attack-detection">AD Attack Detection Lab — Active Directory domain (soclab.local), Kerberoasting · AS-REP Roasting · DCSync simulated via Impacket from Kali, detections validated across three independent layers: Wazuh EDR + Splunk SPL + OPNsense firewall logs</a>

---

## ☁️ Microsoft Sentinel SOC Lab

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Microsoft-Sentinel">Microsoft Sentinel — 5 KQL Attack Map Workbooks: Malicious Inbound Flows, VM Auth Failures, Entra ID Sign-In Failures/Successes, Azure Resource Creation (live cyber range data)</a>

---

## 🚨 Incident Response & Threat Hunting

Full-chain investigations documented as IR reports — hypothesis, KQL hunt queries, analyst observations, timeline, impact assessment, MITRE ATT&CK mapping, and containment/remediation recommendations.

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Rocky-Clinic-OpenEMR">**IR-2026-0214-EHR** — Rocky Clinic OpenEMR Breach: Full-Chain Linux/Docker Compromise, 10-Day Dwell, Patient Data Exfiltration via Discord Webhook</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Signal-After-Noise">**IR-2025-1213-C2** — Signal After The Noise: Post-Intrusion Hunt, Dual Cloudflare-Fronted C2, LSASS Dump, Live Desktop Confirmed</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-TOR">**IR-2026-0526-TOR** — TOR Browser Detection: Policy Violation, Portable Install, Active Circuit, In-Session Artifact Concealment</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Persistent-Ghost">**Operation Persistent Ghost** *(coming soon)* — Community threat hunt: PowerShell execution, Scheduled Task + Registry Run Key persistence, Atomic Red Team simulation detected via Microsoft Sentinel (T1059.001, T1053.005, T1547.001, T1027)</a>

---

## 🔴 Active Directory & Offensive Security

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/BloodHound-AD-Lab">BloodHound AD Attack Path Mapping — DCSync Rights, GPO Abuse, Shadow Credentials, Shortest Path to Domain Admin on Windows Server 2025</a>

---

## 🔒 DISA STIG Compliance & System Hardening

Automated hardening scripts tested on live Azure VMs with before/after verification screenshots and pre/post Nessus vulnerability scans.

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Win25%20Server%20STIG%20Project">DISA STIG: Windows Server 2025 — 36 Controls Automated with PowerShell on Azure Active Directory DC</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Win11%20STIG%20Project">DISA STIG: Windows 11 — 12 Controls Automated with PowerShell on Azure</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Ubuntu%20Server%20STIG%20Project">DISA STIG: Ubuntu Server 24.04 — 10 Controls Automated with Bash on Azure</a>

---

## 🛡️ Vulnerability Management

- <a href="https://github.com/Santi4g0RD/Vulnerability-Management-Program-Implementation/tree/main">Vulnerability Management Program — Nessus + Azure</a>
