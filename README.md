## Hi there 👋

### <a href="https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/">Santiago A. Ruiz Diaz</a> | IT & Cybersecurity Portfolio

📄 [1-Page Resume](./Santiago_Ruiz_Diaz_Resume.pdf) &nbsp;|&nbsp; 📋 [Full CV](./Santiago_Ruiz_Diaz_CV.pdf) &nbsp;|&nbsp; 🔗 [LinkedIn](https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/)

Security Engineer intern with hands-on experience in threat hunting, incident response, SIEM/EDR analysis, and system hardening. I build labs that reflect real attack chains — then document findings as analyst-grade IR reports with containment and remediation recommendations.

🔍 My work covers:
- Detection engineering & SOC operations (Splunk, Wazuh EDR, Zeek NSM, Suricata)
- Threat hunting & incident investigation (Microsoft Sentinel, MDE, KQL)
- Active Directory attack path analysis (BloodHound, SharpHound, Impacket)
- STIG compliance & automated system hardening (PowerShell, Bash)
- Vulnerability management (Nessus, Azure)
- OT/ICS & Building Management System (BMS) security

---

## 🪵 Splunk SOC Lab

<a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project"><img src="https://raw.githubusercontent.com/Santi4g0RD/SOC-Analyst-Projects/main/splunk-project/credential-attack-detection/dashboards/soc-overview-dashboard.png" alt="SOC Overview dashboard — Splunk Home Lab" width="700"></a>

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/credential-attack-detection">Credential Attack Detection</a> — SMB + SSH brute force & spray on a 4-VLAN Proxmox lab; validated across Wazuh EDR, Splunk, Suricata, and Zeek NSM
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/ad-privesc-lab">AD Privilege Escalation Lab</a> — BloodHound → Kerberoasting → DCSync → Golden Ticket on live AD; 12 MITRE techniques, 4 detection layers | <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/blob/main/splunk-project/ad-privesc-lab/INCIDENT-REPORT.md">IR-2026-001</a>

---

## ☁️ Microsoft Sentinel SOC Lab

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Microsoft-Sentinel">Microsoft Sentinel</a> — 5 KQL attack map workbooks: malicious inbound flows, VM auth failures, Entra ID sign-in failures/successes, Azure resource creation (live cyber range data)

---

## 🚨 Incident Response & Threat Hunting

Full-chain investigations documented as IR reports — hypothesis, KQL hunt queries, analyst observations, timeline, impact assessment, MITRE ATT&CK mapping, and containment/remediation recommendations.

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Rocky-Clinic-OpenEMR">**IR-2026-0214-EHR**</a> — Rocky Clinic OpenEMR: full-chain Linux/Docker compromise, 10-day dwell, patient data exfiltrated via Discord webhook
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Signal-After-Noise">**IR-2025-1213-C2**</a> — Post-intrusion hunt: dual Cloudflare-fronted C2, LSASS dump, live desktop confirmed
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-TOR">**IR-2026-0526-TOR**</a> — TOR browser detection: portable install, active circuit, in-session artifact concealment
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Persistent-Ghost">**Operation Persistent Ghost**</a> *(coming soon)* — PowerShell execution, scheduled task + registry run key persistence via Atomic Red Team; detected in Microsoft Sentinel

---

## 🔴 Active Directory & Offensive Security

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/BloodHound-AD-Lab">BloodHound AD Attack Path Mapping</a> — DCSync rights, GPO abuse, shadow credentials, shortest path to Domain Admin on WS2025

---

## 🔒 DISA STIG Compliance & System Hardening

Automated hardening scripts tested on live Azure VMs with before/after verification screenshots and pre/post Nessus vulnerability scans.

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Win25%20Server%20STIG%20Project">DISA STIG: Windows Server 2025</a> — 36 controls automated with PowerShell on Azure AD DC
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Win11%20STIG%20Project">DISA STIG: Windows 11</a> — 12 controls automated with PowerShell on Azure
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Ubuntu%20Server%20STIG%20Project">DISA STIG: Ubuntu Server 24.04</a> — 10 controls automated with Bash on Azure

---

## 🛡️ Vulnerability Management

- <a href="https://github.com/Santi4g0RD/Vulnerability-Management-Program-Implementation/tree/main">Vulnerability Management Program — Nessus + Azure</a>
