## Hi there 👋

### <a href="https://www.linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2/">Santiago A. Ruiz Diaz</a> | IT & Cybersecurity Portfolio

I'm passionate about cybersecurity and driven to solve real-world security challenges through hands-on projects. With a focus on threat detection, incident response, and OT/ICS environments, I build and test practical solutions that reflect today's evolving threat landscape.

🔍 My work focuses on:
- Threat detection & log analysis (SIEM use cases)
- Incident response & attack simulation
- OT/ICS & Building Management System (BMS) security
- Vulnerability assessment & remediation

Feel free to explore my projects to see how I approach security from both operational and technical perspectives.

## 🛡️ Vulnerability Management Projects (Nessus + Azure)

### <a href="https://github.com/Santi4g0RD/Vulnerability-Management-Program-Implementation/tree/main"> Vulnerability Management Program </a>

## 🚨 Threat Hunting and Security Operations

- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-TOR">Threat Hunting Scenario (Tor Browser Usage)</a>
- <a href="https://github.com/Santi4g0RD/SOC-Analyst-Projects/tree/main/Threat-Hunt-Signal-After-Noise">Threat Hunt: Signal After The Noise — Post-Intrusion Hunt</a>
  <br>End-to-end KQL investigation across 18 hunt questions covering the full attack chain:
  <ul>
    <li><strong>Initial Access (Q01–02):</strong> Identified credential reuse (T1078) over a network logon from an external IP via a compromised workstation; traced lateral movement via pre-staged RDP file using mstsc.exe (T1021)</li>
    <li><strong>Discovery &amp; Staging (Q03–06):</strong> Confirmed no further pivot; uncovered first operator script with <code>-WindowStyle Hidden -ExecutionPolicy Bypass</code>; located staging root at <code>C:\ProgramData\PHTG\HealthCloud\</code></li>
    <li><strong>Defence Evasion (Q07–08):</strong> Mapped attrib.exe hiding across Cache (×17) and TempCache (×2) subdirectories; identified LOLBin masquerade — <code>PHtGHealthCloudSvc.exe</code> spoofing <code>bitsadmin.exe</code> via VersionInfo tampering (T1036)</li>
    <li><strong>Persistence (Q09–14):</strong> Filtered 280 registry events to isolate Run key entry <code>PHTGHealthCloudTray</code> launching a hidden PS1 on logon (T1547.001); found Startup LNK (<code>PHTG HealthCloud.lnk</code>); and HKLM EventLog registration for custom source masking (T1112)</li>
    <li><strong>C2 &amp; Execution (Q15–18):</strong> Counted 22 healthcheck beacon loops; decoded two Base64-encoded PowerShell beacons hitting <code>status.health-cloud.cc/api/checkin</code> and <code>/api/status</code> over TLS (T1027, T1071); identified dual-channel C2 for resiliency; confirmed download-then-execute deployment pattern — pre-staged PS1 fetches implant from <code>updates.health-cloud.cc</code> then launches it within 1 second (T1105)</li>
  </ul>
