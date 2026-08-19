## Hi there 👋

### <a href="https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/">Santiago A. Ruiz Diaz</a> | OT/ICS Systems Engineer & Cybersecurity Portfolio

📄 [1-Page Resume](./Santiago_Ruiz_Diaz_Resume.pdf) &nbsp;|&nbsp; 📋 [Full CV](./Santiago_Ruiz_Diaz_CV.pdf) &nbsp;|&nbsp; 🔗 [LinkedIn](https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/)

OT/ICS professional with 15+ years of hands-on experience maintaining and troubleshooting Building Management Systems (BMS), SCADA-like controllers, PLC-driven automation (GCL+), and BACnet networks across a live, network-connected multi-building campus — paired with a security engineering skill set built as a Security Engineer at LOGN Pacific. I run full attack chains in a self-hosted Proxmox lab — AD privilege escalation, credential attacks, persistence — then validate detections across Splunk, Wazuh EDR, Zeek NSM, and Suricata, and document findings as analyst-grade IR reports.

🔍 My work covers:
- OT/ICS & Building Management System (BMS) operations — SCADA-like controllers, PLC (GCL+), BACnet
- Detection engineering & SOC operations (Splunk, Wazuh EDR, Zeek NSM, Suricata)
- Threat hunting & incident investigation (Microsoft Sentinel, MDE, KQL)
- Active Directory attack path analysis (BloodHound, SharpHound, Impacket)
- STIG compliance & automated system hardening (PowerShell, Bash)
- Vulnerability management (Nessus, Azure)

---

## 🗺️ Purdue Model Architecture — IT + OT/ICS + BACnet

<a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/lab-infrastructure"><img src="https://raw.githubusercontent.com/Santi4g0RD/SOC-Analyst-Projects/main/splunk-project/lab-infrastructure/screenshots/soclab_topology_current.svg" alt="Full SOC lab topology — 7 VLANs, 3-node Proxmox cluster, IT + OT/ICS + BACnet" width="700"></a>

Full-topology walkthrough (verification, live troubleshooting, build notes) → <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/lab-infrastructure">`lab-infrastructure/`</a>

---

## 🪵 Splunk SOC Lab

<a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project"><img src="https://raw.githubusercontent.com/Santi4g0RD/SOC-Analyst-Projects/main/splunk-project/credential-attack-detection/dashboards/soc-overview-dashboard.png" alt="SOC Overview dashboard — Splunk Home Lab" width="700"></a>

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/credential-attack-detection">Credential Attack Detection</a> — SMB + SSH brute force & spray on a 4-VLAN Proxmox lab; validated across Wazuh EDR, Splunk, Suricata, and Zeek NSM
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/ad-privesc-lab">AD Privilege Escalation Lab</a> — BloodHound → Kerberoasting → DCSync → Golden Ticket on live AD; 12 MITRE techniques, 4 detection layers | <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/blob/main/splunk-project/ad-privesc-lab/INCIDENT-REPORT.md">IR-2026-001</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/ot-ics-lab">OT/ICS Detection Lab</a> — Purdue-model ICS build (GRFICSv2 process simulation + OpenPLC + ScadaBR HMI) on isolated VLANs, Level 0-2 Modbus chain verified end-to-end; attack simulation and detection validation in progress
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/splunk-project/security-onion">Security Onion</a> — second SIEM/NSM platform (Elastic + Zeek + Suricata) stood up alongside Splunk with no license gating; found and fixed a 25-day-dead Zeek sensor and a hidden 3.5TB storage pool along the way

---

## ☁️ Microsoft Sentinel SOC Lab

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Microsoft-Sentinel">Microsoft Sentinel</a> — 5 KQL attack map workbooks: malicious inbound flows, VM auth failures, Entra ID sign-in failures/successes, Azure resource creation (live cyber range data)

---

## 🚨 Incident Response & Threat Hunting

Full-chain investigations documented as IR reports — hypothesis, KQL hunt queries, analyst observations, timeline, impact assessment, MITRE ATT&CK mapping, and containment/remediation recommendations.

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Rocky-Clinic-OpenEMR">**IR-2026-0214-EHR**</a> — Rocky Clinic OpenEMR: full-chain Linux/Docker compromise, 10-day dwell, patient data exfiltrated via Discord webhook
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Signal-After-Noise">**IR-2025-1213-C2**</a> — Post-intrusion hunt: dual Cloudflare-fronted C2, LSASS dump, live desktop confirmed
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-TOR">**IR-2026-0526-TOR**</a> — TOR browser detection: portable install, active circuit, in-session artifact concealment

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
