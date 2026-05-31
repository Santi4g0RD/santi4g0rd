## Hi there 👋

### <a href="https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/">Santiago A. Ruiz Diaz</a> | IT & Cybersecurity Portfolio

I'm passionate about cybersecurity and driven to solve real-world security challenges through hands-on projects. With a focus on threat detection, incident response, and OT/ICS environments, I build and test practical solutions that reflect today's evolving threat landscape.

🔍 My work focuses on:
- Threat detection & log analysis (SIEM use cases)
- Incident response & attack simulation
- OT/ICS & Building Management System (BMS) security
- Vulnerability assessment & remediation

Feel free to explore my projects to see how I approach security from both operational and technical perspectives.

---

## 🛡️ Vulnerability Management Projects (Nessus + Azure)

### <a href="https://github.com/Santi4g0RD/Vulnerability-Management-Program-Implementation/tree/main">Vulnerability Management Program</a>

Simulated the end-to-end implementation of a corporate vulnerability management program — from zero policy to full operational lifecycle.

**What was done:**
- Drafted and secured executive sign-off on a formal VM policy
- Conducted authenticated Tenable scans on a Windows Server 2025 VM
- Assessed and prioritized findings using CVSS scoring
- Distributed remediation packages and ran a mock CAB meeting for change approval
- Remediated 6 vulnerabilities: OS patching, guest account hardening, Wireshark removal, SMB signing, RDP NLA, and LAN Manager auth level
- Verified all remediations with follow-up scans

**Tools:** Tenable · Azure VMs · PowerShell · BASH

---

## 🚨 Threat Hunting and Security Operations

### <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-TOR">Threat Hunting Scenario — TOR Browser Detection</a>

Detected unauthorized TOR browser installation and usage on a corporate Windows 11 workstation using Microsoft Defender for Endpoint and KQL.

**What was done:**
- Simulated a malicious insider installing portable TOR to bypass corporate controls
- Hunted across `DeviceFileEvents`, `DeviceProcessEvents`, and `DeviceNetworkEvents`
- Confirmed full TOR circuit established to external relay `203.55.81.1:9001`
- Identified evasion: portable install, file deletion, non-standard execution path

**MITRE ATT&CK:** T1090.003 · T1204 · T1036  
**Tools:** MDE Advanced Hunting · KQL · Azure VM

---

### <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Signal-After-Noise">Threat Hunt — Signal After The Noise (Post-Intrusion)</a>

Post-intrusion hunt inside an Azure corporate estate. The breach was established — this hunt reconstructed what the operator did after gaining access across a 7-phase investigation.

**What was found:**
- **Initial access:** Valid credentials reused from external IP `173.244.55.131` via sarah-chen's machine (T1078)
- **Lateral movement:** Pre-staged RDP file used to pivot `azwks-phtg-02` → `azwks-phtg-01` (T1021)
- **Persistence:** Startup LNK executing hidden PowerShell on every logon (T1547)
- **C2:** Two Base64-encoded `Invoke-WebRequest` beacons to Cloudflare-fronted `health-cloud.cc` (T1071)
- **Defence evasion:** Defender exclusions written via `msmpeng.exe` — AV blinded to operator toolset (T1562)
- **Final actions:** Automated M365 auth attempts + confirmed hands-on-keyboard access

**MITRE ATT&CK:** T1078 · T1021 · T1547 · T1071 · T1562 · T1059  
**Tools:** Microsoft Sentinel · MDE · KQL (5 tables) · Azure
