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
        children: [new TextRun({ text: "OT/ICS Systems Engineer  |  Building Automation & Controls  |  Security+ · CySA+ · PenTest+  |  15+ Years Critical Infrastructure", bold: true, size: 20, color: BLUE, font: FONT })],
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
        children: [new TextRun({ text: "Operational Technology (OT) and Industrial Control Systems (ICS) professional with 15+ years of hands-on experience maintaining and troubleshooting Building Management Systems (BMS), SCADA-like controllers, PLC-driven automation (GCL+), and BACnet networks across a live, network-connected multi-building campus.", size: 19, font: FONT })],
        spacing: spacing(60, 60),
      }),
      new Paragraph({
        children: [new TextRun({ text: "That field-level ownership — system monitoring, PLC logic repair, configuration changes, and access control administration across HVAC, boiler, and electrical infrastructure — is paired with a security engineering skill set most controls engineers don't have: vulnerability management, threat hunting, and endpoint detection across a ~200-server enterprise environment.", size: 19, font: FONT })],
        spacing: spacing(0, 60),
      }),
      new Paragraph({
        children: [new TextRun({ text: "Currently working as Security Engineer I at LOGN Pacific, delivering hands-on projects in Tenable vulnerability management, Microsoft Sentinel, and Defender for Endpoint — while completing my B.S. in Cybersecurity & Information Assurance at Western Governors University. Pursuing a Master's degree in Cybersecurity with enrollment planned for mid-2026.", size: 19, font: FONT })],
        spacing: spacing(0, 80),
      }),

      // CORE COMPETENCIES
      sectionHeader("Core Competencies"),
      new Paragraph({
        children: [new TextRun({
          text: "OT/ICS Operations  ·  Building Management Systems (BMS)  ·  SCADA  ·  PLC Programming & Troubleshooting  ·  GCL+  ·  BACnet  ·  HVAC & Electrical Infrastructure  ·  IEC 62443  ·  NIST 800-82  ·  IT/OT Convergence  ·  Network Segmentation  ·  Purdue Model  ·  System Monitoring & Fault Diagnosis  ·  Access Control  ·  Privileged Access Management  ·  Change Management  ·  Risk Assessment  ·  SIEM  ·  Threat Hunting  ·  Incident Response  ·  Vulnerability Assessment  ·  EDR  ·  Zero Trust  ·  System Hardening  ·  Python  ·  PowerShell  ·  Bash  ·  KQL  ·  Microsoft Sentinel  ·  Microsoft Defender for Endpoint  ·  Tenable / Nessus  ·  Azure Security  ·  MITRE ATT&CK  ·  DISA STIG  ·  NIST CSF  ·  NIST 800-53",
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

      // CCM
      new Paragraph({
        children: [new TextRun({ text: "County College of Morris", bold: true, size: 22, font: FONT })],
        spacing: spacing(60, 20),
      }),
      para([
        new TextRun({ text: "HVAC & Building Automation Systems Specialist  |  OT/ICS Operations  ·  November 2010 – Present  (15+ years)", size: 19, color: GRAY, font: FONT }),
      ], 0, 60),
      new Paragraph({
        children: [new TextRun({ text: "Technical owner of critical building infrastructure across a network-connected, multi-building campus — operating and maintaining OT/ICS systems, SCADA-like controllers, BACnet-connected devices, and PLC-driven building automation across HVAC, boilers, and electrical infrastructure.", size: 19, font: FONT })],
        spacing: spacing(0, 60),
      }),

      subHeader("PLC Scripting & System Maintenance"),
      bullet("Maintained, troubleshot, and repaired GCL+ PLC scripts across SCADA-like controllers and building automation systems — diagnosing and resolving logic errors and escalating out-of-scope issues to vendor/engineering teams."),
      bullet("Made configuration changes and system adjustments via BMS client terminal to maintain operational integrity across HVAC, boilers, and electrical infrastructure — minimizing downtime and unplanned outages."),

      subHeader("System Monitoring & Incident Escalation"),
      bullet("Monitored operational integrity of networked control systems across 15+ campus buildings, identifying anomalous behavior and system faults across BACnet-connected devices and electronic controls."),
      bullet("Identified and escalated potential risks and unresolvable issues to appropriate teams, supporting system reliability and continuity of campus operations."),
      bullet("Applied IT/OT convergence and network segmentation principles consistent with IEC 62443 and NIST 800-82 to isolate and protect building automation systems from the broader campus network."),
      bullet("Collaborated with leadership to align OT operations with organizational change management and security policies."),

      subHeader("Access Control & Identity Management"),
      bullet("Administered access control for building automation systems via BMS client terminal — provisioning, modifying, and revoking user permissions using least-privilege and privileged access management (PAM) principles."),
      bullet("Conducted periodic access reviews to ensure authorization aligned with current roles and responsibilities."),

      // LOGN Pacific header
      new Paragraph({
        children: [new TextRun({ text: "LOGN Pacific", bold: true, size: 22, font: FONT })],
        spacing: spacing(120, 20),
      }),
      para([
        new TextRun({ text: "Security Engineer I  ·  March 2026 – Present", size: 19, color: GRAY, font: FONT }),
      ], 0, 60),
      new Paragraph({
        children: [new TextRun({ text: "Security engineering role applying an OT-informed operational lens to threat detection, vulnerability management, and incident investigation across Microsoft Azure, Microsoft Sentinel, Defender for Endpoint (EDR), and Tenable.", size: 19, font: FONT })],
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
