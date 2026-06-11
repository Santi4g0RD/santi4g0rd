import {
  Document, Packer, Paragraph, TextRun,
  BorderStyle, convertInchesToTwip, LineRuleType
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
  spacing: spacing(160, 60),
  border: { bottom: { color: "CCCCCC", size: 4, style: BorderStyle.SINGLE } },
});

const bullet = (text, bold_part = null) => {
  const runs = [];
  if (bold_part) {
    const idx = text.indexOf(bold_part);
    if (idx >= 0) {
      if (idx > 0) runs.push(new TextRun({ text: text.slice(0, idx), size: 19, font: FONT }));
      runs.push(new TextRun({ text: bold_part, bold: true, size: 19, font: FONT }));
      if (idx + bold_part.length < text.length)
        runs.push(new TextRun({ text: text.slice(idx + bold_part.length), size: 19, font: FONT }));
    } else {
      runs.push(new TextRun({ text, size: 19, font: FONT }));
    }
  } else {
    runs.push(new TextRun({ text, size: 19, font: FONT }));
  }
  return new Paragraph({
    children: runs,
    bullet: { level: 0 },
    spacing: spacing(40, 40),
  });
};

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
          top: convertInchesToTwip(0.6),
          bottom: convertInchesToTwip(0.6),
          left: convertInchesToTwip(0.75),
          right: convertInchesToTwip(0.75),
        },
      },
    },
    children: [

      // NAME
      new Paragraph({
        children: [new TextRun({ text: "Santiago A. Ruiz Diaz", bold: true, size: 36, font: FONT, color: BLACK })],
        spacing: spacing(0, 40),
      }),

      // TITLE LINE
      new Paragraph({
        children: [new TextRun({ text: "OT/ICS Cybersecurity Analyst  |  Security+ · CySA+ · PenTest+  |  15+ Years Critical Infrastructure", bold: true, size: 20, color: BLUE, font: FONT })],
        spacing: spacing(0, 60),
      }),

      // CONTACT
      new Paragraph({
        children: [new TextRun({ text: "s.abelrd@gmail.com  |  United States  |  English / Spanish (Bilingual)  |  linkedin.com/in/santiago-a-ruiz-diaz-4aa418b2  |  github.com/Santi4g0RD", size: 18, color: GRAY, font: FONT })],
        spacing: spacing(0, 80),
      }),

      hr(),

      // SUMMARY
      sectionHeader("Summary"),
      new Paragraph({
        children: [new TextRun({ text: "Cybersecurity professional with 15+ years of hands-on OT/ICS operations — SCADA, PLC (GCL+), BACnet, BMS — now applying field-level expertise in threat detection, vulnerability management, and incident response. Currently delivering Microsoft Sentinel, Defender for Endpoint (EDR), and Tenable vulnerability management projects as Security Engineer I at LOGN Pacific. Bilingual English/Spanish.", size: 19, font: FONT })],
        spacing: spacing(60, 80),
      }),

      // TECHNICAL SKILLS
      sectionHeader("Technical Skills"),
      para([
        new TextRun({ text: "SIEM/Detection: ", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "Microsoft Sentinel · Microsoft Defender for Endpoint (EDR) · Microsoft 365 Defender · KQL · Threat Hunting · Log Analysis · Alert Triage · MITRE ATT&CK", size: 19, font: FONT }),
      ], 60, 40),
      para([
        new TextRun({ text: "Vulnerability Management: ", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "Tenable / Nessus · DISA STIG · CVSS · NIST CSF · NIST 800-53 · System Hardening", size: 19, font: FONT }),
      ], 0, 40),
      para([
        new TextRun({ text: "Scripting: ", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "PowerShell · Bash · Python", size: 19, font: FONT }),
      ], 0, 40),
      para([
        new TextRun({ text: "OT/ICS: ", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "SCADA · PLC · GCL+ · BACnet · BMS · IEC 62443 · NIST 800-82 · IT/OT Convergence · Network Segmentation · Purdue Model", size: 19, font: FONT }),
      ], 0, 40),
      para([
        new TextRun({ text: "Cloud: ", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "Microsoft Azure · Azure Security Center", size: 19, font: FONT }),
      ], 0, 40),
      para([
        new TextRun({ text: "Other: ", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "Incident Response · Access Control · Privileged Access Management · Zero Trust · SOC Operations", size: 19, font: FONT }),
      ], 0, 80),

      // CERTIFICATIONS
      sectionHeader("Certifications"),
      new Paragraph({
        children: [new TextRun({ text: "CompTIA Security+ (ce)  ·  CySA+ (ce)  ·  PenTest+  ·  Network+ (ce)  ·  A+ (ce)  ·  CSIS  ·  CIOS  ·  Linux Essentials (LPI)  ·  ITIL Foundation", size: 19, font: FONT })],
        spacing: spacing(60, 80),
      }),

      // EXPERIENCE
      sectionHeader("Experience"),

      // Job 1
      para([
        new TextRun({ text: "Security Engineer I", bold: true, size: 20, font: FONT }),
        new TextRun({ text: "  ·  LOGN Pacific  ·  March 2026 – Present", size: 19, color: BLUE, font: FONT }),
      ], 60, 40),

      bullet("Implemented full vulnerability management lifecycle across ~200-server enterprise (Windows Server 2025 & Linux) using Tenable — authenticated/unauthenticated scans, DISA STIG templates, CVSS-based prioritization; reduced critical exposure surface through NTLMv1, SMB signing, and TLS 1.0/1.1 remediation."),
      bullet("Conducted post-intrusion threat hunt (Signal After The Noise) in Microsoft Sentinel — authored 20+ KQL queries across 6 MDE tables; mapped full adversary kill chain: T1078 → T1021 → T1547.001 → T1071.001 → T1562.001 → T1036 → T1003.001."),
      bullet("Detected unauthorized TOR browser usage on corporate Azure endpoint via MDE/EDR and KQL — confirmed full TOR circuit, mapped to T1090.003/T1204/T1036, delivered incident report with device isolation and port-block recommendations."),
      bullet("Decoded Base64-encoded PowerShell C2 payloads using KQL's base64_decode_tostring() to expose Cloudflare-fronted C2 infrastructure; produced MITRE ATT&CK-mapped IOC report."),
      bullet("Facilitated CAB meetings, drafted VM policy, and drove executive sign-off across stakeholder teams."),

      // Job 2
      para([
        new TextRun({ text: "HVAC & Building Automation Systems Specialist  |  OT/ICS Operations", bold: true, size: 20, font: FONT }),
        new TextRun({ text: "  ·  County College of Morris  ·  Nov 2010 – Present", size: 19, color: BLUE, font: FONT }),
      ], 120, 40),

      bullet("15+ years operating OT/ICS environments — maintained and troubleshot GCL+ PLC scripts across SCADA-like controllers and BACnet-connected building systems; applied IEC 62443 and NIST 800-82 principles to IT/OT convergence and network segmentation of campus infrastructure."),
      bullet("Administered access control and managed user permissions for building automation systems via BMS client terminal, applying least-privilege and privileged access management (PAM) principles across HVAC, boilers, and electrical infrastructure."),
      bullet("Monitored system integrity across networked control systems, identified anomalous behavior, and executed configuration changes — supporting 15+ buildings and minimizing operational downtime."),

      // EDUCATION
      sectionHeader("Education"),
      para([
        new TextRun({ text: "B.S. Cybersecurity & Information Assurance (BSCSIA)", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  Western Governors University  ·  Mar 2025 – Mar 2026", size: 19, font: FONT }),
      ], 60, 40),
      para([
        new TextRun({ text: "Master's in Cybersecurity", bold: true, size: 19, font: FONT }),
        new TextRun({ text: "  —  Enrollment target: July–August 2026", size: 19, font: FONT }),
      ], 0, 80),

    ],
  }],
});

const buffer = await Packer.toBuffer(doc);
writeFileSync("Santiago_Ruiz_Diaz_Resume.docx", buffer);
console.log("Resume built successfully.");
