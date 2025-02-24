const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/generate-token", (req, res) => {
  // 🧑‍💻 Task 1 - Copy the code snippet, and generate token with secret, projectUuid and dashboardUuid

  const LIGHTDASH_EMBED_SECRET = "secret"; // replace with your secret from the Embed Configuration page
  const projectUuid = "YOUR_PROJECT_UUID"; // replace with your project uuid
  const data = {
    content: {
      type: "dashboard",
      projectUuid: projectUuid,
      dashboardUuid: "YOUR_DASHBOARD_UUID", // replace with your dashboard uuid
      dashboardFiltersInteractivity: {
        enabled: "none",
        allowedFilters: undefined,
      },
      canExportCsv: false,
      canExportImages: false,
      canExportPagePdf: true,
      canDateZoom: false,
    },
    user: {
      externalId: undefined,
      email: "YOUR_EMAIL", // replace with your email
    },
    userAttributes: { "": "" },
  };
  const token = jwt.sign(data, LIGHTDASH_EMBED_SECRET, { expiresIn: "1 hour" });
  const url = `https://${LIGHTDASH_DOMAIN}/embed/${projectUuid}#${token}`;

  // 🧑‍💻 Task 2 - Return token
  res.json({ url });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
