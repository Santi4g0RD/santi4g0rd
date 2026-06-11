import {
  Document, Packer, Paragraph, TextRun, BorderStyle,
  convertInchesToTwip, LineRuleType
} from "docx";
import { writeFileSync } from "fs";

const BLUE = "1F3864";
const BLACK = "000000";
const GRAY = "555555";
const FONT = "Calibri";

const spacing = (before = 0, after = 0, line = 240) => ({
  before, after, line, lineRule: LineRuleType.AUTO
});

const hr = () => new Paragraph({
  border: { bottom: { color: "AAAAAA", size: 6, style: BorderStyle.SINGLE } },
  spacing: spacing(60, 60),
});

const sectionHeader = (text) => new Paragraph({
  children: [new TextRun({ text, bold: true, color: BLUE, size: 20, font: FONT, allCaps: true })],
  spacing: spacing(180, 60),
  border: { bottom: { color: "CCCCCC", size: 4, style: BorderStyle.SINGLE } },
});

const subHeader = (text) => new Paragraph({
  children: [new TextRun({ text: "  " + text, bold: true, color: BLUE, size: 19, font: FONT })],
  spacing: spacing(100, 40),
});

const bullet = (text) => new Paragraph({
  children: [new TextRun({ text, size: 19, font: FONT })],
  bullet: { level: 0 },
  spacing: spacing(40, 40),
});

