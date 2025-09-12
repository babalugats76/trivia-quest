#!/bin/bash

# Usage: ./generate-pdf.sh SESSION-01 [BODY_FONT] [CODE_FONT]
# Examples:
#   ./generate-pdf.sh SESSION-01
#   ./generate-pdf.sh SESSION-01 "Inter" "JetBrains Mono"
#   ./generate-pdf.sh SESSION-01 "Roboto" "Fira Code"

SESSION_NAME=$1
BODY_FONT=${2:-"Inter"}
CODE_FONT=${3:-"JetBrains Mono"}

if [ -z "$SESSION_NAME" ]; then
    echo "Usage: ./generate-pdf.sh SESSION-NAME [BODY_FONT] [CODE_FONT]"
    echo "Available fonts: Inter, Roboto, Open Sans, Lato, Source Sans Pro, Geist"
    echo "Available code fonts: JetBrains Mono, Fira Code, Source Code Pro, Roboto Mono, Geist Mono"
    exit 1
fi

echo "Generating PDF for $SESSION_NAME..."
echo "Installing fonts locally..."

# Install fonts locally if not already installed
if ! fc-list | grep -q "$BODY_FONT"; then
    echo "Installing $BODY_FONT font..."
    case "$BODY_FONT" in
        "Inter")
            wget -q https://github.com/rsms/inter/releases/download/v3.19/Inter-3.19.zip -O /tmp/inter.zip
            sudo unzip -q /tmp/inter.zip "Inter Desktop/*.ttf" -d /tmp/
            sudo cp /tmp/Inter\ Desktop/*.ttf /usr/share/fonts/truetype/
            ;;
        "Roboto")
            sudo apt-get install -qq fonts-roboto
            ;;
        "Open Sans")
            sudo apt-get install -qq fonts-open-sans
            ;;
        "Geist")
            wget -q https://github.com/vercel/geist-font/raw/main/fonts/Geist/otf/Geist-Regular.otf -O /tmp/Geist-Regular.otf
            wget -q https://github.com/vercel/geist-font/raw/main/fonts/Geist/otf/Geist-Bold.otf -O /tmp/Geist-Bold.otf
            sudo cp /tmp/Geist-*.otf /usr/share/fonts/truetype/
            ;;
    esac
    sudo fc-cache -f
fi

if ! fc-list | grep -q "$CODE_FONT"; then
    echo "Installing $CODE_FONT font..."
    case "$CODE_FONT" in
        "JetBrains Mono")
            wget -q https://github.com/JetBrains/JetBrainsMono/releases/download/v2.304/JetBrainsMono-2.304.zip -O /tmp/jetbrains.zip
            sudo unzip -q /tmp/jetbrains.zip "fonts/ttf/*.ttf" -d /tmp/
            sudo cp /tmp/fonts/ttf/*.ttf /usr/share/fonts/truetype/
            ;;
        "Fira Code")
            sudo apt-get install -qq fonts-firacode
            ;;
        "Geist Mono")
            wget -q https://github.com/vercel/geist-font/raw/main/fonts/GeistMono/otf/GeistMono-Regular.otf -O /tmp/GeistMono-Regular.otf
            wget -q https://github.com/vercel/geist-font/raw/main/fonts/GeistMono/otf/GeistMono-Bold.otf -O /tmp/GeistMono-Bold.otf
            sudo cp /tmp/GeistMono-*.otf /usr/share/fonts/truetype/
            ;;
    esac
    sudo fc-cache -f
fi

# Step 1: Create CSS file
cat > ${SESSION_NAME}.css << EOF
/* Use locally installed fonts */

/* PDF-optimized layout */
@page {
  margin: 0.6in 0.75in 0.6in 0.75in;
  size: letter;
}

body {
  font-family: "$BODY_FONT", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #1f2328;
  margin: 0;
  padding: 0;
  max-width: none;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "$BODY_FONT", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;
}
h1 {
  font-size: 1.75em;
  border-bottom: 1px solid #d0d7de;
  padding-bottom: 0.3em;
  margin-top: 0;
}
h2 {
  font-size: 1.5em;
  border-bottom: 1px solid #d0d7de;
  padding-bottom: 0.3em;
  margin-top: 36px;
  margin-bottom: 18px;
  page-break-after: avoid;
}

/* First H2 after title gets normal spacing */
h1 + * h2:first-of-type,
h2:first-of-type {
  margin-top: 24px;
}

