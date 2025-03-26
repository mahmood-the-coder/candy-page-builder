const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");
const { dialog } = require("electron").remote;



async function exportProject() {
  // Open folder selection dialog
  const folderResult = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (folderResult.canceled || folderResult.filePaths.length === 0) {
    alert("Export cancelled.");
    return;
  }

  const exportFolder = folderResult.filePaths[0]; // Selected folder

  // Ask the user for the ZIP file name
  const fileResult = await dialog.showSaveDialog({
    title: "Save As",
    defaultPath: path.join(exportFolder, "exported_page.zip"),
    filters: [{ name: "ZIP Files", extensions: ["zip"] }],
  });

  if (fileResult.canceled || !fileResult.filePath) {
    alert("Export cancelled.");
    return;
  }

  const zipFilePath = fileResult.filePath; // User-chosen ZIP file name
  const projectDir = path.join(exportFolder, "exported_page");

  // Ensure directory exists
  fs.ensureDirSync(projectDir);

  // Get content from textareas or editor
  const pageData = {
    html: document.getElementById("editorHtml").value || "<h1>Hello World</h1>",
    css: document.getElementById("editorCss").value || "body { font-family: Arial; }",
    js: document.getElementById("editorJs").value || "console.log('Hello World');",
  };

  // Save files inside the selected folder
  fs.writeFileSync(path.join(projectDir, "index.html"), pageData.html);
  fs.writeFileSync(path.join(projectDir, "styles.css"), pageData.css);
  fs.writeFileSync(path.join(projectDir, "script.js"), pageData.js);

  // Create a zip archive
  const output = fs.createWriteStream(zipFilePath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", () => {
    alert(`Exported successfully! File saved at: ${zipFilePath}`);
  });

  archive.on("error", (err) => {
    console.error("Error during export:", err);
    alert("Export failed!");
  });

  archive.pipe(output);
  archive.directory(projectDir, false);
  archive.finalize();
}

module.exports = exportProject;