const para = (runs, spaceBefore = 0, spaceAfter = 60) => new Paragraph({
  children: runs,
  spacing: spacing(spaceBefore, spaceAfter),
});

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 20, color: BLACK },
        paragraph: { spacing: { line: 240 } },
      },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: {
          top: convertInchesToTwip(0.7),
          bottom: convertInchesToTwip(0.7),
          left: convertInchesToTwip(0.85),
          right: convertInchesToTwip(0.85),
        },
      },
    },
    children: [

      // NAME
      new Paragraph({
        children: [new TextRun({ text: "Santiago A. Ruiz Diaz", bold: true, size: 40, font: FONT, color: BLACK })],
        spacing: spacing(0, 40),
      }),

      // TITLE
      new Paragraph({
        children: [new TextRun({ text: "OT/ICS Cybersecurity Analyst  |  Security+ · CySA+ · PenTest+  |  15+ Years Critical Infrastructure", bold: true, size: 20, color: BLUE, font: FONT })],
        spacing: spacing(0, 60),
      }),

      // CONTACT
      new Paragraph({
        children: [new TextRun({ text: "s.abelrd@gmail.com  |  United States  |  English / Spanish (Bilingual)", size: 18, color: GRAY, font: FONT })],
        spacing: spacing(0, 20),
      }),
      new Paragraph({
        children: [new TextRun({ text: "linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2  |  github.com/Santi4g0RD", size: 18, color: GRAY, font: FONT })],
        spacing: spacing(0, 80),
      }),

      hr(),

      // PROFESSIONAL SUMMARY
      sectionHeader("Professional Summary"),
      new Paragraph({
        children: [new TextRun({ text: "Cybersecurity professional with 15+ years of hands-on experience operating Operational Technology (OT) and Industrial Control Systems (ICS) — including Building Management Systems (BMS), SCADA-like controllers, PLC-driven systems, and BACnet networks — now applying that field-level OT knowledge directly in cybersecurity operations.", size: 19, font: FONT })],
        spacing: spacing(60, 60),
      }),
      new Paragraph({
        children: [new TextRun({ text: "Most cybersecurity analysts have never touched a PLC or walked a server room monitoring a BACnet controller. I have — for 15+ years. That operational context shapes how I approach threat detection, anomaly analysis, and incident response across IT and OT environments.", size: 19, font: FONT })],
        spacing: spacing(0, 60),
      }),
      new Paragraph({
        children: [new TextRun({ text: "Currently working as Security Engineer I at LOGN Pacific, delivering hands-on projects in Microsoft Sentinel, Defender for Endpoint (EDR), Tenable vulnerability management, and SOC threat hunting — while completing my B.S. in Cybersecurity & Information Assurance at Western Governors University. Pursuing a Master's degree in Cybersecurity with enrollment planned for mid-2026.", size: 19, font: FONT })],
        spacing: spacing(0, 80),
      }),

      // CORE COMPETENCIES
      sectionHeader("Core Competencies"),
      new Paragraph({
        children: [new TextRun({
          text: "SIEM  ·  Threat Hunting  ·  SOC Operations  ·  Alert Triage  ·  Incident Response  ·  Log Analysis  ·  Vulnerability Assessment  ·  EDR  ·  Endpoint Detection & Response  ·  OT/ICS Security  ·  SCADA  ·  PLC  ·  GCL+  ·  BACnet  ·  BMS  ·  IEC 62443  ·  NIST 800-82  ·  NIST CSF  ·  NIST 800-53  ·  IT/OT Convergence  ·  Network Segmentation  ·  Purdue Model  ·  Zero Trust  ·  Privileged Access Management  ·  Access Control  ·  System Hardening  ·  Risk Assessment  ·  Python  ·  PowerShell  ·  Bash  ·  KQL  ·  Microsoft Sentinel  ·  Microsoft Defender for Endpoint  ·  Microsoft 365 Defender  ·  Tenable / Nessus  ·  Azure Security  ·  MITRE ATT&CK  ·  DISA STIG",
          size: 19, font: FONT
        })],
        spacing: spacing(60, 80),
      }),

      // CERTIFICATIONS
      sectionHeader("Certifications"),

      para([
        new TextRun({ text: "CompTIA PenTest+", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  CompTIA  ·  Issued: Mar 2026  ·  Expires: Mar 2029", size: 19, font: FONT }),
      ], 60, 30),
      para([
        new TextRun({ text: "CompTIA CySA+ (ce)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  CompTIA  ·  Issued: Aug 2025  ·  Expires: Aug 2031", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "CompTIA Security+ (ce)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  CompTIA  ·  Issued: Jul 2025  ·  Expires: Jul 2028", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "CompTIA Network+ (ce)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  CompTIA  ·  Issued: Jul 2025  ·  Expires: Jul 2028", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "CompTIA A+ (ce)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  CompTIA  ·  Issued: May 2025  ·  Expires: Aug 2031", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "CompTIA Secure Infrastructure Specialist (CSIS)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  CompTIA  ·  Issued: Jul 2025  ·  Expires: Jul 2028", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "CompTIA IT Operations Specialist (CIOS)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  CompTIA  ·  Issued: Jul 2025  ·  Expires: Jul 2028", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "Linux Essentials Certificate", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  LPI  ·  Issued: May 2025", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "ITIL Foundation", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  AXELOS", size: 19, font: FONT }),
      ], 0, 80),

      // EXPERIENCE
      sectionHeader("Experience"),

      // LOGN Pacific header
      new Paragraph({
        children: [new TextRun({ text: "LOGN Pacific", bold: true, size: 22, font: FONT })],
        spacing: spacing(60, 20),
      }),
      para([
        new TextRun({ text: "Security Engineer I  ·  March 2026 – Present", size: 19, color: GRAY, font: FONT }),
      ], 0, 60),
      new Paragraph({
        children: [new TextRun({ text: "Hands-on security engineering role delivering threat detection, vulnerability management, incident investigation, and SOC operations across Microsoft Azure, Microsoft Sentinel, Defender for Endpoint (EDR), and Tenable.", size: 19, font: FONT })],
        spacing: spacing(0, 60),
      }),

      subHeader("Vulnerability Management Program  (Tenable)"),
      bullet("Implemented a full VM lifecycle across ~200-server enterprise environment (Windows Server 2025 & Linux) using Tenable — authenticated and unauthenticated scans with DISA STIG scan templates."),
      bullet("Prioritized findings by CVSS score, asset criticality, and exposure: NTLMv1 disable, SMB signing enforcement, TLS 1.0/1.1 deprecation, and weak cipher remediation."),
      bullet("Built PowerShell scripts for automated Windows server remediation and Bash scripts for Linux server remediation at scale."),
      bullet("Facilitated CAB meetings, drafted VM policy aligned to NIST CSF and NIST 800-53, and drove executive sign-off and server team buy-in."),

      subHeader("Signal After The Noise  —  Post-Intrusion Threat Hunt  (Microsoft Sentinel)"),
      bullet("Reconstructed a full adversary attack chain in Microsoft Sentinel across a simulated enterprise environment using SOC threat hunting methodology."),
      bullet("Authored 20+ KQL queries across 6 MDE log tables: DeviceLogonEvents, DeviceProcessEvents, DeviceFileEvents, DeviceNetworkEvents, DeviceRegistryEvents, and DeviceEvents."),
      bullet("Mapped full kill chain: T1078 (credential reuse) → T1021 (RDP lateral movement) → T1547.001 (persistence) → T1071.001 (C2 beaconing) → T1562.001 (AMSI evasion) → T1036 (LOLBin masquerade) → T1003.001 (LSASS credential dump)."),
      bullet("Decoded Base64-encoded PowerShell payloads using KQL's base64_decode_tostring() to expose Cloudflare-fronted C2 infrastructure."),
      bullet("Produced full IOC table and MITRE ATT&CK-mapped incident report."),

      subHeader("TOR Network Detection  (Microsoft Defender for Endpoint / EDR)"),
      bullet("Confirmed unauthorized TOR browser usage on a corporate Azure Windows 11 endpoint via KQL across DeviceFileEvents, DeviceProcessEvents, and DeviceNetworkEvents."),
      bullet("Detected full TOR circuit — tor.exe to external relay on port 9001, firefox.exe from non-standard Desktop path to evade registry traces, suspicious file created and deleted to conceal activity."),
      bullet("Mapped to MITRE T1090.003 (proxy), T1204 (user execution), T1036 (masquerading). Delivered incident report with device isolation, HR/legal escalation, and perimeter block of TOR ports 9001–9151."),

      // CCM
      new Paragraph({
        children: [new TextRun({ text: "County College of Morris", bold: true, size: 22, font: FONT })],
        spacing: spacing(120, 20),
      }),
      para([
        new TextRun({ text: "HVAC & Building Automation Systems Specialist  |  OT/ICS Operations  ·  November 2010 – Present  (15+ years)", size: 19, color: GRAY, font: FONT }),
      ], 0, 60),
      new Paragraph({
        children: [new TextRun({ text: "Operating and maintaining critical building infrastructure across a network-connected campus — working directly with OT/ICS systems, SCADA-like controllers, BACnet-connected devices, and PLC-driven building automation across HVAC, boilers, and electrical infrastructure.", size: 19, font: FONT })],
        spacing: spacing(0, 60),
      }),

      subHeader("System Monitoring & Incident Escalation"),
      bullet("Monitored operational integrity of networked control systems across 15+ campus buildings, identifying anomalous behavior and system faults across BACnet-connected devices and electronic controls."),
      bullet("Identified and escalated potential risks to appropriate teams in alignment with organizational change management and security policies — supporting campus operational continuity."),
      bullet("Applied IT/OT convergence and network segmentation principles consistent with IEC 62443 and NIST 800-82 to isolate and protect building automation systems."),

      subHeader("PLC Scripting & System Maintenance"),
      bullet("Maintained, troubleshot, and repaired GCL+ PLC scripts across SCADA-like controllers and building automation systems — resolving logic errors and escalating out-of-scope issues."),
      bullet("Made configuration changes via BMS client terminal to maintain operational integrity across HVAC, boilers, and electrical infrastructure."),

      subHeader("Access Control & Identity Management"),
      bullet("Administered access control for building automation systems via BMS client terminal — provisioning, modifying, and revoking user permissions using least-privilege and privileged access management (PAM) principles."),
      bullet("Conducted periodic access reviews to ensure authorization aligned with current roles and responsibilities."),

      // PROJECTS
      sectionHeader("Projects"),
      new Paragraph({
        children: [new TextRun({ text: "Full documentation: github.com/Santi4g0RD", size: 19, font: FONT, bold: true })],
        spacing: spacing(60, 60),
      }),

      para([new TextRun({ text: "Vulnerability Management Program", bold: true, size: 19, font: FONT })], 0, 20),
      para([new TextRun({ text: "Tools: Tenable, PowerShell, Bash  |  Full VM lifecycle across ~200-server enterprise — scanning, CVSS prioritization, remediation scripting on Windows and Linux, VM policy drafting, and stakeholder coordination.", size: 19, font: FONT })], 0, 60),

      para([new TextRun({ text: "Signal After The Noise  —  Post-Intrusion Threat Hunt", bold: true, size: 19, font: FONT })], 0, 20),
      para([new TextRun({ text: "Tools: Microsoft Sentinel, KQL  |  Reconstructed full adversary kill chain across 6 MDE log tables using 20+ KQL queries; mapped to MITRE ATT&CK framework end-to-end.", size: 19, font: FONT })], 0, 60),

      para([new TextRun({ text: "TOR Network Detection", bold: true, size: 19, font: FONT })], 0, 20),
      para([new TextRun({ text: "Tools: Microsoft Defender for Endpoint (EDR), KQL  |  Detected and investigated unauthorized TOR usage on corporate endpoint; produced full IOC documentation and incident report with remediation recommendations.", size: 19, font: FONT })], 0, 80),

      // EDUCATION
      sectionHeader("Education"),

      para([
        new TextRun({ text: "B.S. Cybersecurity & Information Assurance (BSCSIA)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  Western Governors University  ·  Mar 2025 – Mar 2026", size: 19, font: FONT }),
      ], 60, 30),
      para([
        new TextRun({ text: "Master's Degree in Cybersecurity", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  Enrollment target: July–August 2026", size: 19, font: FONT }),
      ], 0, 30),
      para([
        new TextRun({ text: "Coursework — Electronics & Electrical Engineering Technology", size: 19, font: FONT }),
        new TextRun({ text: "  —  Thomas Edison State University  ·  2014–2017", size: 19, font: FONT }),
      ], 0, 80),

      // LANGUAGES
      sectionHeader("Languages"),
      new Paragraph({
        children: [new TextRun({ text: "English — Native / Bilingual  |  Spanish — Native / Bilingual", size: 19, font: FONT })],
        spacing: spacing(60, 60),
      }),

    ],
  }],
});

const buffer = await Packer.toBuffer(doc);
writeFileSync("Santiago_Ruiz_Diaz_CV.docx", buffer);
console.log("CV built successfully.");