/* Fix anchor link scrolling - add offset so headings are visible */
a[id] {
  scroll-margin-top: 20px;
}
h3 {
  font-size: 1.25em;
  margin-top: 24px;
  margin-bottom: 12px;
  page-break-after: avoid;
  break-after: avoid;
}

/* Keep headings with their following content */
h3 + ol,
h3 + ul,
h3 + p {
  page-break-before: avoid;
  break-before: avoid;
}

/* Ensure lists stay together better */
ol, ul {
  page-break-inside: avoid;
  break-inside: avoid;
}

/* Keep at least 2 lines of a list on the same page as heading */
h3 {
  orphans: 2;
  widows: 2;
}
code {
  font-family: "$CODE_FONT", ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  background-color: #f1f3f4 !important;
  color: #c7254e !important;
  padding: 2px 4px !important;
  border-radius: 3px !important;
  border: 1px solid #d1d5da !important;
  white-space: nowrap;
  word-break: break-word;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

pre {
  font-family: "$CODE_FONT", ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace !important;
  background-color: #f8f9fa !important;
  border: 1px solid #e1e4e8 !important;
  border-radius: 6px !important;
  padding: 16px !important;
  overflow: visible !important;
  white-space: pre !important;
  word-wrap: normal !important;
  page-break-inside: avoid !important;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
  font-size: 14px !important;
  line-height: 1.4 !important;
  display: block !important;
  width: 100% !important;
}

/* Force Chrome to preserve whitespace in PDF */
@media print {
  pre {
    white-space: pre !important;
    font-family: "$CODE_FONT", monospace !important;
    display: block !important;
  }
  
  pre * {
    white-space: pre !important;
  }
}

pre code {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  color: #24292f !important;
}
ul, ol {
  padding-left: 1.8em;
  margin-bottom: 12px;
}

li {
  margin-bottom: 6px;
  line-height: 1.4;
}

/* Ensure proper list formatting in PDF */
@media print {
  ul, ol {
    page-break-inside: avoid;
    display: block !important;
  }
  
  li {
    page-break-inside: avoid;
    display: list-item !important;
    margin-bottom: 8px !important;
  }
  
  /* Force proper display of all elements */
  * {
    box-sizing: border-box !important;
  }
}
p {
  margin-bottom: 12px;
}
a {
  color: #0969da;
  text-decoration: none;
}
strong {
  font-weight: 600;
}

/* Table Styling */
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin: 16px 0;
  font-size: 16px;
  line-height: 1.5;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  vertical-align: top;
  border: 1px solid #d0d7de;
}

th {
  font-weight: 600;
  background-color: #f6f8fa;
  color: #24292f;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

/* Table code styling */
table code {
  font-size: 14px !important;
  padding: 2px 4px !important;
}

/* Set minimum width for first column (terms) but allow wrapping */
table td:first-child {
  min-width: 150px;
}

/* PDF-specific table styling */
table {
  page-break-inside: auto !important;
}

th {
  page-break-after: avoid !important;
}

tbody tr {
  page-break-inside: avoid !important;
  page-break-after: auto !important;
}

/* Prevent header repetition on page breaks */
thead {
  display: table-header-group !important;
}

@media print {
  thead {
    display: table-row-group !important;
  }
  
  table {
    page-break-inside: auto !important;
  }
  
  tr {
    page-break-inside: avoid !important;
  }
}
EOF

# Step 2: Convert markdown to HTML with embedded CSS
pandoc ${SESSION_NAME}.md -o ${SESSION_NAME}.html \
    --standalone \
    --self-contained \
    --metadata pagetitle="$SESSION_NAME - Wizcamp Session Guide" \
    --css=${SESSION_NAME}.css

# Step 3: Generate PDF with Chrome (force color preservation)
google-chrome-stable --headless --disable-gpu \
    --print-to-pdf=${SESSION_NAME}.pdf \
    --no-pdf-header-footer \
    --disable-pdf-tagging \
    --virtual-time-budget=5000 \
    --run-all-compositor-stages-before-draw \
    --disable-web-security \
    --force-color-profile=srgb \
    --disable-background-timer-throttling \
    --disable-features=VizDisplayCompositor \
    --disable-extensions \
    --no-sandbox \
    --disable-dev-shm-usage \
    ${SESSION_NAME}.html

echo "PDF generated: ${SESSION_NAME}.pdf"
echo "Fonts used: Body='$BODY_FONT', Code='$CODE_FONT'"

# Clean up temporary files
rm ${SESSION_NAME}.css
# rm ${SESSION_NAME}.html
